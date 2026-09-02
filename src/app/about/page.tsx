import { Metadata } from "next";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Target,
  Award,
  Users,
  MapPin,
  CheckCircle,
  ArrowRight,
  Phone,
  Building,
  Wrench,
  BadgeCheck,
  CalendarCheck,
  ClockAlert,
  Cpu,
  Flame,
  Shield,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Spaark Enterprises Pune - Low-Voltage & Security Systems Integrator",
  description:
    "Learn about Spaark Enterprises, an established B2B systems integrator based in Old Sangavi, Pune since 2012. Our mission, quality commitments, certified team, and enterprise client philosophy.",
};

const iconMap: Record<string, any> = {
  Award,
  BadgeCheck,
  CalendarCheck,
  ClockAlert,
  Cpu,
  CheckCircle,
  ShieldCheck,
  Clock,
  Wrench,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-950 text-white py-18 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-3">
              About Spaark Enterprises
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Engineering Enterprise Trust & Physical Security in Pune Since 2012
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Spaark Enterprises is a premier B2B low-voltage systems integrator headquartered in
              Old Sangavi, Pune. We bridge the gap between complex electronic security, life-safety,
              audiovisual, and telecommunications hardware and standards-compliant, zero-defect on-site
              execution.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & QUALITY COMMITMENT SECTION (Stealth Solutions Inspired) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Our Core Principles
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Mission Statement & Uncompromising Quality Standards
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We operate on the belief that life-safety and surveillance systems cannot afford single
              points of failure or substandard installation shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Statement Box */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 border border-amber-200/60">
                  <Target className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
                  Our Mission
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Safeguarding Maharashtra's Critical Workplaces
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {companyData.mission}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Client-First Engineering • Zero Vendor Lock-in</span>
              </div>
            </div>

            {/* Quality Commitment Box */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-slate-800 text-amber-400 flex items-center justify-center mb-6 border border-slate-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Quality Commitment
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  Rigorous Standards, Zero Installation Shortcuts
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {companyData.qualityCommitment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Shield className="h-4 w-4 text-amber-400" />
                <span>NBC 2016 Part 4 Compliant • Form-B Certification Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDING STORY & EVOLUTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Our Evolution
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-6">
                From Local Telephony Specialists to Turnkey Enterprise Systems Integrators
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Founded in Old Sangavi, Pune, Spaark Enterprises began with a singular focus: providing
                  industrial manufacturers, educational institutions, and corporate facilities with
                  dependable, professionally engineered telecommunications and low-voltage infrastructure.
                  In an industry where cabling was often treated as an afterthought by uncertified
                  subcontractors, Spaark established a reputation for structured cabling discipline and
                  responsive local support.
                </p>
                <p>
                  As Pune developed into an international automotive hub and IT capital spanning Chakan,
                  Hinjawadi, Bhosari, and Magarpatta, our engineering capabilities expanded. We integrated
                  high-definition IP video surveillance, addressable life-safety fire detection systems,
                  smart interactive flat panels, and cloud-backed workplace automation.
                </p>
                <p>
                  Today, Spaark Enterprises is recognized across Maharashtra as an accountable,
                  single-source engineering partner. We do not simply sell equipment; we survey, calculate
                  lux and decibel metrics, pull certified cabling, configure networks, and provide
                  continuous SLA-backed maintenance.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-black text-navy-900">
                    {/* PLACEHOLDER: replace with real figure */}
                    12+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Years in Business</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-navy-900">
                    {/* PLACEHOLDER: replace with real figure */}
                    650+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Completed Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-navy-900">
                    {/* PLACEHOLDER: replace with real figure */}
                    180+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Active AMC Clients</div>
                </div>
              </div>
            </div>

            {/* Visual Callout / Core Operational Philosophy */}
            <div className="rounded-3xl bg-slate-900 p-8 sm:p-10 text-white shadow-2xl border border-slate-800">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 border border-amber-500/20">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Spaark Engineering Ethos</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                &ldquo;A security camera is only as reliable as its cable termination; a fire alarm is only as
                good as its regular preventive testing; and an enterprise intercom is only as valuable as its
                uptime.&rdquo;
              </p>
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero-Cut Corners:</strong> We mandate fire-retardant low-smoke conduits, pure
                    copper Cat6 cabling, and certified surge suppressors on all outdoor lines.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>OEM Neutrality:</strong> We recommend hardware tailored to your architectural
                    environment, user count, and budget — never to meet sales targets for specific brands.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Dedicated Mobile Service Fleet:</strong> Centralized in Old Sangavi, our mobile
                    crews provide guaranteed 2–4 hour on-site breakdown response across Pune & PCMC.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. USP GRID — The 6 Differentiators */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Why Clients Choose Spaark
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Engineered for Enterprise Accountability
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From site survey through decade-long SLA maintenance, here is why leading Pune facilities trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.uspGrid.map((usp, idx) => {
              const IconComp = iconMap[usp.icon] || Award;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition"
                >
                  <div className="h-11 w-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4 border border-slate-200/60">
                    <IconComp className="h-5 w-5 text-navy-800" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{usp.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{usp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP & ENGINEERING TEAM (Clearly-Marked Placeholders) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Leadership & Field Operations
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Led by Systems Integration Veterans
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our engineering management blends decades of hands-on field cabling experience with
              cutting-edge enterprise IP networking and video analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyData.teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md hover:bg-white transition flex flex-col justify-between"
              >
                <div>
                  {/* PLACEHOLDER: replace with real team member photo / avatar */}
                  <div className="h-16 w-16 rounded-2xl bg-navy-900 text-amber-400 flex items-center justify-center font-bold text-xl mb-4 shadow-sm">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <div className="text-xs font-semibold text-amber-600 mt-0.5 mb-2">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mb-3 flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 text-slate-400" />
                    <span>{member.experience}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-400 italic">
                  {/* PLACEHOLDER: team comment */}
                  {member.comment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRAND ECOSYSTEM & REGIONAL SERVICE COVERAGE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Equipment Ecosystem
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-4">
                Compatible with Global OEM Standards
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                To guarantee equipment longevity, readily available spare components, and statutory
                compliance, Spaark Enterprises deploys and services products from premier global manufacturers:
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {companyData.brandPartners.slice(0, 8).map((bp, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white border border-slate-200 font-semibold text-slate-800 shadow-xs"
                  >
                    <span className="block text-slate-900">{bp.name}</span>
                    <span className="text-[10px] text-slate-500 font-normal">{bp.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Coverage Map Card */}
            <div className="rounded-3xl bg-navy-900 p-8 text-white border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="h-4 w-4" />
                <span>Centralized in Old Sangavi, Pune</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Rapid Local Response Radius</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Our central facility in Old Sangavi enables rapid vehicle dispatch along the Old
                Pune-Mumbai Highway, Aundh, Dapodi, and connecting expressways to support all major
                industrial hubs within 2–4 hours:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                {companyData.serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Partner with Pune's Trusted B2B Systems Integrator
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Schedule an on-site technical inspection, request a formal bill of materials (BOM), or
            discuss an AMC agreement with our senior engineers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/get-a-quote"
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition shadow active:scale-95"
            >
              Request a Free Quote
            </a>
            <a
              href="/contact"
              className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-white font-semibold text-xs tracking-wider uppercase transition"
            >
              Contact Our Pune Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
