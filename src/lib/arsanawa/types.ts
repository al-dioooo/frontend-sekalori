export type ArsanawaApiEnvelope<T> = {
  message: string;
  data: T | null;
};

export type ArsanawaProductImage = {
  id: number;
  url: string | null;
  original_url: string | null;
  alt_text: string | null;
  mime_type: string | null;
  size_bytes: number | null;
  width: number | null;
  height: number | null;
  is_primary: boolean;
  sort_order: number | null;
};

export type ArsanawaProductUnit = {
  id: number;
  sku: string;
  barcode: string | null;
  name: string | null;
  images: ArsanawaProductImage[];
};

export type ArsanawaProductVariant = {
  id: number;
  product_id: number;
  sku: string;
  barcode: string | null;
  name: string | null;
  attributes: Record<string, unknown> | null;
  price: string | number | null;
  maximum_retail_price: string | number | null;
  currency_id: number | null;
  product_unit: ArsanawaProductUnit | null;
};

export type ArsanawaExternalProduct = {
  id: number;
  name: string;
  description: string | null;
  attributes: Record<string, unknown> | null;
  images: ArsanawaProductImage[];
  variants: ArsanawaProductVariant[];
};

export type ArsanawaExternalProductsData = {
  products: ArsanawaExternalProduct[];
};

export type ArsanawaExternalPriceData = {
  product_variant_id: number;
  price: string | number | null;
  maximum_retail_price: string | number | null;
  currency_id: number | null;
};

export type ExternalCateringOrderPayload = {
  external_reference: string;
  branch_id: number;
  customer: {
    name: string;
    email?: string | null;
    phone?: string | null;
  };
  order_date?: string;
  fulfilment_date: string;
  delivery_address?: string | null;
  currency_id?: number | null;
  exchange_rate?: number | null;
  notes?: string | null;
  lines: {
    product_variant_id: number;
    description?: string | null;
    quantity: number;
    unit_price?: number | null;
    discount?: number | null;
  }[];
};
