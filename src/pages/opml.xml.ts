import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildOpml } from '../lib/opml';

export const GET: APIRoute = async () => {
  const entries = await getCollection('detour');
  const withFeed = entries.filter((e) => e.data.feedUrl && !e.data.defunct);

  const opml = buildOpml(
    'fujitatakashi.com — 購読リスト',
    withFeed.map((e) => ({
      name: e.data.title,
      feedUrl: e.data.feedUrl!,
      htmlUrl: e.data.url!,
    })),
  );

  return new Response(opml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
