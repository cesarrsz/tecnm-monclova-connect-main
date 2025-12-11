import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: true,
    port: 8080,
  },

  // Garantiza que index.html esté bien como entrada
  build: {
    rollupOptions: {
      input: "index.html",
    }
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  publicDir: "public"
});
