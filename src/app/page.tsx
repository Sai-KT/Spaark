import { companyData } from "@/data/company";
import { servicesData, serviceCategories } from "@/data/services";
import { solutionsData } from "@/data/solutions";
import { projectsData } from "@/data/projects";
import { blogPosts } from "@/data/blog-posts";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ClientLogoStrip from "@/components/ClientLogoStrip";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import QuoteForm from "@/components/QuoteForm";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  Wrench,
  Clock,
  Layers,
  Camera,
  Flame,
  Projector,
  Video,
  PhoneCall,
  Megaphone,
  Fingerprint,
  UserCheck,
  Utensils,
  SquareParking,
  Star,
  Award,
  BadgeCheck,
  CalendarCheck,
  ClockAlert,
  Cpu,
  CheckCircle,
  Factory,
  Building2,
  GraduationCap,
  Stethoscope,
  Warehouse,
  ExternalLink,
  Shield,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Camera,
  Flame,
  Projector,
  Video,
  PhoneCall,
  Megaphone,
  Fingerprint,
  Clock,
  UserCheck,
  Utensils,
  SquareParking,
  Award,
  BadgeCheck,
  CalendarCheck,
  ClockAlert,
  Cpu,
  CheckCircle,
  Factory,
  Building2,
  GraduationCap,
  Stethoscope,
  Warehouse,
};

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 3);
  const latestArticles = blogPosts.slice(0, 3);

  return (
    <div className="bg-slate-50">
      {/* 1. HERO SECTION — Stone Security Inspired (Minimal, Confident, Dark-Accented) */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-20 md:py-28 lg:py-32 border-b border-slate-800">
        {/* Subtle grid pattern & focal lighting */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="h-4 w-4" />
              <span>Certified B2B Systems Integrator • Old Sangavi, Pune</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6">
              Engineering Mission-Critical Security, AV & Workplace Systems for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Pune Enterprises
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-9 max-w-2xl font-normal">
              From commercial IP video surveillance and NBC-compliant fire alarms to smart boardroom
              video conferencing, EPABX, biometric access, and 24/7 SLA maintenance. Engineered for
              factories, tech parks, hospitals, and institutions across Maharashtra.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/20 transition-all duration-200 active:scale-95"
              >
                <span>Request Project Quote</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=Hi%20Spaark%20Enterprises,%20I%20would%20like%20to%20consult%20an%20engineer%20regarding%20security%20and%20AV%20solutions%20for%20our%20facility.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Consult on WhatsApp</span>
              </a>

              <a
                href={`tel:${companyData.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/60 px-5 py-4 text-sm font-medium text-slate-300 hover:text-white transition"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                <span>Call {companyData.phone}</span>
              </a>
            </div>

            {/* Target Client Quick Tags */}
            <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Serving Pune's Core Industrial Belts:</span>
              <span>Chakan</span>
              <span>•</span>
              <span>Bhosari MIDC</span>
              <span>•</span>
              <span>Hinjawadi Infotech Park</span>
              <span>•</span>
              <span>Talegaon</span>
              <span>•</span>
              <span>Ranjangaon</span>
              <span>•</span>
              <span>PCMC</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS OF SUCCESS BAR — Safe House Pune Inspired (Confident, Static Presentation) */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="h-4 w-4" />
              <span>Metrics of Operational Success</span>
            </div>
            <span className="text-xs text-slate-400">
              Reliable low-voltage systems integration across Pune & Maharashtra
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
            {/* Stat 1 */}
            <div className="border-l-2 border-amber-500 pl-4">
              {/* PLACEHOLDER: replace with real figure */}
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">12+</div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide mt-1">
                Years in Business
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Continuous Pune Operations</div>
            </div>

            {/* Stat 2 */}
            <div className="border-l-2 border-amber-500 pl-4">
              {/* PLACEHOLDER: replace with real figure */}
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">650+</div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide mt-1">
                Projects Completed
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Factories, IT Parks & Schools</div>
            </div>

            {/* Stat 3 */}
            <div className="border-l-2 border-amber-500 pl-4">
              {/* PLACEHOLDER: replace with real figure */}
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">180+</div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide mt-1">
                Active AMC Contracts
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Guaranteed Preventive Care</div>
            </div>

            {/* Stat 4 */}
            <div className="border-l-2 border-amber-500 pl-4">
              {/* PLACEHOLDER: replace with real figure */}
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">2–4 Hrs</div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide mt-1">
                Breakdown SLA
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Rapid Mobile Pune Dispatch</div>
            </div>

            {/* Stat 5 */}
            <div className="border-l-2 border-amber-500 pl-4 col-span-2 md:col-span-1">
              {/* PLACEHOLDER: replace with real figure */}
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">97%</div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide mt-1">
                Client Retention
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Annual SLA Renewals</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE — Commercial Buyer Self-Identification */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Commercial Sectors
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Engineered for the Exact Demands of Your Facility
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every facility type has unique regulatory standards, environmental conditions, and user
              volumes. We design low-voltage infrastructure tailored to your sector's exact workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.industries.map((ind) => {
              const IconComp = iconMap[ind.icon] || Factory;
              return (
                <div
                  key={ind.id}
                  className="rounded-2xl border border-slate-200 p-6 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 text-slate-900 group-hover:bg-navy-900 group-hover:text-amber-400 transition flex items-center justify-center mb-4 shadow-sm">
                      <IconComp className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1">{ind.name}</h3>
                    <div className="text-xs font-semibold text-amber-600 mb-3">{ind.tagline}</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {ind.description}
                    </p>

                    <div className="pt-4 border-t border-slate-200/80">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Common System Deployments:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {ind.keySystems.map((sys, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{sys}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                    <a
                      href="/get-a-quote"
                      className="font-bold text-navy-900 group-hover:text-amber-600 flex items-center gap-1 transition"
                    >
                      <span>Request Sector Consultation</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Quick Consultation CTA Card */}
            <div className="rounded-2xl border-2 border-dashed border-amber-400/80 p-6 bg-amber-50/50 flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4 font-black">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  Multi-Facility Enterprise or Campus?
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
                  We conduct complete site walkthroughs across Pune and PCMC to audit your current
                  camera coverage, fire zones, acoustic clarity, and cable health with zero obligation.
                </p>
                <div className="text-xs text-slate-600 space-y-1 mb-4">
                  <div>✓ Comprehensive cable & sensor audit</div>
                  <div>✓ CAD blueprint coverage mapping</div>
                  <div>✓ Itemized BOM & SLA options</div>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition"
              >
                <span>Book On-Site Walkthrough</span>
                <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS-AS-CATEGORIES — Stone Security Inspired (4 Enterprise Pillars) */}
      <section className="py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Category-First Systems Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Our 4 Core Engineering Pillars
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Rather than selling isolated boxes, we integrate four interconnected building
              infrastructure disciplines into a unified command and control environment.
            </p>
          </div>

          <div className="space-y-12">
            {serviceCategories.map((cat, catIdx) => {
              const matchedServices = servicesData.filter((s) => cat.serviceSlugs.includes(s.slug));
              return (
                <div
                  key={cat.id}
                  className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                          Pillar 0{catIdx + 1}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500">{cat.tagline}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{cat.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                        {cat.shortDescription}
                      </p>
                    </div>

                    <a
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-amber-600 transition shrink-0"
                    >
                      <span>Explore Pillar Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {matchedServices.map((service) => {
                      const IconComp = iconMap[service.icon] || Camera;
                      return (
                        <div
                          key={service.id}
                          className="rounded-2xl border border-slate-200/80 p-5 sm:p-6 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300 transition flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 text-slate-900 group-hover:bg-navy-900 group-hover:text-amber-400 transition flex items-center justify-center shadow-xs">
                                <IconComp className="h-5 w-5" />
                              </div>
                              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                                {service.badge}
                              </span>
                            </div>

                            <h4 className="text-base font-bold text-slate-900 group-hover:text-navy-900 transition mb-2">
                              {service.navTitle}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                              {service.shortDescription}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-medium">Turnkey Installation</span>
                            <a
                              href={`/services/${service.slug}`}
                              className="font-bold text-navy-900 group-hover:text-amber-600 flex items-center gap-1 transition"
                            >
                              <span>View Specs & Quote</span>
                              <ArrowRight className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WORKPLACE AUTOMATION SYSTEMS (4 SOLUTIONS) */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Workplace Automation & Software
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              Digital Facility & Workforce Management Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Transform administrative friction. Replace manual registers and coupons with automated
              face-recognition attendance, contactless visitor registration, cashless canteen meals,
              and intelligent parking guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsData.map((sol) => {
              const IconComponent = iconMap[sol.icon] || Clock;
              return (
                <div
                  key={sol.id}
                  className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-2xl transition duration-300 group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-slate-950 text-amber-400 border border-slate-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                      {sol.badge}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition mb-2">
                      {sol.navTitle}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {sol.shortDescription}
                    </p>
                  </div>

                  <a
                    href={`/solutions/${sol.slug}`}
                    className="pt-3 border-t border-slate-800 text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. USP GRID — 6 Scannable Cards (Not Paragraphs) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Why Spaark Enterprises
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Engineering Disciplines That Set Us Apart
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Unlike generic retail hardware sellers, we are low-voltage systems engineers accountable
              from initial architectural CAD design through long-term 24/7 SLA maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.uspGrid.map((usp, idx) => {
              const IconComp = iconMap[usp.icon] || Award;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-slate-300 hover:bg-white transition duration-200"
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

      {/* 7. GOOGLE REVIEWS EMBED SECTION — One Firefly Inspired (Verified Third-Party Trust) */}
      <section className="py-16 bg-navy-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Score Block */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <Star className="h-3.5 w-3.5 fill-amber-400" />
                  <span>Google Verified Customer Trust</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    {companyData.googleReviewSummary.rating}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="text-xs font-semibold text-slate-300">
                      Based on {companyData.googleReviewSummary.reviewCount} Verified Client Reviews
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 max-w-md">
                  Real client ratings from Pune facility managers, IT directors, and plant heads who
                  rely on our emergency support and preventive maintenance.
                </p>
              </div>

              {/* Center / Right: Widget Embed Placement Zone */}
              <div className="w-full lg:w-1/2 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 text-center">
                {/* PLACEHOLDER: Google Reviews Widget Embed Slot */}
                {/* Replace this placeholder container with an official Google Reviews widget script/iframe (e.g., Elfsight / Google Places API) */}
                <div className="border-2 border-dashed border-slate-700 rounded-xl p-5 mb-4">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    Google Reviews Widget Placeholder
                  </div>
                  <p className="text-[11px] text-slate-400 mb-3">
                    Google Place ID:{" "}
                    <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">
                      {companyData.googleReviewSummary.placeId}
                    </code>
                  </p>
                  <p className="text-xs italic text-slate-300">
                    &ldquo;Spaark Enterprises installed 48 IP cameras and an addressable fire panel at
                    our Bhosari facility. Flawless execution and prompt AMC service.&rdquo;
                  </p>
                  <div className="text-[10px] text-slate-500 mt-2">
                    Verified Google Review • Pune Industrial Client
                  </div>
                </div>

                <a
                  href={companyData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
                >
                  <span>View All Google Reviews</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BRAND PARTNERS LOGO WALL */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Enterprise OEM Ecosystem
            </span>
            <p className="text-xs text-slate-600 mt-0.5">
              We source, configure, and maintain tier-1 manufacturer hardware
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {companyData.brandPartners.map((bp, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-center hover:border-slate-300 hover:bg-white transition"
              >
                {/* PLACEHOLDER: replace with authorized OEM badge image */}
                <div className="font-bold text-sm text-slate-900 tracking-tight">{bp.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 truncate">{bp.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURED CASE STUDIES (PROBLEM → SOLUTION → OUTCOME) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Featured Engineering Deployments
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                In-depth Problem → Solution → Outcome engineering case studies across Maharashtra.
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-amber-600 transition"
            >
              <span>View All Projects & Gallery</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              What Facility & IT Leaders Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Hear directly from plant heads, facility managers, and school administrators who depend
              on Spaark for their security and audiovisual operations.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 11. BLOG TEASER */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Knowledge Base & Best Practices
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Security, Fire Safety & AV Insights
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Practical guides on NBC compliance, camera storage formulas, and phone system TCO.
              </p>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-amber-600 transition"
            >
              <span>Browse All Articles</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL QUOTE FORM SECTION */}
      <section id="quote-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm isCompact={false} />
        </div>
      </section>
    </div>
  );
}
