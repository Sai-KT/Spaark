import { Metadata } from "next";
import { servicesData, serviceCategories } from "@/data/services";
import {
  ShieldCheck,
  ArrowRight,
  Camera,
  Flame,
  Projector,
  Video,
  PhoneCall,
  Megaphone,
  Fingerprint,
  CheckCircle,
  Wrench,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Electronic Security & AV Services Directory | Spaark Enterprises Pune",
  description:
    "Category-first systems integration directory in Pune & PCMC. Commercial CCTV surveillance, NBC fire alarm systems, interactive panels, video conferencing, EPABX, PA systems, and access control.",
};

const iconMap: Record<string, any> = {
  Camera,
  Flame,
  Projector,
  Video,
  PhoneCall,
  Megaphone,
  Fingerprint,
  ShieldCheck,
  Clock,
  Wrench,
  Layers,
};

export default function ServicesHubPage() {
  return (
    <div className="bg-slate-50">
      {/* 1. HERO */}
      <section className="bg-slate-950 text-white py-18 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="h-3.5 w-3.5" />
              <span>Category-First Systems Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Turnkey Security, Life-Safety & Audiovisual Engineering Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We group our 7 core engineering specializations into 4 foundational building disciplines.
              From structured cabling to certified commissioning, explore enterprise infrastructure
              tailored for facilities across Pune, PCMC, Chakan, and Hinjawadi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY-FIRST ARCHITECTURE (Stone Security Inspired) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceCategories.map((category, catIndex) => {
            const catServices = servicesData.filter((s) => category.serviceSlugs.includes(s.slug));

            return (
              <div
                key={category.id}
                id={category.id}
                className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-100 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                        Category 0{catIndex + 1}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-semibold text-slate-500">{category.tagline}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                      {category.shortDescription}
                    </p>
                  </div>

                  <a
                    href="/get-a-quote"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition shrink-0 self-start md:self-auto"
                  >
                    <span>Request Category Quote</span>
                    <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
                  </a>
                </div>

                {/* Sub-Services Grid for this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {catServices.map((service) => {
                    const IconComp = iconMap[service.icon] || Camera;
                    return (
                      <div
                        key={service.id}
                        className="rounded-2xl border border-slate-200 p-6 sm:p-7 bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 text-slate-900 group-hover:bg-navy-900 group-hover:text-amber-400 transition flex items-center justify-center shadow-xs">
                              <IconComp className="h-6 w-6" />
                            </div>
                            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200/60">
                              {service.badge}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-navy-900 transition mb-2">
                            {service.navTitle}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                            {service.shortDescription}
                          </p>

                          {/* Technical Highlights / 3 Features */}
                          <div className="mb-6 pt-4 border-t border-slate-200/60">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                              Key Capabilities:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-700">
                              {service.features.slice(0, 3).map((feat, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <CheckCircle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                                  <span className="line-clamp-1">{feat.title}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-medium">Pune & PCMC Turnkey</span>
                          <a
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-amber-600 transition"
                          >
                            <span>Full Specifications</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* 3. WORKPLACE AUTOMATION CROSS-LINK BRIDGE */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Complementary Workplace Systems
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Digital Attendance, Visitor & Canteen Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Looking for biometric attendance with payroll export, automated visitor pass tablets,
                cashless canteen tokens, or ultrasonic basement parking guidance? Explore our dedicated
                workplace automation suite.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="/solutions"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition shadow active:scale-95"
              >
                Explore Workplace Solutions
              </a>
              <a
                href="/amc-service"
                className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-semibold text-xs tracking-wider uppercase transition"
              >
                View AMC Plans & SLAs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Need a Multi-Service Low-Voltage BOM for Your Facility?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Our senior systems engineers conduct on-site facility surveys across Pune and PCMC to
            deliver complete, itemized technical designs and compliance audits.
          </p>
          <a
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </a>
        </div>
      </section>
    </div>
  );
}
