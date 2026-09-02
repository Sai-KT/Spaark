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
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Spaark Enterprises Pune - Security & AV Systems Integrator",
  description:
    "Learn about Spaark Enterprises, an established B2B systems integrator based in Old Sangavi, Pune since 2012. Our history, engineering mission, certified team, and client philosophy.",
};

export default function AboutPage() {
  const leadershipTeam = [
    {
      /* PLACEHOLDER: replace with real team member details */
      name: "Sanjay Shinde",
      role: "Managing Director & Principal Systems Architect",
      experience: "20+ Years in ELV & Telecommunications",
      bio: "Leads engineering architecture, strategic enterprise partnerships, and large-scale industrial turnkey projects across Maharashtra.",
    },
    {
      /* PLACEHOLDER: replace with real team member details */
      name: "Manoj Deshpande",
      role: "Head of Technical Operations & Projects",
      experience: "15+ Years in Physical Security & Cabling",
      bio: "Oversees site project management, on-field installation teams, testing protocols, and compliance verification.",
    },
    {
      /* PLACEHOLDER: replace with real team member details */
      name: "Prashant Kulkarni",
      role: "Service Delivery & AMC Manager",
      experience: "12+ Years in Hardware SLA & Maintenance",
      bio: "Directs 24/7 breakdown dispatch, spare parts inventory, and preventive maintenance schedules for 180+ active AMC clients.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-3">
              About Spaark Enterprises
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Engineering Enterprise Trust & Physical Security in Pune Since 2012
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Spaark Enterprises is a premier B2B systems integrator based in Old Sangavi, Pune. We
              bridge the gap between sophisticated security, telecommunications, and audiovisual
              hardware and flawless, standards-compliant on-site installation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & Founding */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Our Founding Story
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-6">
                From Local Telephony Specialists to Turnkey Enterprise Systems Integrators
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Founded in Old Sangavi, Pune, Spaark Enterprises began with a clear mission: to provide
                  industrial manufacturers, schools, and growing offices with dependable, professionally
                  engineered voice and communication infrastructure. In an era where security and intercom
                  wiring was frequently left to uncertified local electricians, Spaark introduced
                  rigorous structured cabling standards and reliable after-sales support.
                </p>
                <p>
                  As Pune expanded into an international technology hub and an automotive powerhouse
                  spanning Hinjawadi, Chakan, and Bhosari, our capabilities evolved. We broadened our
                  engineering portfolio into high-definition IP video surveillance, addressable life-safety
                  fire alarms, smart interactive flat panels, and cloud-integrated workplace automation.
                </p>
                <p>
                  Today, Spaark Enterprises is recognized across Maharashtra as an accountable,
                  single-source engineering partner. We do not just ship boxes; we design, pull cables,
                  configure networks, train staff, and provide continuous SLA-backed maintenance.
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

            {/* Visual Box / Architecture Focus */}
            <div className="rounded-3xl bg-slate-900 p-8 sm:p-10 text-white shadow-2xl border border-slate-800">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 border border-amber-500/20">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Core Philosophy</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                "A security camera is only as reliable as its cable termination; a fire alarm is only as
                good as its regular testing; and an intercom is only as valuable as its uptime."
              </p>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero-Cut Corners:</strong> We insist on fire-retardant conduits, pure copper Cat6 cabling, and certified mounting accessories.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hardware Agnostic:</strong> We specify equipment that precisely matches client budgets and site conditions, not exclusive vendor quotas.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Rapid Local Dispatch:</strong> Based centrally in Old Sangavi, our mobile technician teams can reach any Pune or PCMC site rapidly.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Leadership & Expertise
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Led by Seasoned Engineering Specialists
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our leadership blends deep field cabling experience with cutting-edge network IP and
              video analytics expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition"
              >
                {/* PLACEHOLDER: real member photo / avatar */}
                <div className="h-16 w-16 rounded-2xl bg-navy-900 text-amber-400 flex items-center justify-center font-bold text-xl mb-4 shadow">
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
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partnerships & Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Equipment Ecosystem
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-4">
                Compatible with Leading Global OEM Brands
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                To guarantee maximum longevity and readily available spare parts, Spaark Enterprises
                deploys and services hardware from world-class manufacturers compliant with Indian and
                international safety regulations:
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  Hikvision & CP PLUS (Video Surveillance)
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  Honeywell & Morley-IAS (Fire Safety)
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  Matrix Comsec & Panasonic (EPABX & IP-PBX)
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  BenQ, ViewSonic & Maxhub (Smart Displays)
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  Bosch & Ahuja (Commercial PA / Sound)
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  Poly & Logitech (Video Conferencing)
                </div>
              </div>
            </div>

            {/* Service Coverage Map Card */}
            <div className="rounded-3xl bg-navy-900 p-8 text-white border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="h-4 w-4" />
                <span>Local Pune Presence</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Operational Service Coverage</h3>
              <p className="text-xs text-slate-300 mb-6">
                Headquartered in Old Sangavi, our mobile technical vans provide same-day on-site response
                across Pune's industrial corridors:
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

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
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
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm tracking-wide transition shadow"
            >
              Request a Free Quote
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition"
            >
              Contact Our Pune Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
