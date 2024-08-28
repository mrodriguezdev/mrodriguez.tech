import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import siteConfig from '@/config/site.config';

export default defineConfig({
    // ...
    site: siteConfig.url,
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});