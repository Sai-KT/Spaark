import { Metadata } from "next";
import { amcPlans, amcChecklist, amcFaqs } from "@/data/amc";
import QuoteForm from "@/components/QuoteForm";
import {
  Wrench,
  ShieldCheck,
  Clock,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Phone,
  ArrowRight,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Annual Maintenance Contract (AMC) for Security & AV in Pune | Spaark Enterprises",
  description:
    "Enterprise AMC services for CCTV, fire alarms, EPABX, and AV systems in Pune & PCMC. 2-4 hr emergency breakdown SLAs, quarterly preventive checks, and Form-B certification.",
};

export default function AmcServicePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5">
              <ShieldCheck className="h-4 w-4" />
              <span>SLA-Backed Maintenance Support</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Enterprise Annual Maintenance Contracts (AMC) in Pune & PCMC
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Protect your capital investments and guarantee 99.8% recording and communication uptime.
              We provide scheduled preventive tune-ups, rapid 2–4 hour breakdown dispatch, standby loaner
              hardware, and statutory Form-B fire safety certifications across Pune.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#amc-quote"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition"
              >
                Request Custom AMC Proposal
              </a>
              <a
                href="#faq"
                className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-medium text-xs sm:text-sm transition"
              >
                View AMC FAQs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why AMC Matters: The Uptime Imperative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Proactive Maintenance vs Break-Fix
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 mb-4">
                Why Scheduled Maintenance Is Critical for Electronic Systems
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Electronic security, life safety, and communication hardware are subjected to continuous
                vibration, industrial factory dust, monsoon humidity, and power fluctuations across Pune's
                industrial belts. Left unattended, hard drives crash quietly, optical lenses get
                obscured by grime, and smoke detectors trigger false alarms.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Waiting for an incident to discover that your cameras stopped recording four weeks ago
                creates irreversible legal, financial, and safety liabilities. Our AMC programs ensure
                proactive component replacement before catastrophic failures occur.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-amber-600" />
                    <span>Same-Day Engineer Dispatch</span>
                  </div>
                  <span>Dedicated mobile teams in Old Sangavi reach Pune/PCMC facilities rapidly.</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-amber-600" />
                    <span>Free Standby Loaner Hardware</span>
                  </div>
                  <span>Temporary replacement NVRs and switches installed during off-site repairs.</span>
                </div>
              </div>
            </div>

            {/* Statutory Compliance Alert Box */}
            <div className="rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 p-7 text-slate-900">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <span>Statutory Compliance</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Maharashtra Form-B Fire Compliance</h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                Under the Maharashtra Fire Prevention and Life Safety Measures Act, commercial building
                occupiers must submit a biannual Form-B maintenance certificate in January and July.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                Spaark Enterprises handles the comprehensive smoke testing, battery load tests, and
                statutory paperwork needed to keep your Fire NOC valid without interruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Tiers / Plans */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Service Tiers
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Select the Right AMC Tier for Your Facility
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Flexible contracts covering labor-only routine tune-ups or all-inclusive hardware
              replacement agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {amcPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition duration-300 ${
                  plan.isPopular
                    ? "bg-slate-900 text-white shadow-2xl border-2 border-amber-500 relative"
                    : "bg-white text-slate-900 shadow-sm border border-slate-200"
                }`}
              >
                <div>
                  {plan.badge && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-slate-950 mb-4">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-xs mb-6 ${
                      plan.isPopular ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`p-4 rounded-xl mb-6 text-xs space-y-1 ${
                      plan.isPopular
                        ? "bg-slate-800/80 border border-slate-700 text-slate-200"
                        : "bg-slate-50 border border-slate-100 text-slate-700"
                    }`}
                  >
                    <div>
                      <strong>Response SLA: </strong>
                      <span className="text-amber-500 font-semibold">{plan.responseTime}</span>
                    </div>
                    <div>
                      <strong>Preventive Frequency: </strong>
                      <span>{plan.preventiveVisits}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs mb-8">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block ${
                        plan.isPopular ? "text-amber-400" : "text-slate-900"
                      }`}
                    >
                      Scope Included:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span
                          className={plan.isPopular ? "text-slate-300" : "text-slate-600"}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#amc-quote"
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition ${
                    plan.isPopular
                      ? "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md"
                      : "bg-navy-900 hover:bg-navy-800 text-white"
                  }`}
                >
                  Request Proposal for {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Maintenance Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Rigorous Quality Standards
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Preventive Maintenance Inspection Checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every scheduled service visit follows an exhaustive checklist. A signed digital service
              report is issued to your facility team after every check.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amcChecklist.map((group, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 p-6 sm:p-7 bg-slate-50"
              >
                <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200 flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-amber-600" />
                  <span>{group.category}</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {group.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC FAQs */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Frequently Asked AMC Questions
            </h2>
          </div>

          <div className="space-y-4">
            {amcFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-amber-600 shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="amc-quote" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm defaultService="Annual Maintenance Contract (AMC)" isCompact={false} />
        </div>
      </section>
    </div>
  );
}
