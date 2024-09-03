import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    // ...
    site: 'https://mrodriguez.tech',
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true }
    }),
});