export type RouteKey = "home" | "about" | "batch";

export type MenuItem = {
  day: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  nutrition: string[];
};

export const navLinks: { href: string; label: string; route: RouteKey }[] = [
  { href: "/", label: "Home", route: "home" },
  { href: "/about", label: "About", route: "about" },
  { href: "/batch", label: "Batch", route: "batch" },
];

export const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export const homeMenuItems: MenuItem[] = [
  {
    day: "Senin",
    title: "Mangkuk Panen Musim Gugur",
    description:
      "Campuran lezat labu lokal panggang, quinoa organik, dan dada ayam bakar di atas hamparan kale Bogor yang segar.",
    image: "/sekalori/home-monday-meal.png",
    imageAlt: "Bowl with roasted pumpkin, quinoa, chicken, greens, and berries.",
    nutrition: ["450 kcal", "30g Pro", "45g Karbo", "15g Lemak"],
  },
  {
    day: "Selasa",
    title: "Tempe Krispi Sitrus",
    description:
      "Tempe artisan lokal dengan bumbu cabai-sitrus ringan, disajikan bersama salad kol dan wortel yang renyah.",
    image: "/sekalori/home-tuesday-meal.png",
    imageAlt: "Crispy tempeh strips over a bright vegetable salad.",
    nutrition: ["420 kcal", "25g Pro", "50g Karbo", "12g Lemak"],
  },
  {
    day: "Rabu",
    title: "Dori Kukus Jahe",
    description:
      "Fillet ikan Dori lembut yang dikukus dengan jahe segar dan daun bawang, disajikan di atas bok choy muda dan nasi merah.",
    image: "/sekalori/home-wednesday-meal.png",
    imageAlt: "Steamed dori fish with greens and rice on a dark plate.",
    nutrition: ["380 kcal", "35g Pro", "20g Karbo", "10g Lemak"],
  },
];

export const batchMenuItems: MenuItem[] = [
  {
    ...homeMenuItems[0],
    image: "/sekalori/batch-monday-meal.png",
  },
  {
    ...homeMenuItems[1],
    image: "/sekalori/batch-tuesday-meal.png",
  },
  {
    ...homeMenuItems[2],
    image: "/sekalori/batch-wednesday-meal.png",
  },
];

export const faqItems = [
  {
    question: "Is everything really Halal certified?",
    answer:
      "Yes, 100%. We are Halal certified and all our ingredients are sourced from Halal-certified suppliers to ensure the highest standards for our community.",
  },
  {
    question: "When is the daily delivery time?",
    answer:
      "Daily meal plan deliveries are prepared fresh and scheduled around lunch hours for Bogor-area customers.",
  },
  {
    question: "Can I customize my nutritional macros?",
    answer:
      "Macro preferences can be discussed for larger plans and event catering, subject to ingredient availability.",
  },
];

export const benefits = [
  {
    icon: "cap",
    title: "IPB Alumni Led",
    description:
      "Rooted in academic excellence from the IPB Vocational School, our menu planning is backed by genuine nutritional expertise and agricultural science.",
  },
  {
    icon: "seal",
    title: "100% Halal",
    description:
      "We maintain the highest standards of food safety and religious compliance. Our kitchen is 100% Halal certified, ensuring peace of mind for every customer.",
  },
  {
    icon: "team",
    title: "Scalable Solutions",
    description:
      "Designed for university students and the wider community, our catering solutions scale seamlessly without compromising quality or taste now with free delivery across Bogor City.",
  },
];

export const ingredients = [
  { icon: "leaf", title: "Highland Kale", tone: "green" },
  { icon: "grain", title: "Organic Quinoa", tone: "amber" },
  { icon: "drop", title: "Cold-pressed Oils", tone: "stone" },
];

export const partners = ["Lorem", "Lorem", "Lorem", "Lorem"];
