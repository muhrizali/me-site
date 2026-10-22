import { getCollection, getEntry } from "astro:content";
import type { CollectionEntry } from "astro:content";
import _ from "lodash";

type ContentCollection = "POSTS" | "BLOGS" | "BOOKS" | "PROJECTS" | "NOTES";

async function getValidPosts(collectionName: ContentCollection = "POSTS") {
    let posts = await getCollection(collectionName);
    return _.filter(posts, (item: any) => !item.data["isDraft"]);
}

interface CategoryOptions {
    posts: CollectionEntry<any>[];
    category: ContentCollection;
};

function getCategory({posts, category = "POSTS"}: CategoryOptions) {
    if (category === "POSTS") return posts;
    return _.filter(posts, (item: CollectionEntry<any>) => item.data["category"] === category);
}

interface TagOptions {
    posts: CollectionEntry<any>[];
    tag: string | null;
}

function getTag({posts, tag = null}: TagOptions) {
    if (tag === null) return posts;
    return _.filter(posts, (item: any) => item.data["tags"].includes(tag));
}

interface SortOptions {
    posts: CollectionEntry<any>[];
    sortby?: "title" | "last_created" | "last_modified" | null;
    descending?: boolean;
}

function getSorted({posts, sortby = null, descending = true}: SortOptions) {
    let collection: CollectionEntry<any> = posts;
    
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
    posts: CollectionEntry<any>[];
    count: number | null;
}

function limitPosts({posts, count = null}: LimitOptions) {
    if (count === 0 || count === null || posts.length < count) return posts;
    return _.slice(posts, 0, count);
}

interface CollectionOptions {
    category: ContentCollection;
    tag?: string | null;
    sortby?: "title" | "last_created" | "last_modified" | null;
    count?: number | null;
}

async function getOurCollection({category = "POSTS", tag = null, sortby = null, count = null}: CollectionOptions) {
    let allPosts = await getValidPosts(category);
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

interface CollectionItemOptions {
    category: ContentCollection;
    itemID: string;
}

async function getOurCollectionItem({ category, itemID }: CollectionItemOptions) {
    const posts = await getOurCollection({ category });
    return _.find(posts, { 'id': itemID });
}

async function getAllPostTags(category: ContentCollection = "POSTS") {
    let allPosts = await getValidPosts(category);
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
    sectionItemsCount: 1,
    routeTable: {
        "BLOGS": "blog",
        "BOOKS": "books",
        "PROJECTS": "projects",
        "NOTES": "notes",
    },
};

export { getOurCollection, getOurCollectionItem, getAllPostTags, getAllPostCategories, CONFIG, type ContentCollection };
