import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://shivamyash742.vercel.app/sitemap.xml",
    host: "https://shivamyash742.vercel.app",
  };
}
