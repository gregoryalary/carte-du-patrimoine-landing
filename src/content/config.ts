import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    publishedAt: z.date(),
    showPopCopyrights: z.boolean().default(false),
  }),
});

export const collections = { posts };
