"use client";

import { useState } from "react";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceInterested: "CCTV & Video Surveillance",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!formData.fullName || !formData.phone) {
      setStatus("error");
      setErrorMessage("Please provide your full name and phone number.");
      return;
    }

    try {
      /* NOTE: Backend integration point:
         In production, connect to an email service or CRM webhook.
         Logging parameters to console. */
      console.log("=== CONTACT FORM SUBMISSION ===", formData);

      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Could not submit form. Please call our Pune office directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center text-emerald-900 shadow-md animate-in fade-in zoom-in-95 duration-200">
        <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-emerald-950">Thank You for Reaching Out!</h3>
        <p className="mt-2 text-sm text-emerald-800 max-w-md mx-auto">
          We have received your message, <strong>{formData.fullName}</strong>. A representative from
          our Old Sangavi office will call or message you shortly.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              companyName: "",
              serviceInterested: "CCTV & Video Surveillance",
              message: "",
            });
          }}
          className="mt-5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-200"
    >
      <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
        Send Us a Message
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 mb-6">
        Fill out this form and our technical engineering team in Pune will get back to you within 2 to 4 hours.
      </p>

      {status === "error" && (
        <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Anand Kulkarni"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1">
              Mobile / Phone <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98220 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="anand@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Company / Organization
          </label>
          <input
            type="text"
            placeholder="e.g. Kulkarni Engineering Works"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Service or Solution of Interest
          </label>
          <select
            value={formData.serviceInterested}
            onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <option value="CCTV & Video Surveillance">CCTV & Video Surveillance</option>
            <option value="Fire Alarm Systems">Fire Alarm Systems & Form B Compliance</option>
            <option value="Projectors & Interactive Panels">Projectors & Interactive Panels</option>
            <option value="Video Conferencing Solutions">Video Conferencing Solutions</option>
            <option value="EPABX & Telephone Systems">EPABX & Telephone Systems</option>
            <option value="Public Address (PA) Systems">Public Address (PA) Systems</option>
            <option value="Access Control & Biometrics">Access Control & Biometrics</option>
            <option value="Time & Attendance System">Time & Attendance System</option>
            <option value="Visitor Management System">Visitor Management System</option>
            <option value="Canteen Management System">Canteen Management System</option>
            <option value="Parking Guidance System">Parking Guidance System</option>
            <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
            <option value="Other Technical Inquiry">Other Technical Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            How Can We Help? (Message / Details)
          </label>
          <textarea
            rows={4}
            placeholder="Briefly describe your site location in Pune, current setup, or scope of requirement..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 hover:bg-navy-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow transition active:scale-95 disabled:opacity-50"
        >
          {status === "submitting" ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="h-4 w-4 text-amber-400" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
