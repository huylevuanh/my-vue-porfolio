import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 1703,
    hmr: true,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/_variable.scss" as *;`,
      },
    },
  },
});
