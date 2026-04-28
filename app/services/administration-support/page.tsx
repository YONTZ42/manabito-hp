import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { requireServiceDetail } from "@/data/service-details";

const detail = requireServiceDetail("administration-support");

export const metadata: Metadata = {
  title: `${detail.target} | ${detail.catchphrase}`,
  description: detail.description,
  alternates: {
    canonical: detail.href,
  },
};

export default function AdministrationSupportPage() {
  return <ServiceDetailPage detail={detail} />;
}
