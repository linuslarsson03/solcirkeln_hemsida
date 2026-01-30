import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // GitHub Pages base path
  base: "/solcirkeln-direct/",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    // optional: improve build size & asset hashing
    outDir: "dist",
    sourcemap: false,
  },
});
