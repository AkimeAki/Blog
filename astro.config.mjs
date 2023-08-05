import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 4001
	},
	experimental: {
		assets: true
	},
	site: "https://blog.aki.wtf",
	integrations: [sitemap()]
});
