import { MetadataRoute } from "next";
import { getSiteUrl } from "./utils/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
