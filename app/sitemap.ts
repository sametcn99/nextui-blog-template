import { MetadataRoute } from "next";
import { getSortedPostsData } from "./utils/posts";
import { getSiteUrl } from "./utils/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getSortedPostsData();

  return [
    {
      url: "https://www.sametcc.me/gists",
      lastModified: new Date(),
      changeFrequency: "monthly" as
        | "monthly"
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "yearly"
        | "never",
      priority: 1,
    },
    ...posts.map((post: BlogPost) => ({
      url: `${getSiteUrl()}/posts/${post.title}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as
        | "monthly"
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "yearly"
        | "never",
      priority: 1,
    })),
  ];
}
