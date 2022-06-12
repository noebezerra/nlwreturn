import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: "0.0.0.0",
    hmr: {
      clientPort: 80
    }
    // watch: {
    //   usePolling: false,
    // },
  },
});
