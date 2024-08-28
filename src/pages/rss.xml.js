import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '@/config/site.config';

export async function GET(context) {
    const posts = await getCollection("blog");
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            updatedDate: post.data.pubDate,
            description: post.data.description,
            tags: post.data.tags,
            time: post.data.time,
            link: `/post/${post.slug}/`,
        })),
        customData: `<language>es</language>`,
    });
}