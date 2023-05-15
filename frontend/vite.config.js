import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: resolve(__dirname, "assets"),
  server: {
    port: 1312,
    open: true,
  },
  preview: {
    port: 1213,
    open: true,
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    minify: false,
    cssMinify: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        // nested: resolve(__dirname, 'pages/nested/nested.html') z
      },
    },
  },
});
