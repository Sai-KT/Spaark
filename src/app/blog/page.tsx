import { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "@/components/BlogCard";
import { BookOpen, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & AV Technical Blog & Buyer's Guides | Spaark Enterprises",
  description:
    "Expert technical articles, buyer's guides, and compliance resources for CCTV surveillance, fire alarm regulations, EPABX, and workplace automation in Pune.",
};

export default function BlogHubPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-3">
              Knowledge Base & Engineering Guides
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              B2B Security, Telephony & Facility Technology Resources
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our comprehensive guides on calculating CCTV camera requirements, understanding
              Maharashtra Form-B fire safety compliance, comparing EPABX vs cloud phone systems, and
              streamlining office visitor operations.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Consultation CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Need Expert Advice for Your Upcoming Facility Project?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Speak directly with our senior systems architects in Pune. We provide tailored technical
            guidance and itemized bills of materials.
          </p>
          <a
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg transition"
          >
            <span>Request Free Technical Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
