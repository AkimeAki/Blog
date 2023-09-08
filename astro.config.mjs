import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 4001
	},
	experimental: {},
	site: "https://blog.aki.wtf",
	trailingSlash: "never",
	integrations: [sitemap()],
	build: {
		format: "directory"
	}
});
