import { createClient } from "microcms-js-sdk";
import type { MicroCMSContentId, MicroCMSDate, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
	serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY
});

export interface Blog {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
}

interface BlogResponse {
	totalCount: number;
	offset: number;
	limit: number;
	contents: Blog[];
}

export const getBlogs = async (queries: MicroCMSQueries): Promise<BlogResponse> => {
	return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (
	contentId: string,
	queries: MicroCMSQueries
): Promise<Blog & MicroCMSContentId & MicroCMSDate> => {
	return await client.getListDetail<Blog>({
		endpoint: "blogs",
		contentId,
		queries
	});
};
