
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// posts
const posts = defineCollection({
    loader: glob({ base: "./src/content", pattern: "{blogs,books,notes,projects}/*/index.{md,mdx}" }),
    schema: ({ image }) => z.object({
        // essentials
        title: z.string(),
        description: z.string(),
        category: z.string(), // "BLOGS" | "BOOKS" | "PROJECTS" | "NOTES"
        tags: z.array(z.string()),
        datePublished: z.string(),
        dateModified: z.string(),
        isDraft: z.boolean(),
    })
});

const blogPosts = defineCollection({
    loader: glob({ base: "./src/content/blogs", pattern: "*/index.{md,mdx}" }),
    schema: ({ image }) => z.object({
        // essentials
        title: z.string(),
        description: z.string(),
        category: z.string(), // "BLOGS" | "BOOKS" | "PROJECTS" | "NOTES"
        tags: z.array(z.string()),
        datePublished: z.string(),
        dateModified: z.string(),
        isDraft: z.boolean(),

        // blog specific properties
        imageSquare: image(),
        imageLandscape: image(),
        imageCaption: z.string(),
    })
});

const bookPosts = defineCollection({
    loader: glob({ base: "./src/content/books", pattern: "*/index.{md,mdx}" }),
    schema: ({ image }) => z.object({
        // essentials
        title: z.string(),
        description: z.string(),
        category: z.string(), // "BLOGS" | "BOOKS" | "PROJECTS" | "NOTES"
        tags: z.array(z.string()),
        datePublished: z.string(),
        dateModified: z.string(),
        isDraft: z.boolean(),

        // book specific properties
        authors: z.array(z.string()),
        bookPublished: z.coerce.string(),
        imageCover: image(),
    })
});

const projectPosts = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "*/index.{md,mdx}" }),
    schema: ({ image }) => z.object({
        // essentials
        title: z.string(),
        description: z.string(),
        category: z.string(), // "BLOGS" | "BOOKS" | "PROJECTS" | "NOTES"
        tags: z.array(z.string()),
        datePublished: z.coerce.string(),
        dateModified: z.coerce.string(),
        isDraft: z.boolean(),

        // project specific properties
        // ...
    })
});

const notePosts = defineCollection({
    loader: glob({ base: "./src/content/notes", pattern: "*/index.{md,mdx}" }),
    schema: ({ image }) => z.object({
        // essentials
        title: z.string(),
        description: z.string(),
        category: z.string(), // "BLOGS" | "BOOKS" | "PROJECTS" | "NOTES"
        tags: z.array(z.string()),
        datePublished: z.coerce.string(),
        dateModified: z.coerce.string(),
        isDraft: z.boolean(),

        // note specific properties
        // ...
    })
});

const diaryPosts = defineCollection({
    loader: glob({ base: "./src/content/diaries", pattern: "*.{md,mdx}" }),
    schema: z.object({
        date: z.coerce.string(),
    })
});


// exporting all collections
export const collections = { 'POSTS': posts, 'BLOGS': blogPosts, 'BOOKS': bookPosts, 'PROJECTS': projectPosts, 'NOTES': notePosts, 'DIARIES': diaryPosts };
