import { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutionsData } from "@/data/solutions";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";

const solution = solutionsData.find((s) => s.slug === "canteen-management-system")!;

export const metadata: Metadata = {
  title: solution.metaTitle,
  description: solution.metaDescription,
};

export default function CanteenManagementPage() {
  if (!solution) notFound();
  return <SolutionPageTemplate solution={solution} />;
}
