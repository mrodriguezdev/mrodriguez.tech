import rss from '@astrojs/rss';
import { g as getCollection } from './index_hv8us1x4.mjs';

async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: 'Mario Rodríguez | Blog',
        description: 'Mi viaje de aprendizaje de Astro',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.publishDate,
            description: post.data.excerpt,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>es-us</language>`,
    });
}

export { GET };
