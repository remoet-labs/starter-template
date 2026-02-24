import type { MetadataRoute } from "next";
import { fetchPortfolioData } from "@/lib/api";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const data = await fetchPortfolioData();
  const siteUrl = data?.profile.url?.value ?? null;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(siteUrl && { sitemap: new URL("/sitemap.xml", siteUrl).toString() }),
  };
}
