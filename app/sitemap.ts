import { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap {
    return [
        {
            url:"https://techis-n.com",
            lastModified:new Date()
        },
        {
            url:"https://techis-n.com/contactus",
            lastModified:new Date()
        }
    ]

}