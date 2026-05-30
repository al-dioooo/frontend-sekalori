import "server-only";
import { fetchExternalProducts } from "@/lib/arsanawa/client";
import type {
  ArsanawaExternalProduct,
  ArsanawaProductVariant,
} from "@/lib/arsanawa/types";
import {
  batchMenuItems,
  homeMenuItems,
  type MenuItem,
} from "@/lib/sekalori-data";

function formatPrice(price: ArsanawaProductVariant["price"]): string {
  if (price === null) return "Harga ERP";

  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice)) {
    return "Harga ERP";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

function productToMenuItem(
  product: ArsanawaExternalProduct,
  fallback: MenuItem,
  index: number,
): MenuItem | null {
  const variant = product.variants[0];

  if (!variant) {
    return null;
  }

  return {
    day: fallback.day,
    title: product.name || fallback.title,
    description: product.description || fallback.description,
    image: fallback.image,
    imageAlt: fallback.imageAlt,
    nutrition: [
      formatPrice(variant.price),
      variant.name || variant.sku || `Menu ${index + 1}`,
      "ERP menu",
      "Ready order",
    ],
  };
}

async function getErpMenuItems(fallbackItems: MenuItem[]): Promise<MenuItem[]> {
  const data = await fetchExternalProducts();

  if (!data?.products?.length) {
    return fallbackItems;
  }

  const mappedItems = data.products
    .slice(0, fallbackItems.length)
    .map((product, index) =>
      productToMenuItem(product, fallbackItems[index], index),
    )
    .filter((item): item is MenuItem => item !== null);

  return mappedItems.length > 0 ? mappedItems : fallbackItems;
}

export async function getHomeMenuItems(): Promise<MenuItem[]> {
  return getErpMenuItems(homeMenuItems);
}

export async function getBatchMenuItems(): Promise<MenuItem[]> {
  return getErpMenuItems(batchMenuItems);
}
