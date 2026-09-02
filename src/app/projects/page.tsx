import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import ProjectsFilter from "@/components/ProjectsFilter";
import {
  Wrench,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Building,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Projects & Deep-Dive Case Studies in Pune | Spaark Enterprises",
  description:
    "Explore real-world Problem → Solution → Outcome B2B engineering case studies across Pune and PCMC: 140-camera factory surveillance, school smart classrooms, and biometric turnstiles.",
};

export default function ProjectsPage() {
  const featuredCaseStudies = projectsData.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="bg-slate-50">
      {/* 1. HERO */}
      <section className="bg-slate-950 text-white py-18 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Proven Pune Deployments</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Engineering Deployments & Written Case Studies Across Maharashtra
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our verified field installations. From optical-fiber CCTV backbones in Chakan to
              hybrid boardroom acoustics in Hinjawadi, read how we solve complex physical security,
              life-safety, and AV integration challenges.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WRITTEN DEEP-DIVE CASE STUDIES (Problem → Solution → Outcome) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Technical Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Problem → Solution → Measurable Outcome
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Detailed architectural analysis of real-world systems deployed by Spaark Enterprises for
              industrial, educational, and corporate facilities.
            </p>
          </div>

          <div className="space-y-12">
            {featuredCaseStudies.map((cs, idx) => (
              <div
                key={cs.id}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-10 shadow-sm hover:border-slate-300 transition"
              >
                {/* Case Study Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                      <span className="font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                        Case Study 0{idx + 1} • {cs.categoryLabel}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {cs.location}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <Building className="h-3.5 w-3.5 text-slate-400" />
                        {cs.clientIndustry}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900">{cs.title}</h3>
                    <div className="text-xs text-slate-500 mt-1">
                      Facility Scale: <span className="font-semibold text-slate-700">{cs.scale}</span>
                    </div>
                  </div>

                  <a
                    href="/get-a-quote"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shrink-0 self-start md:self-auto"
                  >
                    <span>Request Similar Setup</span>
                    <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
                  </a>
                </div>

                {/* Challenge, Solution, Outcome 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* The Challenge */}
                  <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
                      The Operational Challenge
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900 block mb-2">
                      The Spaark Engineering Solution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Measurable Outcomes */}
                  <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-2">
                      Measurable Business Outcome
                    </span>
                    <ul className="space-y-2 text-xs text-slate-800">
                      {cs.keyOutcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Equipment Installed Bill of Materials */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Key Equipment Provisioned:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cs.equipmentInstalled.map((eq, eIdx) => (
                        <span
                          key={eIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 italic shrink-0">
                    {/* PLACEHOLDER: client details */}
                    Client Category: {cs.clientPlaceholder}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FILTERABLE PROJECT GALLERY (ALL CATEGORIES) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Project Archive
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Explore Our Complete Deployment Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Filter by system category to inspect specific camera counts, audio wattages, and access
              control setups.
            </p>
          </div>

          <ProjectsFilter />
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Have a Similar Project Requirement in Pune?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Our senior systems engineers provide free on-site surveys, cable pathway mapping, and
            itemized bills of materials for new developments and retrofits.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition active:scale-95"
            >
              <span>Request a Site Survey & Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-semibold text-xs tracking-wider uppercase transition"
            >
              <span>Contact Pune Engineering Office</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
