import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = servicesData.find((s) => s.slug === "fire-alarm-system")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function FireAlarmServicePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
