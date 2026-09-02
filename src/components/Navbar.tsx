"use client";

import Link from "next/navigation";
import { useState } from "react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { solutionsData } from "@/data/solutions";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  Shield,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-200">
      {/* Top Bar for Desktop & Tablet */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-amber-500" />
              <span>Old Sangavi, Pune, Maharashtra 411027</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5 text-amber-500" />
              <span>Mon–Sat: 9:00 AM – 7:30 PM (24/7 AMC Breakdown)</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
            >
              <Mail className="h-3.5 w-3.5 text-amber-500" />
              <span>{companyData.email}</span>
            </a>
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="flex items-center gap-1.5 text-amber-400 font-semibold hover:text-amber-300 transition"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{companyData.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-amber-400 shadow-md group-hover:bg-navy-800 transition">
              <Shield className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-navy-900 block leading-tight">
                SPAARK
                <span className="text-amber-500 ml-1">ENTERPRISES</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase block">
                Security • AV • Workplace Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            <a
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown className="h-4 w-4 text-slate-500 transition-transform duration-200" />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-xl bg-white p-3 shadow-xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                    Integrated Security & AV Services
                  </div>
                  <div className="mt-1 space-y-1">
                    {servicesData.map((s) => (
                      <a
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-navy-900 transition"
                      >
                        <span className="font-semibold block text-slate-900 text-xs">
                          {s.navTitle}
                        </span>
                        <span className="text-[11px] text-slate-500 block truncate">
                          {s.badge}
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                    <a
                      href="/services"
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center justify-between"
                    >
                      <span>View All 7 Services Overview</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
              >
                Solutions
                <ChevronDown className="h-4 w-4 text-slate-500 transition-transform duration-200" />
              </button>

              {solutionsOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-xl bg-white p-3 shadow-xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                    Digital Workplace & Facility Automation
                  </div>
                  <div className="mt-1 space-y-1">
                    {solutionsData.map((sol) => (
                      <a
                        key={sol.id}
                        href={`/solutions/${sol.slug}`}
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-navy-900 transition"
                      >
                        <span className="font-semibold block text-slate-900 text-xs">
                          {sol.navTitle}
                        </span>
                        <span className="text-[11px] text-slate-500 block truncate">
                          {sol.badge}
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                    <a
                      href="/solutions"
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center justify-between"
                    >
                      <span>View All Solutions Overview</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/amc-service"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
            >
              AMC
            </a>
            <a
              href="/projects"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
            >
              Projects
            </a>
            <a
              href="/testimonials"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
            >
              Clients
            </a>
            <a
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
            >
              Blog
            </a>
            <a
              href="/about"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
            >
              About
            </a>
            <a
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition"
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs (Call + Get Quote) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="hidden md:flex items-center gap-2 text-xs font-bold text-navy-900 border border-slate-300 hover:border-slate-400 py-2.5 px-3.5 rounded-lg transition"
            >
              <Phone className="h-4 w-4 text-amber-500" />
              <span>{companyData.phone}</span>
            </a>

            <a
              href="/get-a-quote"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-lg transition active:scale-95"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center space-x-2">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="p-2 text-navy-900 border border-slate-200 rounded-lg"
              aria-label="Call Spaark Enterprises"
            >
              <Phone className="h-5 w-5 text-amber-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 py-2">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Home
            </a>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
              >
                <span>Services (7)</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg mt-1">
                  {servicesData.map((s) => (
                    <a
                      key={s.id}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-700 hover:text-navy-900 font-medium"
                    >
                      {s.navTitle}
                    </a>
                  ))}
                  <a
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold text-amber-600"
                  >
                    View All Services Overview →
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
              >
                <span>Workplace Solutions (4)</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg mt-1">
                  {solutionsData.map((sol) => (
                    <a
                      key={sol.id}
                      href={`/solutions/${sol.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-700 hover:text-navy-900 font-medium"
                    >
                      {sol.navTitle}
                    </a>
                  ))}
                  <a
                    href="/solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold text-amber-600"
                  >
                    View All Solutions Overview →
                  </a>
                </div>
              )}
            </div>

            <a
              href="/amc-service"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              AMC Services
            </a>
            <a
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Projects & Case Studies
            </a>
            <a
              href="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Testimonials & Clients
            </a>
            <a
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Blog / Tech Resources
            </a>
            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              About Us
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
            <a
              href="/get-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold uppercase tracking-wider text-sm shadow"
            >
              Request a Free Quote
            </a>
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-slate-300 text-slate-800 font-semibold text-sm"
            >
              <Phone className="h-4 w-4 text-amber-600" />
              <span>Call Pune Office: {companyData.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
