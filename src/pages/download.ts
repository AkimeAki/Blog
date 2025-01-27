import type { APIContext } from "astro";

export function GET({ redirect }: APIContext) {
	return redirect("https://a-k-i.booth.pm/");
}
