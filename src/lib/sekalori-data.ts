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

export const sekaloriLinks = {
  orderForm: "https://forms.gle/7jigWt5ur74kbtcv8",
  instagram: "https://instagram.com/seka.lori",
  whatsapp: "https://wa.me/6285173075151",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
} as const;

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
      { label: "Privacy Policy", href: sekaloriLinks.privacyPolicy },
      { label: "Terms of Service", href: sekaloriLinks.termsOfService },
    ],
  },
];

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: { title: string; body: string[] }[];
};

export const legalDocuments = {
  privacyPolicy: {
    title: "Privacy Policy",
    effectiveDate: "May 31, 2026",
    intro:
      "This sample privacy policy describes how SEKALORI Kitchen & Catering may handle customer information for meal plans, event catering, delivery coordination, and customer support.",
    sections: [
      {
        title: "Customer Data We Collect",
        body: [
          "We may collect names, phone numbers, email addresses, delivery addresses, order preferences, allergy notes, event details, and payment confirmation details when customers contact or order from us.",
          "We do not request sensitive health records. Nutrition preferences shared by customers are used only to prepare and coordinate requested catering services.",
        ],
      },
      {
        title: "How We Use Information",
        body: [
          "Customer information is used to confirm orders, prepare meals, schedule deliveries, answer service questions, manage catering events, and improve menu planning.",
          "Order records may also be kept for operational reporting, food safety traceability, accounting, and internal quality review.",
        ],
      },
      {
        title: "Sharing and Service Providers",
        body: [
          "We may share limited order details with kitchen staff, delivery partners, payment processors, and business tools that help us operate the catering service.",
          "We do not sell customer contact information. Any vendor access should be limited to the work needed to support SEKALORI services.",
        ],
      },
      {
        title: "Retention and Security",
        body: [
          "We retain order and communication records for as long as needed for operations, legal compliance, dispute handling, and business reporting.",
          "We use reasonable administrative and technical safeguards, but no online or offline system can be guaranteed to be perfectly secure.",
        ],
      },
      {
        title: "Customer Choices",
        body: [
          "Customers may request correction or deletion of contact details by contacting SEKALORI, subject to records we need to keep for legitimate business or legal reasons.",
          "Marketing messages, if used, should include a practical way to opt out.",
        ],
      },
    ],
  },
  termsOfService: {
    title: "Terms of Service",
    effectiveDate: "May 31, 2026",
    intro:
      "These sample terms describe basic conditions for using SEKALORI Kitchen & Catering services, including daily meal plans, batch menus, and event catering.",
    sections: [
      {
        title: "Service Scope",
        body: [
          "SEKALORI provides catering, meal preparation, and delivery coordination for customers in supported service areas. Menu availability, delivery coverage, and scheduling may change based on ingredient supply and operational capacity.",
          "Images and menu descriptions are illustrative. Actual meals may vary because fresh produce and kitchen preparation can change by season and batch.",
        ],
      },
      {
        title: "Orders and Customer Responsibilities",
        body: [
          "Customers are responsible for providing accurate names, contact details, addresses, fulfilment dates, dietary notes, and event requirements before an order is confirmed.",
          "SEKALORI may contact customers to verify details before accepting or preparing an order.",
        ],
      },
      {
        title: "Payments, Changes, and Cancellations",
        body: [
          "Payment timing, deposit requirements, cancellation windows, and refund handling may vary by meal plan or catering event size.",
          "Changes requested after confirmation are subject to ingredient availability, preparation status, delivery scheduling, and any costs already incurred.",
        ],
      },
      {
        title: "Food Safety and Allergens",
        body: [
          "SEKALORI aims to follow appropriate food handling, hygiene, and halal preparation standards. Customers should refrigerate or consume delivered meals according to provided handling guidance.",
          "Customers must disclose allergies or dietary restrictions before ordering. We will make reasonable efforts to accommodate requests, but shared kitchen environments may carry cross-contact risk.",
        ],
      },
      {
        title: "Liability and Contact",
        body: [
          "To the extent permitted by applicable law, SEKALORI is not responsible for losses caused by inaccurate customer information, improper food storage after delivery, third-party service disruption, or events outside reasonable control.",
          "Questions about these sample terms can be sent to the SEKALORI team through the listed social or WhatsApp contact channels.",
        ],
      },
    ],
  },
} satisfies Record<string, LegalDocument>;

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
