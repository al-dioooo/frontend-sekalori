import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { LegalPage } from "@/components/legal/legal-page";
import { legalDocuments } from "@/lib/sekalori-data";

export const metadata: Metadata = {
  title: {
    absolute: "SEKALORI - Terms of Service",
  },
  description:
    "Dummy terms of service for SEKALORI Kitchen & Catering meal plans, event catering, payments, cancellations, food safety, and liability.",
};

export default function TermsOfServicePage() {
  return (
    <MainLayout>
      <LegalPage document={legalDocuments.termsOfService} />
    </MainLayout>
  );
}
