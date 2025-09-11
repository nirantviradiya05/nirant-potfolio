import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages fix
export default defineConfig({
  base: "/nirant-potfolio/",
  plugins: [react(), tailwindcss()],
});
