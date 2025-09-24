import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({
      open: true, // This will automatically open the report in your browser
      gzipSize: true, // This shows the gzipped size of each chunk
    })],
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
