import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-portfolio/", // 👈 match the repo name exactly
  plugins: [react()],
});
