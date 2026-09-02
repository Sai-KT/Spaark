"use client";

import { useState } from "react";
import { testimonialsData, TestimonialItem } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote, Building } from "lucide-react";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Quote className="h-10 w-10 text-amber-400 opacity-80" />
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Client Feedback
            </span>
          </div>

          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Quote text */}
        <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed min-h-[120px]">
          "{current.quote}"
        </blockquote>

        {/* Author / Designation */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            {/* PLACEHOLDER: replace with real client name and designation */}
            <div className="text-base font-bold text-white flex items-center gap-2">
              <span>{current.author}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                {current.serviceCategory}
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
              <Building className="h-3.5 w-3.5 text-slate-500" />
              <span>
                {current.designation}, {current.companyPlaceholder} ({current.location})
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs text-slate-400 px-2 font-mono">
              {currentIndex + 1} / {testimonialsData.length}
            </span>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
