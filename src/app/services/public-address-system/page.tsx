import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = servicesData.find((s) => s.slug === "public-address-system")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function PublicAddressServicePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
