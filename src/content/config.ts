import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    publishedAt: z.date(),
  }),
});

export const collections = { posts };
