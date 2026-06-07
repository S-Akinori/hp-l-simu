import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.PUBLIC_BASE_PATH ?? "/hp-l-simu";

  return {
    site: env.PUBLIC_SITE_URL,
    base,
  };
});
