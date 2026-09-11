import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arcflow.example/",
      lastModified: new Date(),
    },
    {
      url: "https://arcflow.example/features",
      lastModified: new Date(),
    },
    {
      url: "https://arcflow.example/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://arcflow.example/about",
      lastModified: new Date(),
    },
    {
      url: "https://arcflow.example/contact",
      lastModified: new Date(),
    },
    {
      url: "https://arcflow.example/integrations",
      lastModified: new Date(),
    },
    {
      url: "https://arcflow.example/docs",
      lastModified: new Date(),
    },
    {
      url: "https://arcflow.example/changelog",
      lastModified: new Date(),
    },
  ];
}