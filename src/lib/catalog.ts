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

export function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function categorySlug(category: string) {
  return toSlug(category);
}

export function itemSlug(itemName: string) {
  return toSlug(itemName);
}

export function itemHref(item: CatalogItem) {
  return `/category/${categorySlug(item.category)}/${itemSlug(item.itemname)}`;
}

export function getCategoryBySlug(slug: string) {
  return categories.find(([category]) => categorySlug(category) === slug);
}

export function getItemBySlugs(category: string, item: string) {
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return undefined;
  }

  const [categoryName, categoryItems] = categoryData;
  const itemData = categoryItems.find(
    (categoryItem) => itemSlug(categoryItem.itemname) === item,
  );

  if (!itemData) {
    return undefined;
  }

  return {
    categoryName,
    item: itemData,
  };
}
