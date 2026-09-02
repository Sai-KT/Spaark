import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = servicesData.find((s) => s.slug === "access-control-system")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function AccessControlServicePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
