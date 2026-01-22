import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/todo-app/",   // <-- THIS is crucial for GitHub Pages
  plugins: [react()],
});
