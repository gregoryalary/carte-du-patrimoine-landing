import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
  site: 'https://www.carte-du-patrimoine.com',
  redirects: {
    '/qr/': 'https://mh-map-api.gregoryalary.xyz/api/qr',
    '/qr-2/': 'https://mh-map-api.gregoryalary.xyz/api/qr',
    '/blog/': '/blog/1/',
    '/blog/panneaux-monuments-historiques-tout-ce-qu-il-faut-savoir/': '/blog/tout-savoir-sur-les-panneaux-monument-historique/'
  },
});