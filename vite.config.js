import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {},
    },
    devSourcemap: true,
  },
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        format: "iife",
        entryFileNames: "bundle.js",
        assetFileNames: "bundle.[ext]",
      },
    },
  },
});
