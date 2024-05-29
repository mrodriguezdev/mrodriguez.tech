import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://mrodriguez.tech";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
  BASE_URL = LIVE_URL;
}


// https://astro.build/config
export default defineConfig({
  server: {
    port: SERVER_PORT
  },
  site: BASE_URL,
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap()],
  output: "server",
  adapter: vercel()
});