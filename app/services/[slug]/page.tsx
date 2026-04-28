import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { getServiceDetailBySlug, serviceDetails } from "@/data/service-details";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceDetails.map((detail) => ({
    slug: detail.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetailBySlug(slug);

  if (!detail) {
    return {
      title: "ページが見つかりません",
    };
  }

  return {
    title: `${detail.target} | ${detail.catchphrase}`,
    description: detail.description,
    alternates: {
      canonical: detail.href,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getServiceDetailBySlug(slug);

  if (!detail) {
    notFound();
  }

  return <ServiceDetailPage detail={detail} />;
}
