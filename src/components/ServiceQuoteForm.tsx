"use client";

import { useState } from "react";
import { CheckCircle2, Send, AlertCircle, ShieldCheck } from "lucide-react";

interface ServiceQuoteFormProps {
  serviceTitle: string;
  questionLabel: string;
  options: string[];
}

export default function ServiceQuoteForm({
  serviceTitle,
  questionLabel,
  options,
}: ServiceQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    selectedOption: options[0] || "",
    facilityType: "Commercial Office",
    location: "Pune / PCMC",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!formData.name || !formData.phone || !formData.company) {
      setStatus("error");
      setErrorMessage("Please enter your name, company name, and contact phone number.");
      return;
    }

    try {
      /* NOTE: Backend integration point:
         In production, connect to an email service or CRM webhook.
         Logging parameters to console. */
      console.log(`=== SERVICE QUOTE: ${serviceTitle} ===`, formData);

      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Error submitting request. Please reach us via WhatsApp or Phone.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-emerald-950 border border-emerald-800 p-8 text-center text-white shadow-xl">
        <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
        <h3 className="text-xl font-bold">Inquiry Received for {serviceTitle}!</h3>
        <p className="mt-2 text-sm text-emerald-200 max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. A technical systems consultant from our Pune
          office will connect with you within 2 hours to provide technical specs and pricing.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl">
      <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
        <ShieldCheck className="h-4 w-4" />
        <span>Direct Consultation & Estimate</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
        Get an Estimate for {serviceTitle}
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
        Free on-site engineering surveys available across Pune, Chakan, Hinjawadi, and PCMC.
      </p>

      {status === "error" && (
        <div className="mb-4 p-3 rounded-lg bg-rose-950 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service-Specific Question / Scope Option */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            {questionLabel} <span className="text-amber-400">*</span>
          </label>
          <select
            value={formData.selectedOption}
            onChange={(e) => setFormData({ ...formData, selectedOption: e.target.value })}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            {options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Your Name <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vikram Patil"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Company / Facility Name <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mahavir Auto Works"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Mobile / WhatsApp <span className="text-amber-400">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98220 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Work Email
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Facility Location */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Facility Location in Pune (Area / MIDC)
          </label>
          <input
            type="text"
            placeholder="e.g. Bhosari MIDC, or Hinjawadi Phase 2, or Hadapsar"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Additional Specifications / Scope Notes
          </label>
          <textarea
            rows={2}
            placeholder="Specify any preferred equipment brands, target timeline, or site access details..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/20 transition active:scale-95 disabled:opacity-50 mt-2"
        >
          {status === "submitting" ? (
            <span>Processing Estimate...</span>
          ) : (
            <>
              <span>Request {serviceTitle} Quote</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
