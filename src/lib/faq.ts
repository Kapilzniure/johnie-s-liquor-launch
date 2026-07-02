export interface FaqItem {
  question: string;
  answer: string;
}

/** Single source of truth for the FAQ — feeds both the visible accordion and the FAQPage JSON-LD. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What are Johnnies Liquor Store's hours?",
    answer:
      "Johnnies Liquor Store is open Monday through Saturday from 10:00 AM to 9:00 PM. We are closed on Sundays. Free parking is available at our Pond Springs Rd location.",
  },
  {
    question: "Where is Johnnies Liquor Store located in Austin?",
    answer:
      "We are located at 13201 Pond Springs Rd, Suite 203, Austin, TX 78729. We're in the Pond Springs shopping center in North Austin, with free parking available.",
  },
  {
    question: "Does Johnnies Liquor offer delivery?",
    answer:
      "Yes! Johnnies Liquor Store offers delivery through DoorDash and GrubHub. Delivery typically arrives in 30–50 minutes depending on your location in the Austin area.",
  },
  {
    question: "Does Johnnies carry Texas craft spirits?",
    answer:
      "Absolutely. We proudly carry a strong selection of Texas craft spirits including Garrison Brothers, Treaty Oak, and Balcones Distilling — some of the finest bourbons and whiskeys made in the Lone Star State.",
  },
  {
    question: "What types of spirits does Johnnies Liquor carry?",
    answer:
      "Johnnies Liquor Store carries over 3,200 labels including bourbon, Scotch whisky, Irish whiskey, tequila, mezcal, rum, gin, vodka, wine, beer, sake, and non-alcoholic alternatives. We stock both everyday favorites and rare, limited-release bottles.",
  },
  {
    question: "Does Johnnies Liquor have a loyalty program?",
    answer:
      "Yes! Johnnies Reserve Club is our loyalty program. Earn points with every visit and unlock exclusive member benefits as you climb through Explorer, Connoisseur, and Master tiers. Sign up in-store or ask our staff.",
  },
  {
    question: "Is there free parking at Johnnies Liquor Store?",
    answer:
      "Yes, free parking is available directly in front of our store in the Pond Springs shopping center at 13201 Pond Springs Rd, Suite 203, Austin, TX.",
  },
  {
    question: "How long has Johnnies Liquor been in Austin?",
    answer:
      "Johnnies Liquor Store has been serving the Austin community since 2004 — over 20 years as a trusted neighborhood bottle shop in North Austin.",
  },
];
