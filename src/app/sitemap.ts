import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://ujjwal-new-portfolio.vercel.app",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
    ];
}
