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

// Vercel Edge Function entrypoint — re-export the server bundle's fetch handler
writeFileSync(
  join(funcDir, "index.js"),
  `import server from "./server.js";\nexport default server.fetch;\n`,
);

writeFileSync(
  join(funcDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "edge",
      entrypoint: "index.js",
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
