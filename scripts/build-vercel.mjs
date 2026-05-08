// Postbuild: package vite build output into Vercel Build Output API v3 (.vercel/output)
// Runs an Edge Function that proxies all non-static requests to the TanStack Start server bundle.
import { cpSync, mkdirSync, writeFileSync, rmSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const out = join(root, ".vercel", "output");

if (!existsSync(join(dist, "client")) || !existsSync(join(dist, "server"))) {
  console.error("[vercel] dist/client or dist/server missing — run `vite build` first.");
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

// 1. Static assets
const staticDir = join(out, "static");
cpSync(join(dist, "client"), staticDir, { recursive: true });

// 2. SSR Edge Function
const funcDir = join(out, "functions", "_ssr.func");
mkdirSync(funcDir, { recursive: true });

// Copy server bundle into function directory
cpSync(join(dist, "server"), funcDir, { recursive: true });

// Vercel Node.js Function entrypoint — bridges Node.js (req, res) to Web (Request, Response)
writeFileSync(
  join(funcDir, "index.js"),
  `import server from "./server.js";
export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['host'];
  const url = new URL(req.url, \`\${protocol}://\${host}\`);
  
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) headers.set(key, Array.isArray(value) ? value.join(', ') : value);
  }

  const webReq = new Request(url, {
    method: req.method,
    headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    duplex: 'half'
  });

  try {
    const webRes = await server.fetch(webReq);
    res.statusCode = webRes.status;
    webRes.headers.forEach((v, k) => res.setHeader(k, v));
    
    const body = await webRes.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (err) {
    console.error("[ssr-error]", err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}`,
);

writeFileSync(
  join(funcDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.js",
      launcherType: "Nodejs",
    },
    null,
    2,
  ),
);

// 3. Build output config — serve static files first, fall back to SSR function
const staticFiles = new Set();
function walk(dir, prefix = "") {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walk(join(dir, entry.name), rel);
    else staticFiles.add(rel);
  }
}
walk(staticDir);

const staticRegex = `^/(${Array.from(staticFiles)
  .map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  .join("|")})$`;

writeFileSync(
  join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: staticRegex, headers: { "cache-control": "public, max-age=31536000, immutable" }, continue: true },
        { src: "/(.*)", dest: "/_ssr" },
      ],
    },
    null,
    2,
  ),
);

console.log(`[vercel] Build output written to .vercel/output (${staticFiles.size} static files)`);
