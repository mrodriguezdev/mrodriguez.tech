import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // ...
  site: 'https://mrodriguez.tech',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [mdx({
    extendMarkdownConfig: false
  })]
});