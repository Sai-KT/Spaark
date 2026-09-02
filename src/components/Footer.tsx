import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { solutionsData } from "@/data/solutions";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-Footer Action Banner */}
      <div className="bg-navy-900 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-1">
                Fast Turnaround in Pune & PCMC
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Need a site survey or formal B2B project quote?
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                Our Old Sangavi engineering team conducts comprehensive site audits for offices, factories, and schools across Maharashtra.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href="/get-a-quote"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition"
              >
                Request Free Quote
              </a>
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="w-full sm:w-auto text-center px-5 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition"
              >
                Call: {companyData.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-amber-400 border border-slate-700">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                SPAARK <span className="text-amber-500">ENTERPRISES</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              {companyData.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {companyData.address.street}, {companyData.address.locality},{" "}
                  {companyData.address.city}, {companyData.address.state}{" "}
                  {companyData.address.pincode}, India. (Landmark: {companyData.address.landmark})
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="hover:text-amber-400 transition"
                >
                  {companyData.phone} (General / Sales)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-amber-400 transition"
                >
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{companyData.businessHours.days}: {companyData.businessHours.hours}</span>
              </div>
            </div>

            {/* Social Placeholder Links */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3 text-xs">
                {/* PLACEHOLDER: replace with real social URLs */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                >
                  LinkedIn
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                >
                  Facebook
                </a>
                <a
                  href={`https://wa.me/${companyData.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-800/60"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Security & AV Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center justify-between">
              <span>Services (7)</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a
                    href={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5"
                  >
                    <ArrowRight className="h-3 w-3 text-slate-600" />
                    <span>{s.navTitle}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/services"
                  className="text-amber-400 hover:text-amber-300 font-semibold text-xs inline-block"
                >
                  View All Services Overview →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Workplace Solutions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Solutions (4)
            </h4>
            <ul className="space-y-2 text-xs">
              {solutionsData.map((sol) => (
                <li key={sol.id}>
                  <a
                    href={`/solutions/${sol.slug}`}
                    className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5"
                  >
                    <ArrowRight className="h-3 w-3 text-slate-600" />
                    <span>{sol.navTitle}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/solutions"
                  className="text-amber-400 hover:text-amber-300 font-semibold text-xs inline-block"
                >
                  View All Solutions Overview →
                </a>
              </li>
            </ul>

            <h4 className="text-sm font-bold uppercase tracking-wider text-white mt-6 mb-3">
              Maintenance (AMC)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/amc-service"
                  className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="h-3 w-3 text-slate-600" />
                  <span>Annual Maintenance Contracts</span>
                </a>
              </li>
              <li>
                <a
                  href="/amc-service#faq"
                  className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="h-3 w-3 text-slate-600" />
                  <span>AMC SLAs & Response Times</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/about" className="text-slate-400 hover:text-white transition">
                  About Spaark Enterprises
                </a>
              </li>
              <li>
                <a href="/projects" className="text-slate-400 hover:text-white transition">
                  Projects & Case Studies
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-slate-400 hover:text-white transition">
                  Clients & Testimonials
                </a>
              </li>
              <li>
                <a href="/blog" className="text-slate-400 hover:text-white transition">
                  Blog & Resource Guides
                </a>
              </li>
              <li>
                <a href="/get-a-quote" className="text-slate-400 hover:text-white transition">
                  Request Official Quote
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  Contact Pune Office
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <a
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-amber-400 transition block py-0.5"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-slate-400 hover:text-amber-400 transition block py-0.5"
                >
                  Terms of Service
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1">
                Primary Industrial Service Hubs
              </span>
              <span>Chakan • Bhosari • Hinjawadi • Talegaon • Hadapsar • Ranjangaon • PCMC</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Spaark Enterprises. All rights reserved. Registered Systems Integrator, Old Sangavi, Pune, India.
          </p>
          <div className="flex items-center space-x-6">
            <a href="/privacy-policy" className="hover:text-slate-400 transition">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-slate-400 transition">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-slate-400 transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
