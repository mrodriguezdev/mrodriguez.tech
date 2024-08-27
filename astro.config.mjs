import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
const URL = import.meta.env.URL;

export default defineConfig({
    // ...
    site: URL,
    output: 'hybrid',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});