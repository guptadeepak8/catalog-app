import catalogItems from "../../data.json";

export type CatalogItem = {
  itemname: string;
  category: string;
  image: string;
  itemprops: {
    label: string;
    value: string;
  }[];
};

export const items = catalogItems as CatalogItem[];

export const categories = Object.entries(
  items.reduce<Record<string, CatalogItem[]>>((groupedItems, item) => {
    groupedItems[item.category] = groupedItems[item.category] ?? [];
    groupedItems[item.category].push(item);
    return groupedItems;
  }, {}),
);

export function categorySlug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getCategoryBySlug(slug: string) {
  return categories.find(([category]) => categorySlug(category) === slug);
}
