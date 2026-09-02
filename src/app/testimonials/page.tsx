import { Metadata } from "next";
import { testimonialsData, clientLogosPlaceholder } from "@/data/testimonials";
import ClientLogoStrip from "@/components/ClientLogoStrip";
import { Star, Building, Quote, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials & Enterprise Reviews | Spaark Enterprises Pune",
  description:
    "Read real client reviews from facility managers, plant heads, and academic directors across Pune who rely on Spaark Enterprises for their CCTV, AV, and life safety infrastructure.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-3">
              Client Feedback & Partnerships
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Trusted by Facility Leaders Across Pune & Western Maharashtra
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We take pride in building multi-year partnerships. Discover how our engineering precision,
              punctual installation, and rapid AMC support help organizations achieve seamless physical
              security and operational continuity.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Strip */}
      <ClientLogoStrip />

      {/* Full Testimonials Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Verified Feedback
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              What Our Clients Say About Working With Spaark
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {t.serviceCategory}
                    </span>
                  </div>

                  <blockquote className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  {/* PLACEHOLDER: client author and company */}
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {t.designation}
                  </div>
                  <div className="text-xs text-amber-700 font-medium mt-1 flex items-center gap-1">
                    <Building className="h-3.5 w-3.5 text-slate-400" />
                    <span>
                      {t.companyPlaceholder} ({t.location})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Review Badge Widget Simulation */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center font-black text-xl text-blue-600">
                G
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-900 font-black text-sm ml-2">4.9 / 5.0</span>
                </div>
                <div className="text-xs text-slate-600">
                  {/* PLACEHOLDER: Google Reviews count */}
                  Based on 85+ verified client reviews on Google Business for Spaark Enterprises Pune.
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Spaark+Enterprises/@18.5730856,73.82431,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b8c6172b9513:0x8f20afb32ca78581!8m2!3d18.5730856!4d73.8268903!16s%2Fg%2F11cks6m6vr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-bold transition shadow-sm"
            >
              Review Us on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Experience the Spaark Standard of Engineering
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Contact us today for a free on-site physical security audit or turnkey AV consultation in
            Pune, PCMC, or neighboring MIDCs.
          </p>
          <a
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg transition"
          >
            <span>Request a Site Survey</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
