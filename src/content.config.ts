
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// posts
const posts = defineCollection({
    loader: glob({ base: "./src/pages/posts", pattern: "*/index.{md,mdx}" }),
    schema: ({ image }) => z.object({
        // essentials
        title: z.string(),
        description: z.string(),
        category: z.string(), // "BLOG" | "BOOKS" | "PROJECTS" | "NOTES"
        tags: z.array(z.string()),
        datePublished: z.coerce.string(),
        dateModified: z.coerce.string(),
        isDraft: z.boolean(),

        // optional
        image: image().optional(),
        imageCaption: z.string().optional(),
    })
});

// exporting all collections
export const collections = { posts };
