import { Metadata } from "next";
import { solutionsData } from "@/data/solutions";
import {
  Clock,
  UserCheck,
  Utensils,
  SquareParking,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Workplace & Automation Solutions in Pune | Spaark Enterprises",
  description:
    "Automate enterprise attendance, visitor check-in, canteen meal tokens, and basement parking guidance in Pune. Turnkey software & hardware systems integration.",
};

const iconMap: Record<string, any> = {
  Clock,
  UserCheck,
  Utensils,
  SquareParking,
};

export default function SolutionsHubPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-3">
              Workplace Automation Hub
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Digital Workplace & Facility Management Solutions in Pune
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Streamline your daily corporate and industrial operations. We deploy hardware-integrated
              software solutions that eliminate manual registers, buddy-punching, food coupon theft,
              and parking bottlenecks for facilities across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.map((sol) => {
              const IconComp = iconMap[sol.icon] || Clock;
              return (
                <div
                  key={sol.id}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-amber-400 transition flex items-center justify-center">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {sol.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-navy-900 transition mb-3">
                      {sol.navTitle}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {sol.shortDescription}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                        Core Capabilities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {sol.features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{f.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Turnkey Integration</span>
                    <a
                      href={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 group-hover:text-amber-600 transition"
                    >
                      <span>Explore System & Demo</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Unified Biometric Master Database Integration
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-8">
            Manage your employee credentials across attendance clocks, door access control, and canteen
            counters on a single centralized database with automatic SAP, Zoho, and ERP sync.
          </p>
          <a
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg transition"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
