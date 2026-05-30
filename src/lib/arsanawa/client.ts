import "server-only";
import { getArsanawaConfig } from "@/lib/arsanawa/config";
import type {
  ArsanawaApiEnvelope,
  ArsanawaExternalPriceData,
  ArsanawaExternalProductsData,
} from "@/lib/arsanawa/types";

const EXTERNAL_PRODUCTS_PATH = "/api/v1/external/products";

type ProductLookupOptions = {
  branchId?: number;
  on?: string;
};

async function arsanawaGet<T>(
  path: string,
  searchParams?: URLSearchParams,
): Promise<T | null> {
  const config = getArsanawaConfig();

  if (!config.isConfigured) {
    return null;
  }

  const url = new URL(`${config.baseUrl}${path}`);

  searchParams?.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-Key": config.externalApiKey,
      },
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return null;
    }

    const envelope = (await response.json()) as ArsanawaApiEnvelope<T>;
    return envelope.data;
  } catch {
    return null;
  }
}

export async function fetchExternalProducts({
  branchId,
  on,
}: ProductLookupOptions = {}): Promise<ArsanawaExternalProductsData | null> {
  const config = getArsanawaConfig();
  const searchParams = new URLSearchParams();
  const resolvedBranchId = branchId ?? config.branchId;

  if (resolvedBranchId) {
    searchParams.set("branch_id", String(resolvedBranchId));
  }

  if (on) {
    searchParams.set("on", on);
  }

  return arsanawaGet<ArsanawaExternalProductsData>(
    EXTERNAL_PRODUCTS_PATH,
    searchParams,
  );
}

export async function fetchExternalVariantPrice(
  productVariantId: number,
  on?: string,
): Promise<ArsanawaExternalPriceData | null> {
  const searchParams = new URLSearchParams();

  if (on) {
    searchParams.set("on", on);
  }

  return arsanawaGet<ArsanawaExternalPriceData>(
    `${EXTERNAL_PRODUCTS_PATH}/${productVariantId}/price`,
    searchParams,
  );
}
