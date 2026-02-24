import type { MetadataRoute } from "next";
import { fetchPortfolioData } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchPortfolioData();
  if (!data) return [];

  const siteUrl = data.profile.url?.value;
  if (!siteUrl) return [];

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: data.updatedAt ? new Date(data.updatedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
