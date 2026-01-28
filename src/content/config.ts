import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    // optional: eigener Slug (ansonsten wird entry.slug = Dateiname genutzt)
    slug: z.string().optional(),

    title: z.string(),
    description: z.string(),        // <- REQUIRED (dein Build verlangt das)
    author: z.string().optional(),  // optional lassen, wenn du willst (sonst required)

    // <- CRITICAL: robust gegen String oder YAML-Date
    publishedDate: z.coerce.date(),

    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    excerpt: z.string().optional(),

    language: z.string().optional(),
    region: z.string().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    shortDefinition: z.string().optional(),
  }),
});

export const collections = { blog };
