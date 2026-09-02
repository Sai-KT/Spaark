import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "@/data/blog-posts";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ChevronRight,
  Share2,
  BookmarkCheck,
  ShieldCheck,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found | Spaark Enterprises",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Simple Markdown-to-HTML parser for headers, tables, lists, and links
  const renderFormattedContent = (content: string) => {
    // Split by lines to parse blocks cleanly
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let tableRows: string[] = [];
    let inTable = false;

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table parsing
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        inTable = true;
        tableRows.push(trimmed);
        return;
      } else if (inTable) {
        // Render accumulated table
        const tableJsx = renderTable(tableRows, index);
        elements.push(tableJsx);
        tableRows = [];
        inTable = false;
      }

      if (!trimmed) {
        return;
      }

      // H3
      if (trimmed.startsWith("### ")) {
        elements.push(
          <h3
            key={index}
            className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3 pt-4 border-t border-slate-100"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
        return;
      }

      // H4
      if (trimmed.startsWith("#### ")) {
        elements.push(
          <h4 key={index} className="text-lg font-bold text-slate-900 mt-6 mb-2">
            {trimmed.replace("#### ", "")}
          </h4>
        );
        return;
      }

      // HR
      if (trimmed === "---") {
        elements.push(<hr key={index} className="my-8 border-slate-200" />);
        return;
      }

      // Unordered List item
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const itemText = trimmed.replace(/^(\*|-)\s+/, "");
        elements.push(
          <li key={index} className="ml-5 list-disc text-sm text-slate-700 my-1 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(itemText) }} />
          </li>
        );
        return;
      }

      // Numbered List item
      if (/^\d+\.\s+/.test(trimmed)) {
        const itemText = trimmed.replace(/^\d+\.\s+/, "");
        elements.push(
          <li key={index} className="ml-5 list-decimal text-sm text-slate-700 my-1.5 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(itemText) }} />
          </li>
        );
        return;
      }

      // Blockquote
      if (trimmed.startsWith("> ")) {
        const quoteText = trimmed.replace(/^>\s+/, "");
        elements.push(
          <blockquote
            key={index}
            className="border-l-4 border-amber-500 bg-amber-50/60 p-4 my-4 rounded-r-xl text-sm italic text-slate-800"
            dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(quoteText) }}
          />
        );
        return;
      }

      // Standard Paragraph
      elements.push(
        <p
          key={index}
          className="text-sm sm:text-base text-slate-700 leading-relaxed my-3.5"
          dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }}
        />
      );
    });

    if (inTable && tableRows.length > 0) {
      elements.push(renderTable(tableRows, 9999));
    }

    return elements;
  };

  const formatInlineMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code class='px-1.5 py-0.5 rounded bg-slate-100 text-xs text-amber-800 font-mono'>$1</code>")
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        "<a href='$2' class='text-amber-700 font-semibold underline hover:text-amber-800 transition'>$1</a>"
      );
  };

  const renderTable = (rows: string[], keyIndex: number) => {
    if (rows.length < 2) return <div key={keyIndex} />;
    const headers = rows[0]
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());
    const dataRows = rows.slice(2);

    return (
      <div key={keyIndex} className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
          <thead className="bg-slate-900 text-white font-semibold">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3">
                  <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(h) }} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
            {dataRows.map((row, rIdx) => {
              const cells = row
                .split("|")
                .slice(1, -1)
                .map((c) => c.trim());
              return (
                <tr key={rIdx} className="hover:bg-slate-50 transition">
                  {cells.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3">
                      <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(cell) }} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <article className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Home</a>
          <ChevronRight className="h-3 w-3" />
          <a href="/blog" className="hover:text-slate-900">Blog</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-900 font-semibold truncate">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-slate-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            <BookmarkCheck className="h-3.5 w-3.5" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <User className="h-3.5 w-3.5 text-amber-400" />
              <span>{post.author.name} ({post.author.role})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-500" />
              <span>{post.publishedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Prominent Cross-Link Alert Box */}
        <div className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                Official Engineering Service
              </span>
              <p className="text-xs sm:text-sm text-amber-800 mt-0.5">
                Looking for on-site design or installation in Pune?
              </p>
            </div>
          </div>
          <a
            href={post.serviceLink}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold tracking-wide transition shadow shrink-0"
          >
            <span>{post.serviceLinkLabel}</span>
            <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
          </a>
        </div>

        {/* Content Elements */}
        <div className="prose prose-slate max-w-none">
          {renderFormattedContent(post.content)}
        </div>

        {/* Bottom Service Cross-Link Banner */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Ready to Upgrade?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Speak with a Spaark Systems Engineer in Pune
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xl">
              We provide turnkey design, conduit installation, equipment supply, and AMC maintenance
              across Pune and PCMC. Schedule a free site visit today.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={post.serviceLink}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
              >
                {post.serviceLinkLabel}
              </a>
              <a
                href="/get-a-quote"
                className="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-white font-semibold text-xs transition"
              >
                Request a Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* More Articles */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">More Technical Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherPosts.map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="p-5 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition group block"
              >
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  {p.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-navy-900 transition line-clamp-2">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">{p.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
