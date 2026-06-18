import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/utils";

const BASE_URL = "https://www.bincpremix.com.au";

const ALL_PROJECTS = [
  "kellyville-driveway",
  "penrith-warehouse",
  "parramatta-carpark",
  "north-west-road",
  "castle-hill-pool",
  "baulkham-hills-driveway",
  "blacktown-retail",
  "penrith-drainage",
  "rouse-hill-shed",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/services`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/projects`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/quote`, changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectPages = ALL_PROJECTS.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
