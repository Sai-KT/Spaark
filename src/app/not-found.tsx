import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
        <div className="h-16 w-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="h-8 w-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
          404 Error
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed">
          The security or AV engineering page you are looking for may have moved, been renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition shadow"
          >
            <Home className="h-4 w-4 text-amber-400" />
            <span>Return Home</span>
          </a>
          <a
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition"
          >
            <span>View Services</span>
          </a>
        </div>
      </div>
    </div>
  );
}
