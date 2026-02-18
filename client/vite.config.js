import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // to set the base url for all the api calls
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9500", // backend server url
        changeOrigin: true, //
        secure: false, // https
      },
    },
  },
});
