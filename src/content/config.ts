import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),

    // robust: akzeptiert YAML-Date oder String
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // SEO optional
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    excerpt: z.string().optional(),

    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    shortDefinition: z.string().optional(),

    language: z.string().default("de-DE"),
    region: z.string().default("DE"),

    // optional (für später)
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
