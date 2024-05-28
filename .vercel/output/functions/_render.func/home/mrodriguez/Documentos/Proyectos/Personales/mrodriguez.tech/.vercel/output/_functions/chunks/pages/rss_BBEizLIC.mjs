import rss from '@astrojs/rss';
import { g as getCollection } from './__Dfhzbs7s.mjs';

async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: 'Mario Rodríguez | Blog',
        description: 'Mi viaje de aprendizaje de Astro',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            publishDate: post.data.publishDate,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>es-us</language>`,
    });
}

export { GET };
