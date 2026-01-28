import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

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
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Verhindert Warnungen bei großen Chunks (rein kosmetisch für den Build-Log)
      chunkSizeWarningLimit: 1000,
    }
  },
});