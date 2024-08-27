import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()),
        time: z.number()
    })
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        url: z.string(),
        order: z.number()
    })
});

export const collections = {
    blog,
    project: projects
};