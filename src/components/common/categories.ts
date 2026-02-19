export  const Categories = [
    "Dolls",
    "KeyChains",
    "Plushies",
    "Hair Accessories",
    "Flowers",
    "Extra",
  ] as const;

  export type ProductCategory = typeof Categories[number];