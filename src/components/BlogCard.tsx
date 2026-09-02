import { BlogPost } from "@/data/blog-posts";
import { Clock, ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Category & Read Time */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span className="font-semibold text-amber-600 uppercase tracking-wider text-[11px] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-navy-900 transition leading-snug mb-2.5">
          <a href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">
          {post.excerpt}
        </p>
      </div>

      {/* Footer / Read More Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-400 flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          <span>{post.publishedDate}</span>
        </span>

        <a
          href={`/blog/${post.slug}`}
          className="font-bold text-navy-900 hover:text-amber-600 flex items-center gap-1 transition"
        >
          <span>Read Guide</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
