import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: '/totally-unnoticed/',
	plugins: [react()],
	css: {
		postcss: "./postcss.config.js", // Ensure PostCSS is configured
	},
});
