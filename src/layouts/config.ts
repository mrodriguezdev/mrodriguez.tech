import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
        updateDate: z.date().optional(),
        excerpt: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()),
        time: z.number()
    })
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        url: z.string(),
        order: z.number()
    })
});

export const collections = {
    posts: postsCollection,
    projects: projectsCollection
};