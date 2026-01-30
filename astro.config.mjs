import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

export default defineConfig({
  // Deine echte Domain für perfekte SEO-Links in der Sitemap
  site: 'https://www.autaxo.de',

  integrations: [
    mdx(),
    icon(),
    sitemap({
      // Standard-SEO-Werte für Google
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    // HIER: Partytown für Google Ads/Analytics aktivieren
    partytown({
      config: {
        // Leitet Tracking-Daten vom Worker an den Haupt-Browser weiter
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Verhindert Warnungen bei großen Chunks (rein kosmetisch für den Build-Log)
      chunkSizeWarningLimit: 1000,
    }
  },
});