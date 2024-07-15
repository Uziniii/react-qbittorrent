import path from "path"
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    cors: true,
    origin: "localhost:8080",
    headers: {
      referer: "http://localhost:8080"
    },
  }
})
