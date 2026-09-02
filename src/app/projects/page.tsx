import { Metadata } from "next";
import ProjectsFilter from "@/components/ProjectsFilter";
import { Wrench, CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Projects & Case Studies in Pune | Spaark Enterprises",
  description:
    "Explore real-world B2B project case studies across Pune and PCMC: 140-camera factory surveillance, school smart classrooms, addressable fire safety, and biometric access.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-3">
              Engineering Deployments & Case Studies
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Proven Project Execution Across Pune's Industrial & Corporate Hubs
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our portfolio of commercial CCTV networks, smart educational auditoriums,
              life-safety fire alarm systems, and enterprise workplace automations deployed for
              manufacturing plants, schools, hospitals, and tech parks.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Project Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsFilter />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Have a Similar Project Requirement in Pune?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Our systems engineers provide free on-site surveys, cable pathway mapping, and technical
            bills of materials for new and retrofit projects.
          </p>
          <a
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg transition"
          >
            <span>Request a Site Survey & Proposal</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
