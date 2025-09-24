import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    allowedHosts: [
      "ba85ada3-479b-48bd-8e33-928004da2368-00-2k94s9aizekff.pike.replit.dev",
    ],
  },
});
