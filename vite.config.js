import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath } from "url";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwind(), autoprefixer()],
		},
	},
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
			"@components": fileURLToPath(
				new URL("./src/components", import.meta.url)
			),
			"@partials": fileURLToPath(
				new URL("./src/partials", import.meta.url)
			),
		},
	},
});
