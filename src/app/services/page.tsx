import { Metadata } from "next";
import { servicesData } from "@/data/services";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Electronic Security & AV Services in Pune | Spaark Enterprises",
  description:
    "Comprehensive systems integration services in Pune & PCMC. Commercial CCTV surveillance, fire alarm systems, interactive panels, video conferencing, EPABX, PA systems, and access control.",
};

const iconMap: Record<string, any> = {
  Camera,
  Flame,
  Projector,
  Video,
  PhoneCall,
  Megaphone,
  Fingerprint,
};

export default function ServicesHubPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-3">
              Engineering Services Directory
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Turnkey Security, Telecommunications & AV Engineering Services in Pune
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Spaark Enterprises engineers, delivers, and services commercial-grade electronic security
              and communication systems for industrial plants, tech parks, schools, and corporate
              offices across Pune, PCMC, Chakan, and Hinjawadi.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComp = iconMap[service.icon] || Camera;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-amber-400 transition flex items-center justify-center">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-navy-900 transition mb-3">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-6 text-xs text-slate-700">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">B2B Integration</span>
                    <a
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 group-hover:text-amber-600 transition"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need a Multi-Service ELV Package for a New Facility?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Bundling your CCTV, fire alarm, EPABX, and public address cabling with a single systems
            integrator reduces project coordination hassles and cuts total installation overheads by
            up to 25%.
          </p>
          <a
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg transition"
          >
            <span>Request Turnkey Project Proposal</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
