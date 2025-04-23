import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/brainwave_salespred/", // 👈 This is the key addition
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});



