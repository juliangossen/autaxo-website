import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

export const GET: APIRoute = () => {
  const robotsTxt = `# robots.txt for ${siteConfig.name}
# https://www.robotstxt.org/

User-agent: *
Allow: /

# AI-Search & LLM Optimization
# We explicitly allow AI bots to read the llms.txt context
Allow: /llms.txt

# Disallow admin and API routes to save crawl budget
Disallow: /api/
Disallow: /_astro/
Disallow: /admin/

# Sitemap location
Sitemap: ${siteConfig.url}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};