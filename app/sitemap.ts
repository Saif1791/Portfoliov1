import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://SaifWebDev.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://SaifWebDev.com/about",
      lastModified: new Date(),
      priority: 2,
    },
    {
      url: "https://SaifWebDev.com/projects",
      lastModified: new Date(),
      priority: 3,
    },
    {
      url: "https://SaifWebDev.com/contact",
      lastModified: new Date(),
      priority: 4,
    },
  ];
}
