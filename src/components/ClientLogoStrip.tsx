import { clientLogosPlaceholder } from "@/data/testimonials";
import { Building2 } from "lucide-react";

export default function ClientLogoStrip() {
  return (
    <div className="py-8 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
          {/* PLACEHOLDER: client logos and sector portfolio */}
          Trusted by Commercial Facilities, Factories & Institutions Across Pune & PCMC
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {clientLogosPlaceholder.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center hover:border-slate-300 transition"
            >
              <div className="h-8 w-8 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center mb-1.5">
                <Building2 className="h-4 w-4 text-slate-600" />
              </div>
              {/* PLACEHOLDER: replace with real client name/logo */}
              <span className="text-xs font-bold text-slate-800 line-clamp-1">
                {client.name}
              </span>
              <span className="text-[10px] text-slate-500 line-clamp-1">
                {client.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
