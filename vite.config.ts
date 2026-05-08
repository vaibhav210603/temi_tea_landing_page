import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target: Vercel (Node serverless). Cloudflare plugin disabled.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
