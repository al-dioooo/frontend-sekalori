import "server-only";
import { connection } from "next/server";
import { fetchExternalProducts } from "@/lib/arsanawa/client";
import { getArsanawaConfig } from "@/lib/arsanawa/config";
import type {
  ArsanawaExternalProduct,
  ArsanawaProductImage,
  ArsanawaProductVariant,
} from "@/lib/arsanawa/types";
import { batchMenuItems, type MenuItem } from "@/lib/sekalori-data";

const JAKARTA_TIME_ZONE = "Asia/Jakarta";

const staticBatchHero: BatchHero = {
  dateRange: "Nov 13 - Nov 17",
  title: "Fiber Boost Week",
  description:
    "Tingkatkan energi harian Anda dengan hidangan padat nutrisi dan tinggi serat yang dirancang untuk kesehatan pencernaan. Bahan segar langsung dari pertanian lokal Bogor.",
  daysLabel: "5 Days",
  calorieLabel: "~1800 kkal/hari",
  image: "/sekalori/batch-hero-bowl.png",
  imageAlt:
    "Fiber boost bowl with quinoa, kale, avocado, and roasted sweet potato.",
};

export type BatchHero = {
  dateRange: string;
  title: string;
  description: string;
  daysLabel: string;
  calorieLabel: string;
  image: string;
  imageAlt: string;
};

export type CateringBatchData = {
  source: "erp" | "static";
  hero: BatchHero;
  items: MenuItem[];
};

function getJakartaDateString(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: JAKARTA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return year && month && day
    ? `${year}-${month}-${day}`
    : date.toISOString().slice(0, 10);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(
  attributes: Record<string, unknown> | null | undefined,
  key: string,
): string | null {
  const value = attributes?.[key];
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}

function readBatchAttributes(
  products: ArsanawaExternalProduct[],
): Record<string, unknown> | null {
  for (const product of products) {
    const batchAttributes = product.attributes?.sekalori_batch;

    if (isRecord(batchAttributes)) {
      return batchAttributes;
    }
  }

  return null;
}

function sortImages(images: ArsanawaProductImage[] | null | undefined) {
  return [...(images ?? [])].sort((first, second) => {
    if (first.is_primary !== second.is_primary) {
      return first.is_primary ? -1 : 1;
    }

    return (first.sort_order ?? 0) - (second.sort_order ?? 0);
  });
}

function resolveSafeErpImageUrl(
  value: string | null | undefined,
  erpBaseUrl: string,
): string | null {
  if (!value?.trim() || !erpBaseUrl) {
    return null;
  }

  try {
    const erpOrigin = new URL(erpBaseUrl).origin;
    const imageUrl = new URL(value.trim(), `${erpBaseUrl}/`);

    return imageUrl.origin === erpOrigin ? imageUrl.href : null;
  } catch {
    return null;
  }
}

function getErpImage(
  images: ArsanawaProductImage[] | null | undefined,
  erpBaseUrl: string,
): { src: string; alt: string | null } | null {
  for (const image of sortImages(images)) {
    const src =
      resolveSafeErpImageUrl(image.url, erpBaseUrl) ??
      resolveSafeErpImageUrl(image.original_url, erpBaseUrl);

    if (src) {
      return {
        src,
        alt: image.alt_text?.trim() || null,
      };
    }
  }

  return null;
}

function getProductImage(
  product: ArsanawaExternalProduct,
  variant: ArsanawaProductVariant,
  erpBaseUrl: string,
): { src: string; alt: string | null } | null {
  return (
    getErpImage(variant.product_unit?.images, erpBaseUrl) ??
    getErpImage(product.images, erpBaseUrl)
  );
}

function productToMenuItem(
  product: ArsanawaExternalProduct,
  fallback: MenuItem,
  erpBaseUrl: string,
): MenuItem | null {
  const variant = product.variants[0];

  if (!variant) {
    return null;
  }

  const image = getProductImage(product, variant, erpBaseUrl);

  return {
    day: "",
    title: product.name || fallback.title,
    description: "",
    image: image?.src ?? fallback.image,
    imageAlt: image?.alt ?? product.name ?? fallback.imageAlt,
    nutrition: [],
  };
}

function mapProductsToMenuItems(
  products: ArsanawaExternalProduct[],
  erpBaseUrl: string,
): MenuItem[] {
  return products
    .map((product, index) =>
      productToMenuItem(
        product,
        batchMenuItems[index % batchMenuItems.length],
        erpBaseUrl,
      ),
    )
    .filter((item): item is MenuItem => item !== null);
}

function mapBatchHero(
  products: ArsanawaExternalProduct[],
  items: MenuItem[],
  erpBaseUrl: string,
): BatchHero {
  const batchAttributes = readBatchAttributes(products);
  const firstProduct = products[0];
  const firstVariant = firstProduct?.variants[0];
  const heroImage =
    firstProduct && firstVariant
      ? getProductImage(firstProduct, firstVariant, erpBaseUrl)
      : null;

  return {
    dateRange:
      readString(batchAttributes, "date_range") ?? staticBatchHero.dateRange,
    title: readString(batchAttributes, "title") ?? staticBatchHero.title,
    description:
      readString(batchAttributes, "description") ?? staticBatchHero.description,
    daysLabel:
      readString(batchAttributes, "days_label") ?? staticBatchHero.daysLabel,
    calorieLabel:
      readString(batchAttributes, "calorie_label") ??
      staticBatchHero.calorieLabel,
    image: heroImage?.src ?? staticBatchHero.image,
    imageAlt:
      heroImage?.alt ??
      items[0]?.imageAlt ??
      staticBatchHero.imageAlt,
  };
}

export async function getCurrentCateringBatchData(): Promise<CateringBatchData> {
  await connection();

  const config = getArsanawaConfig();
  const data = await fetchExternalProducts({
    on: getJakartaDateString(),
  });

  if (!data?.products?.length) {
    return {
      source: "static",
      hero: staticBatchHero,
      items: batchMenuItems,
    };
  }

  const items = mapProductsToMenuItems(data.products, config.baseUrl);

  if (items.length === 0) {
    return {
      source: "static",
      hero: staticBatchHero,
      items: batchMenuItems,
    };
  }

  return {
    source: "erp",
    hero: mapBatchHero(data.products, items, config.baseUrl),
    items,
  };
}

export async function getHomeMenuItems(): Promise<MenuItem[]> {
  const data = await getCurrentCateringBatchData();
  return data.items.slice(0, 3);
}

export async function getBatchMenuItems(): Promise<MenuItem[]> {
  const data = await getCurrentCateringBatchData();
  return data.items;
}
