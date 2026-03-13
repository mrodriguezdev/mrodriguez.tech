import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // ...
  site: 'https://mrodriguez.tech',
  output: 'static',
  integrations: [mdx({
    extendMarkdownConfig: true
  }), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});