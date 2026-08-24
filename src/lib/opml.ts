export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function buildOpml(
  title: string,
  entries: { name: string; feedUrl: string; htmlUrl: string }[],
): string {
  const outlines = entries
    .map(
      (e) =>
        `      <outline type="rss" text="${escapeXml(e.name)}" title="${escapeXml(e.name)}" xmlUrl="${escapeXml(e.feedUrl)}" htmlUrl="${escapeXml(e.htmlUrl)}" />`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <title>${escapeXml(title)}</title>
    <dateCreated>${new Date().toUTCString()}</dateCreated>
  </head>
  <body>
    <outline text="${escapeXml(title)}" title="${escapeXml(title)}">
${outlines}
    </outline>
  </body>
</opml>`;
}
