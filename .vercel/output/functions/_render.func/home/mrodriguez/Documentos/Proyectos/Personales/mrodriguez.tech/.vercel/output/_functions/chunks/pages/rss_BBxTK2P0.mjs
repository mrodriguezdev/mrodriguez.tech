import rss from '@astrojs/rss';
import { g as getCollection } from './__CPWpHf7z.mjs';

async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: 'Blog de Buzz',
        description: 'Guía de un humilde astronauta a las estrellas',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.publishDate,
            description: post.data.excerpt,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>es</language>`,
    });
}

export { GET };
