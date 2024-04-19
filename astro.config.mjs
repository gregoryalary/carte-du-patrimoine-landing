import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
  site: 'https://carte-du-patrimoine.gregoryalary.dev',
  redirects: {
    '/qr/': '/',
    '/blog/': '/blog/1/',
    '/blog/panneaux-monuments-historiques-tout-ce-qu-il-faut-savoir/': '/blog/tout-savoir-sur-les-panneaux-monument-historique/'
  },
});