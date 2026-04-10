export const Categories = [
  "Dolls",
  "Keychains",
  "Plushies",
  "Accessories",
  "Flowers",
  "Bundles",
] as const;

export type ProductCategory = (typeof Categories)[number];
