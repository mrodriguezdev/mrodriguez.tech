import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<"posts">, itemB: CollectionEntry<"posts">) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function sortItemsByOrderAsc(itemA: CollectionEntry<"projects">, itemB: CollectionEntry<"projects">) {
    return itemA.data.order - itemB.data.order;
}
