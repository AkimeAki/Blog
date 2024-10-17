import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 46311
	},
	experimental: {},
	site: "https://blog.aki.wtf",
	trailingSlash: "never",
	integrations: [sitemap()],
	build: {
		format: "file"
	}
});
