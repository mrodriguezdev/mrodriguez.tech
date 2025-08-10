import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()),
        time: z.number(),
        draft: z.boolean().default(false),
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
    blog: blogCollection,
    project: projectsCollection
};