import { codeToHtml } from "shiki";
import * as cheerio from "cheerio";

export const formatContents = async (contents: string): Promise<string> => {
	const $ = cheerio.load(contents);
	const codes = $("pre > code");
	for (const code of codes) {
		let lang = "";
		for (const className of ($(code).attr("class") ?? "").split(" ")) {
			const match = className.match(/^language-(.+)$/);
			if (match !== null) {
				lang = match[1] ?? "";
				break;
			}
		}

		if (lang !== "" && $(code).text() !== null) {
			const hilightedCode = await codeToHtml($(code).text(), {
				lang: lang,
				theme: "github-dark-dimmed"
			});
			$(code).parent().replaceWith(hilightedCode);
		}
	}

	const images = $("img");
	for (const image of images) {
		const src = $(image).attr("src");
		$(image).attr("src", `${src}?fm=webp&w=880`);
		$(image).attr(
			"srcset",
			`${src}?fm=webp&w=300px 300w,${src}?fm=webp&w=500px 500w,${src}?fm=webp&w=650px 650w,${src}?fm=webp&w=880px 880w`
		);
		$(image).attr("sizes", "(max-width: 350px) 300px,(max-width: 550px) 500px,(max-width: 700px) 650px,875px");
		$(image).attr("loading", "lazy");
	}

	const iframelyScripts = $('script[src="//cdn.iframe.ly/embed.js"]');
	for (const iframelyScript of iframelyScripts) {
		$(iframelyScript).remove();
	}

	const iframelyLinks = $(".iframely-embed a");
	for (const iframelyLink of iframelyLinks) {
		$(iframelyLink).attr("aria-hidden", "true");
		$(iframelyLink).attr("tabindex", "-1");
	}

	const body = $("body");

	return body !== null ? body.prop("innerHTML") ?? "" : "";
};
