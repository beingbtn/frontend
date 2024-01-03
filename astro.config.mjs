import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    experimental: {
        integrations: true,
    },
    integrations: [
        sitemap(),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
    ],
    site: 'https://btn.attituding.xyz',
    base: 'frontend',
});
