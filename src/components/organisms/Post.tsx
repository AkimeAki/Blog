// import { getBlogs } from "@/lib/microcms";
import type { JSX } from "preact/jsx-runtime";
import { getBlogDetail } from "@/lib/microcms";
import type { Blog } from "@/lib/microcms";
import { useEffect, useState } from "preact/hooks";
import type { StateUpdater } from "preact/hooks";

interface Props {
	serverBlog?: Blog;
}

const getBlog = async (setBlog: StateUpdater<Blog>): Promise<void> => {
	const params = new URLSearchParams(window.location.search);
	const contentId = params.get("contentId");
	if (contentId === null) {
		return;
	}

	const blog = await getBlogDetail(contentId, {});
	setBlog(blog);
};

const initialBlog: Blog = {
	id: "",
	createdAt: "",
	updatedAt: "",
	publishedAt: "",
	revisedAt: "",
	title: "",
	content: ""
};

export default function Post({ serverBlog }: Props): JSX.Element {
	const [blog, setBlog] = useState<Blog>(serverBlog === undefined ? initialBlog : serverBlog);

	useEffect(() => {
		if (blog !== undefined) {
			void getBlog(setBlog);
		}
	}, []);

	return (
		<>
			<h1>{blog.title}</h1>
			<div>{blog.content}</div>
		</>
	);
}
