import { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { companyData } from "@/data/company";
import { ShieldCheck, Phone, Clock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Project Quote & Site Survey | Spaark Enterprises Pune",
  description:
    "Request a free, itemized quotation and on-site engineering survey for commercial CCTV, fire alarm, EPABX, or AV systems across Pune and PCMC.",
};

export default function GetAQuotePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-700" />
            <span>Fast Turnaround • Zero-Obligation Estimation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Request an Official Project Quote
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Fill out your technical requirements below. Our Pune systems engineering team will review
            your parameters and provide an itemized Bill of Materials (BOM) within 24 hours.
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-xs">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Free On-Site Survey</span>
              <span className="text-slate-500">Available across Pune & PCMC</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Itemized BOM Estimates</span>
              <span className="text-slate-500">Transparent hardware & cable pricing</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">2-Hour Sales Response</span>
              <span className="text-slate-500">Direct senior engineer review</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="mb-14">
          <QuoteForm isCompact={false} />
        </div>

        {/* Urgent Inquiry Phone Bar */}
        <div className="max-w-xl mx-auto text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs text-slate-600">
          <span className="font-bold text-slate-900 block mb-1">Have an urgent requirement or emergency breakdown?</span>
          <p className="mb-3">
            Call our Old Sangavi desk directly for immediate technical dispatch:
          </p>
          <a
            href={`tel:${companyData.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-amber-400 font-bold text-sm transition"
          >
            <Phone className="h-4 w-4" />
            <span>{companyData.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
