import { createClient } from "microcms-js-sdk";
import { getListContents, getContentsDetail } from "aki-modules/microcms";
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
	return await getListContents<Blog>(client, "blogs", queries);
};

export const getBlogDetail = async (id: string, queries: MicroCMSQueries = {}): Promise<Blog & MicroCMSListContent> => {
	return await getContentsDetail<Blog & MicroCMSListContent>(client, "blogs", id, queries);
};
