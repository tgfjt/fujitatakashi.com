import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    descriptionEn: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['ja', 'en']).default('ja'),
    // サイト紹介の場合に使うフィールド
    url: z.string().url().optional(),
    feedUrl: z.string().url().optional(),
    defunct: z.boolean().default(false),
    syndication: z.array(z.string().url()).default([]),
  }),
});

export const collections = { writing };
