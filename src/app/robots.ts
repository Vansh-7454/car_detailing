import type { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/data/businessConfig";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BUSINESS_CONFIG.site.baseUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
