import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 , allowedHosts: ["ba85ada3-479b-48bd-8e33-928004da2368-00-3m7q177e6im3m.riker.replit.dev"]},
  
});


