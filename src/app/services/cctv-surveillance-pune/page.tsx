import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import {
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Camera,
  Building,
  Wrench,
  Layers,
  ChevronRight,
} from "lucide-react";

const service = servicesData.find((s) => s.slug === "cctv-surveillance-pune")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function CctvServicePage() {
  if (!service) notFound();

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Home</a>
          <ChevronRight className="h-3 w-3" />
          <a href="/services" className="hover:text-slate-900">Services</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-900 font-semibold">{service.navTitle}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5">
              <Camera className="h-4 w-4" />
              <span>{service.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              {service.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {service.heroSubheadline}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#service-quote"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition"
              >
                Request CCTV Site Survey
              </a>
              <a
                href="/projects"
                className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-medium text-xs sm:text-sm transition"
              >
                View CCTV Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hook Section & Target Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                System Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 mb-6">
                Engineered for 24/7 Evidentiary-Grade Surveillance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {service.fullDescription}
              </p>

              {/* Technical Capabilities */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-8">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-amber-600" />
                  <span>Technical System Capabilities</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {service.technicalCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Audience Sidebar */}
            <div className="rounded-2xl bg-navy-900 text-white p-7 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Building className="h-4 w-4 text-amber-400" />
                <span>Ideal Deployments in Pune</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                {service.targetAudience.map((audience, i) => (
                  <li key={i} className="flex items-start gap-2 pb-2 border-b border-slate-800/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  Supported Brands
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.brandsCarried.map((b, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Key Features & Benefits
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Why Enterprise Clients Choose Our CCTV Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="h-9 w-9 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center mb-4 font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Wrench className="h-4 w-4" />
              <span>Representative Pune Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              {service.caseStudy.title}
            </h2>
            <div className="text-xs text-slate-400 mb-6">
              Client Sector: <span className="text-slate-200 font-semibold">{service.caseStudy.clientType}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <span className="font-bold text-white block mb-2 text-sm">The Challenge</span>
                <p>{service.caseStudy.challenge}</p>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <span className="font-bold text-white block mb-2 text-sm">The Spaark Solution</span>
                <p>{service.caseStudy.solution}</p>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <span className="font-bold text-amber-400 block mb-2 text-sm">Measurable Outcome</span>
                <p>{service.caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Service-Specific Quote Form */}
      <section id="service-quote" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceQuoteForm
            serviceTitle={service.title}
            questionLabel={service.formSpecifics.questionLabel}
            options={service.formSpecifics.options}
          />
        </div>
      </section>

      {/* Related Services Cross-Links */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Frequently Paired Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <a
                key={rel.id}
                href={`/services/${rel.slug}`}
                className="p-5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition group block"
              >
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  {rel.badge}
                </span>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-navy-900 transition">
                  {rel.navTitle}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.shortDescription}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
