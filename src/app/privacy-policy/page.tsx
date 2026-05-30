import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { LegalPage } from "@/components/legal/legal-page";
import { legalDocuments } from "@/lib/sekalori-data";

export const metadata: Metadata = {
  title: {
    absolute: "SEKALORI - Privacy Policy",
  },
  description:
    "Dummy privacy policy for SEKALORI Kitchen & Catering customer data, orders, delivery coordination, and catering service operations.",
};

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <LegalPage document={legalDocuments.privacyPolicy} />
    </MainLayout>
  );
}
