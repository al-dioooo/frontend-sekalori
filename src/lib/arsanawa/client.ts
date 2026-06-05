import "server-only";
import http from "node:http";
import https from "node:https";
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

type JsonResponse = {
  ok: boolean;
  statusCode: number;
  body: unknown;
};

function requestJson(url: URL, apiKey: string): Promise<JsonResponse> {
  return new Promise((resolve, reject) => {
    const transport = url.protocol === "http:" ? http : https;
    const request = transport.request(
      url,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-API-Key": apiKey,
        },
        rejectUnauthorized: false,
        timeout: 5000,
      },
      (response) => {
        let body = "";

        response.setEncoding("utf8");
        response.on("data", (chunk: string) => {
          body += chunk;
        });
        response.on("end", () => {
          try {
            resolve({
              ok:
                response.statusCode !== undefined &&
                response.statusCode >= 200 &&
                response.statusCode < 300,
              statusCode: response.statusCode ?? 0,
              body: JSON.parse(body),
            });
          } catch (error) {
            reject(error);
          }
        });
      },
    );

    request.on("timeout", () => {
      request.destroy(new Error("Arsanawa ERP request timed out."));
    });
    request.on("error", reject);
    request.end();
  });
}

async function arsanawaGet<T>(
  path: string,
  searchParams?: URLSearchParams,
): Promise<T | null> {
  const config = getArsanawaConfig();

  if (!config.isConfigured) {
    return null;
  }

  try {
    const url = new URL(`${config.baseUrl}${path}`);

    searchParams?.forEach((value, key) => {
      url.searchParams.set(key, value);
    });

    const response = await requestJson(url, config.externalApiKey);

    if (!response.ok) {
      return null;
    }

    const envelope = response.body as ArsanawaApiEnvelope<T>;
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
