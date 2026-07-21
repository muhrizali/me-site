
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// z-object
const validation = z.object({
  // metadata
  title: z.string(),
  description: z.string(),

  // dates and times
  datePublished: z.coerce.string(),
  dateModified: z.coerce.string(),

  // states
  isDraft: z.boolean(),
  tags: z.array(z.string()),
});

// blog posts
const blogPosts = defineCollection({
    loader: glob({ base: "./src/pages/blogs", pattern: "*/index.{md,mdx}" }),
    schema: validation,
});

// notes posts
const notePosts = defineCollection({
    loader: glob({ base: "./src/pages/notes", pattern: "*/index.{md,mdx}" }),
    schema: validation,
});

// book posts
const bookPosts = defineCollection({
    loader: glob({ base: "./src/pages/books", pattern: "*/index.{md,mdx}" }),
    schema: validation,
});

// project posts
const projectPosts = defineCollection({
    loader: glob({ base: "./src/pages/projects", pattern: "*/index.{md,mdx}" }),
    schema: validation,
});


// exporting all collections
export const collections = { blogPosts, notePosts, bookPosts, projectPosts };
