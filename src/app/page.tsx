import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
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
};

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 3);
  const latestArticles = blogPosts.slice(0, 3);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 md:py-24 lg:py-28 border-b border-slate-800">
        {/* Subtle grid background & ambient lighting */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="h-4 w-4" />
              <span>B2B Systems Integrator • Old Sangavi, Pune</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              Mission-Critical Security, AV & Workplace Infrastructure for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Pune Enterprises
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              We design, install, and maintain commercial CCTV surveillance, certified fire alarms,
              smart boardroom AV, EPABX, public address, access control, and automated workplace
              systems for factories, corporate offices, institutions, and schools across Maharashtra.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/25 transition active:scale-95"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=Hi%20Spaark%20Enterprises,%20I'd%20like%20to%20consult%20on%20security%20and%20AV%20solutions%20for%20our%20facility.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-4 text-sm font-semibold text-white shadow-lg transition active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${companyData.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 hover:border-slate-500 px-5 py-4 text-sm font-medium text-slate-300 hover:text-white transition"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                <span>Call {companyData.phone}</span>
              </a>
            </div>

            {/* Target Client Tags */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Serving Pune's Key Sectors:</span>
              <span>• Manufacturing & Engineering Plants</span>
              <span>• Corporate IT Parks</span>
              <span>• Schools & Universities</span>
              <span>• Warehouses & Logistics</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS BAR */}
      <section className="bg-navy-900 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {companyData.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left border-l-2 border-amber-500 pl-4 sm:pl-5">
                {/* PLACEHOLDER: replace with real figure */}
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLIENT LOGO WALL */}
      <ClientLogoStrip />

      {/* 4. SERVICES OVERVIEW (7 CORE SERVICES) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Core Technical Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              End-to-End Electronic Security & Audiovisual Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From structured cabling and hardware provisioning to software integration and 24/7 AMC
              maintenance, we provide turnkey systems tailored for commercial buildings across Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon] || Camera;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-slate-200 p-6 sm:p-7 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-amber-400 transition flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-navy-900 transition mb-2">
                      {service.navTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Pune & PCMC</span>
                    <a
                      href={`/services/${service.slug}`}
                      className="font-bold text-navy-900 group-hover:text-amber-600 flex items-center gap-1 transition"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Quick Link Card for AMC Services */}
            <div className="rounded-2xl border-2 border-dashed border-amber-400/80 p-6 sm:p-7 bg-amber-50/40 hover:bg-amber-50 transition flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4 font-black">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  Annual Maintenance Contracts (AMC)
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  Protect your systems with guaranteed 2–4 hour breakdown response SLAs, quarterly
                  preventive tune-ups, spare parts coverage, and statutory Form-B compliance.
                </p>
              </div>
              <a
                href="/amc-service"
                className="inline-flex items-center gap-1 font-bold text-xs uppercase tracking-wider text-slate-950 hover:text-amber-700"
              >
                <span>Explore AMC Plans & SLAs</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS OVERVIEW (4 WORKPLACE SOLUTIONS) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Workplace Automation & Software
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              Digital Workplace & Facility Management Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Transform administrative workflows. Replace outdated paper registers and manual coupons
              with automated biometric attendance, digital visitor kiosks, contactless canteen tokens,
              and intelligent parking guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsData.map((sol) => {
              const IconComponent = iconMap[sol.icon] || Clock;
              return (
                <div
                  key={sol.id}
                  className="rounded-2xl bg-slate-800/90 border border-slate-700 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-2xl transition duration-300 group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-navy-900 text-amber-400 border border-slate-700 flex items-center justify-center mb-4">
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
                    className="pt-3 border-t border-slate-700/80 text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center justify-between"
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

      {/* 6. WHY SPAARK ENTERPRISES (DIFFERENTIATORS) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              The Spaark Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Why Pune's Leading Facilities Choose Spaark
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Unlike generic retail box-sellers, we are specialized engineering systems integrators
              accountable from initial conduit design through long-term SLA maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.trustPoints.map((point, index) => {
              const icons = [ShieldCheck, Clock, Layers, Wrench];
              const IconComp = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="h-11 w-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4">
                    <IconComp className="h-5 w-5 text-navy-800" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS / CASE STUDIES */}
      <section className="py-20 bg-white">
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
                Real-world problem, solution, and outcome case studies across Maharashtra.
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-amber-600"
            >
              <span>View All Projects & Case Studies</span>
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

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              What Our Enterprise Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Hear directly from facility managers, plant heads, and academic directors who depend on
              Spaark for their security and audiovisual operations.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 9. BLOG TEASER (LATEST ARTICLES) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Knowledge Base & Best Practices
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Latest Security & AV Technical Insights
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                In-depth buyer's guides, regulatory compliance tips, and infrastructure comparisons.
              </p>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-amber-600"
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

      {/* 10. FINAL QUOTE FORM SECTION */}
      <section id="quote-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm isCompact={false} />
        </div>
      </section>
    </div>
  );
}
