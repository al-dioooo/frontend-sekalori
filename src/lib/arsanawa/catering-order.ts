import "server-only";
import type { ExternalCateringOrderPayload } from "@/lib/arsanawa/types";

type CateringOrderLineInput = {
  productVariantId: number;
  quantity: number;
  description?: string | null;
  unitPrice?: number | null;
  discount?: number | null;
};

type CateringOrderInput = {
  externalReference: string;
  branchId: number;
  customer: ExternalCateringOrderPayload["customer"];
  fulfilmentDate: string;
  orderDate?: string;
  deliveryAddress?: string | null;
  notes?: string | null;
  currencyId?: number | null;
  exchangeRate?: number | null;
  lines: CateringOrderLineInput[];
};

export function buildExternalCateringOrderPayload(
  input: CateringOrderInput,
): ExternalCateringOrderPayload {
  return {
    external_reference: input.externalReference,
    branch_id: input.branchId,
    customer: input.customer,
    order_date: input.orderDate,
    fulfilment_date: input.fulfilmentDate,
    delivery_address: input.deliveryAddress,
    currency_id: input.currencyId,
    exchange_rate: input.exchangeRate,
    notes: input.notes,
    lines: input.lines.map((line) => ({
      product_variant_id: line.productVariantId,
      description: line.description,
      quantity: line.quantity,
      unit_price: line.unitPrice,
      discount: line.discount,
    })),
  };
}
