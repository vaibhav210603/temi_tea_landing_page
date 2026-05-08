import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target: Vercel (Edge runtime). Cloudflare plugin disabled.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
  ssr: {
    target: "webworker",
    noExternal: true,
  },
});
