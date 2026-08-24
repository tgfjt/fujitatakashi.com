import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { toSlug } from '../lib/slug';

export async function GET(context: APIContext) {
  const entries = await getCollection('writing');
  const sorted = entries.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: 'fujitatakashi.com',
    description: 'Takashi Fujita の寄り道の記録',
    site: context.site!,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      link: `/writing/${toSlug(entry.id)}/`,
      pubDate: entry.data.date,
    })),
  });
}
