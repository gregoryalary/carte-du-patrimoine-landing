import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
  site: 'https://www.carte-du-patrimoine.com',
  redirects: {
    '/qr/': 'https://v2.mh-map-api.gregoryalary.xyz/api/qr',
    '/qr-2/': 'https://v2.mh-map-api.gregoryalary.xyz/api/qr',
    '/monlet': 'https://mh-map-api.gregoryalary.xyz/api/qr?town_code=43138s',
    '/blog/': '/blog/1/',
    '/blog/panneaux-monuments-historiques-tout-ce-qu-il-faut-savoir/': '/blog/tout-savoir-sur-les-panneaux-monument-historique/'
  },
});