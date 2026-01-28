import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      slug: z.string(),
      title: z.string(),
      seoTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      excerpt: z.string().optional(),
      datePublished: z.string(),
      dateModified: z.string().optional(),
      language: z.string().optional(),
      region: z.string().optional(),
      tags: z.array(z.string()).optional(),
      coverImage: z.string().optional(),
      shortDefinition: z.string().optional(),
      author: z.string().optional(),
    }),
  }),
};
