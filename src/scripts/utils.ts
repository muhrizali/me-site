import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import _ from "lodash";

async function getValidPosts() {
    const allPosts =  await getCollection("posts");
    return _.filter(allPosts, (item: any) => !item.data["isDraft"]);
}

interface CategoryOptions {
    posts: CollectionEntry<"posts">[];
    category: string | null;
};

function getCategory({posts, category = null}: CategoryOptions) {
    if (category === null) return posts;
    return _.filter(posts, (item: CollectionEntry<"posts">) => item.data["category"] === category);
}

interface TagOptions {
    posts: CollectionEntry<"posts">[];
    tag: string | null;
}

function getTag({posts, tag = null}: TagOptions) {
    if (tag === null) return posts;
    return _.filter(posts, (item: any) => item.data["tags"].includes(tag));
}

interface SortOptions {
    posts: CollectionEntry<"posts">[];
    sortby?: "title" | "last_created" | "last_modified" | null;
    descending?: boolean;
}

function getSorted({posts, sortby = null, descending = true}: SortOptions) {
    let collection: CollectionEntry<'posts'> = posts;
    
    if  (sortby === "title") {
        collection = _.sortBy(posts, ["data.title"]);
    } else if (sortby === "last_created" || sortby === null) {
        collection = _.sortBy(posts, ["data.datePublished"]);
    } else if (sortby === "last_modified") {
        collection = _.sortBy(posts, ["data.dateModified"]);
    }

    return (descending ? _.reverse(collection) : collection);
}

interface LimitOptions {
    posts: CollectionEntry<"posts">[];
    count: number | null;
}

function limitPosts({posts, count = null}: LimitOptions) {
    if (count === 0 || count === null || posts.length < count) return posts;
    return _.slice(posts, 0, count);
}

interface CollectionOptions {
    category?: string | null;
    tag?: string | null;
    sortby?: "title" | "last_created" | "last_modified" | null;
    count?: number | null;
}

async function getOurCollection({category = null, tag = null, sortby = null, count = null}: CollectionOptions = {}) {
    let allPosts = await getValidPosts();
    if ((category === null) && (tag === null) && (sortby === null) && (count === null)) return allPosts;

    if (category !== null) {
        allPosts = getCategory({"posts": allPosts, "category": category});
    }

    if (tag !== null) {
        allPosts = getTag({"posts": allPosts, "tag": tag})
    }

    if (sortby !== null) {
        allPosts = getSorted({"posts": allPosts, "sortby": sortby});
    } else {
        allPosts = getSorted({"posts": allPosts, "sortby": null});
    }

    if (count) {
      allPosts = limitPosts({"posts": allPosts, "count": count});
    }

    return allPosts;
}

async function getAllPostTags() {
    let allPosts = await getValidPosts();
    let allTags = _.uniq(_.flatMap(allPosts, (post: CollectionEntry<"posts">) => post.data["tags"]));
    allTags = _.sortBy(allTags);
    return allTags;
}

async function getAllPostCategories() {
    let allPosts = await getValidPosts();
    let allCategories = _.uniq(_.flatMap(allPosts, (post: CollectionEntry<"posts">) => post.data["category"]));
    allCategories = _.sortBy(allCategories);
    return allCategories;
}

const CONFIG = {
    sectionItemsCount: 3,
}

export { getOurCollection, getAllPostTags, getAllPostCategories, CONFIG };
