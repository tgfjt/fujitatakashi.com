import { defineCollection, z } from 'astro:content';

const detour = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // サイト紹介の場合に使うフィールド
    url: z.string().url().optional(),
    feedUrl: z.string().url().optional(),
    defunct: z.boolean().default(false),
    syndication: z.array(z.string().url()).default([]),
  }),
});

export const collections = { detour };
