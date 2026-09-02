"use client";

import { useState } from "react";
import { servicesData } from "@/data/services";
import { solutionsData } from "@/data/solutions";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

interface QuoteFormProps {
  defaultService?: string;
  isCompact?: boolean;
}

export default function QuoteForm({ defaultService = "", isCompact = false }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    facilityType: "Corporate Office",
    serviceInterested: defaultService || "CCTV & Video Surveillance",
    scale: "10 – 30 Endpoints / Standard Setup",
    timeline: "Within 2 Weeks (Immediate)",
    location: "Pune / PCMC",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Basic validation
    if (!formData.name || !formData.phone || !formData.company) {
      setStatus("error");
      setErrorMessage("Please fill in your name, company name, and contact phone number.");
      return;
    }

    try {
      /* NOTE: Backend integration point:
         In production, POST to an API route (e.g., /api/quote) or email service (Resend, Nodemailer, Webhook).
         Currently logging formData to console for developer inspection. */
      console.log("=== SPAARK ENTERPRISES QUOTE SUBMISSION ===", formData);

      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong while submitting. Please call our Pune office directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center text-emerald-900 shadow-md animate-in fade-in zoom-in-95 duration-200">
        <CheckCircle2 className="h-14 w-14 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-emerald-950">Quote Request Received!</h3>
        <p className="mt-2 text-sm text-emerald-800 max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Our systems engineer will review your{" "}
          <strong>{formData.serviceInterested}</strong> requirements for{" "}
          <strong>{formData.company}</strong> and contact you within 2 business hours.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                company: "",
                phone: "",
                email: "",
                facilityType: "Corporate Office",
                serviceInterested: defaultService || "CCTV & Video Surveillance",
                scale: "10 – 30 Endpoints / Standard Setup",
                timeline: "Within 2 Weeks (Immediate)",
                location: "Pune / PCMC",
                notes: "",
              });
            }}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 transition"
          >
            Submit Another Inquiry
          </button>
          <a
            href="https://wa.me/919822012345?text=Hi%20Spaark%20Enterprises,%20I%20just%20submitted%20a%20quote%20request%20online."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Follow Up via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-200 ${
        isCompact ? "max-w-xl" : "max-w-3xl"
      } mx-auto`}
    >
      <div className="mb-6">
        <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block">
          Direct B2B Pricing & Site Survey
        </span>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
          Request a Custom Project Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Provide your project parameters below. We provide itemized quotations and free site audits across Pune & PCMC.
        </p>
      </div>

      {status === "error" && (
        <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        {/* Contact Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Your Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Deshmukh"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Company / Organization Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Apex Precision Tools Pvt Ltd"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Contact Phone / Mobile <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 98220 00000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Official Email Address
          </label>
          <input
            type="email"
            placeholder="e.g. rahul@apexprecision.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Primary Service Interested In */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Primary Service / Solution Needed
          </label>
          <select
            value={formData.serviceInterested}
            onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <optgroup label="Core Systems & Services">
              {servicesData.map((s) => (
                <option key={s.id} value={s.navTitle}>
                  {s.navTitle}
                </option>
              ))}
              <option value="Annual Maintenance Contract (AMC)">
                Annual Maintenance Contract (AMC)
              </option>
            </optgroup>
            <optgroup label="Workplace & Automation Solutions">
              {solutionsData.map((sol) => (
                <option key={sol.id} value={sol.navTitle}>
                  {sol.navTitle}
                </option>
              ))}
            </optgroup>
            <option value="Complete Turnkey ELV / IT Package">
              Complete Turnkey ELV / IT Package
            </option>
          </select>
        </div>

        {/* Facility Type */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Facility / Building Type
          </label>
          <select
            value={formData.facilityType}
            onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <option value="Manufacturing Plant / Factory Shed">
              Manufacturing Plant / Factory Shed
            </option>
            <option value="Corporate Office / IT Park">Corporate Office / IT Park</option>
            <option value="School / College / Educational Campus">
              School / College / Educational Campus
            </option>
            <option value="Warehouse / Logistics Center">Warehouse / Logistics Center</option>
            <option value="Hospital / Healthcare Facility">Hospital / Healthcare Facility</option>
            <option value="Commercial Mall / Retail Complex">
              Commercial Mall / Retail Complex
            </option>
            <option value="Residential Housing Society">Residential Housing Society</option>
          </select>
        </div>

        {/* Estimated Scale */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Estimated Scope / Quantity
          </label>
          <select
            value={formData.scale}
            onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <option value="Small Setup (1–8 Cameras / Doors / Extensions)">
              Small Setup (1–8 Cameras / Doors / Extensions)
            </option>
            <option value="Medium Setup (9–24 Endpoints / 1–2 Floors)">
              Medium Setup (9–24 Endpoints / 1–2 Floors)
            </option>
            <option value="Large Enterprise (25–64 Endpoints / Multi-Shed)">
              Large Enterprise (25–64 Endpoints / Multi-Shed)
            </option>
            <option value="Campus Scale (65+ Endpoints / Campus-Wide)">
              Campus Scale (65+ Endpoints / Campus-Wide)
            </option>
            <option value="AMC / Annual Maintenance Contract for Existing Setup">
              AMC / Annual Maintenance Contract for Existing Setup
            </option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Implementation Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <option value="Within 2 Weeks (Immediate Requirement)">
              Within 2 Weeks (Immediate Requirement)
            </option>
            <option value="1 Month (Project in Planning)">1 Month (Project in Planning)</option>
            <option value="2–3 Months (New Site Construction)">
              2–3 Months (New Site Construction)
            </option>
            <option value="Budgeting & Exploratory Phase">Budgeting & Exploratory Phase</option>
          </select>
        </div>

        {/* Facility Location in Pune */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Facility Location in Pune / Maharashtra
          </label>
          <input
            type="text"
            placeholder="e.g. Chakan MIDC Phase 2, or Hinjawadi Phase 1, or Bhosari"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Additional Project Details */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Project Details / Specific Technical Requirements
          </label>
          <textarea
            rows={3}
            placeholder="Mention any specific brands, number of doors/rooms, ceiling height, or integration requirements..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div className="text-[11px] text-slate-500 text-left">
          🔒 Your information is confidential. Never shared with third parties.
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-7 py-3 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-md shadow-amber-500/25 hover:shadow-lg transition active:scale-95 disabled:opacity-50"
        >
          {status === "submitting" ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Submit Quote Request</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
