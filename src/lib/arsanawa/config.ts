import "server-only";

export type ArsanawaConfig = {
  baseUrl: string;
  externalApiKey: string;
  branchId?: number;
  isConfigured: boolean;
};

function normalizeBaseUrl(value: string | undefined): string {
  return value?.trim().replace(/\/+$/, "") ?? "";
}

function parseBranchId(value: string | undefined): number | undefined {
  if (!value?.trim()) return undefined;

  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
}

export function getArsanawaConfig(): ArsanawaConfig {
  const baseUrl = normalizeBaseUrl(process.env.ARSANAWA_ERP_API_BASE_URL);
  const externalApiKey = process.env.ARSANAWA_ERP_EXTERNAL_API_KEY?.trim() ?? "";

  return {
    baseUrl,
    externalApiKey,
    branchId: parseBranchId(process.env.ARSANAWA_ERP_BRANCH_ID),
    isConfigured: baseUrl.length > 0 && externalApiKey.length > 0,
  };
}
