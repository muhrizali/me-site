
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// posts
const posts = defineCollection({
    loader: glob({ base: "./src/pages/posts", pattern: "*/index.{md,mdx}" }),
    schema: z.object({
        // metadata
        title: z.string(),
        description: z.string(),
        // meta_description: z.string(),
        category: z.string(),
        tags: z.array(z.string()),

        // dates and times
        datePublished: z.coerce.string(),
        dateModified: z.coerce.string(),

        // states
        isDraft: z.boolean(),
    })
});


// exporting all collections
export const collections = { posts };
