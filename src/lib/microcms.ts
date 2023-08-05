import { createClient } from "microcms-js-sdk";
import type { MicroCMSListContent, MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
	serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.MICROCMS_API_KEY
});

export interface Blog {
	title?: string;
	content?: string;
	thumbnail?: string;
	category?: {
		name: string;
	} & MicroCMSListContent;
}

export const getBlogs = async (queries: MicroCMSQueries = {}): Promise<MicroCMSListResponse<Blog>> => {
	return await client.get<MicroCMSListResponse<Blog>>({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (
	contentId: string,
	queries: MicroCMSQueries = {}
): Promise<Blog & MicroCMSListContent> => {
	return await client.getListDetail<Blog & MicroCMSListContent>({
		endpoint: "blogs",
		contentId,
		queries
	});
};
