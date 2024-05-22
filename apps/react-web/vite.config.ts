import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@yuddy/shared-ui": "/libs/shared-ui/dist/index.js", // Doğru yolu buraya tanımlayın
      "@yuddy/shared-ui": path.resolve(__dirname, "../../libs/shared-ui/src"),
    },
  },
});
