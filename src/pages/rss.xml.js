import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '@/data/site-config';

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
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