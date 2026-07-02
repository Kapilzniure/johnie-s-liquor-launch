export const CATEGORY_COLOR: Record<string, string> = {
  Whiskey: "#B8752E",
  Wine: "#7B1E3A",
  Beer: "#D4A017",
  Tequila: "#C9D6B0",
  Rum: "#8B5A2B",
};

export const categoryColor = (cat: string) => CATEGORY_COLOR[cat] ?? "#B8952A";
