import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/projects", "/testimonials", "/contact"],
      disallow: [],
    },
    sitemap: "https://SaifWebDev.com/sitemap.xml",
  };
}
