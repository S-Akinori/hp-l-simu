import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    site: env.PUBLIC_SITE_URL,
    vite: {
      plugins: [tailwindcss()],
    },
  };
});
