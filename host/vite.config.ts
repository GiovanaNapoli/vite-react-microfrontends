import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        authModule: "http://localhost:2020/assets/remoteEntry.js",
        dashboardModule: "http://localhost:4000/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
