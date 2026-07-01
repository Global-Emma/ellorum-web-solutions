import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogHubPage() {
  const posts = [
    { slug: "nextjs16-architecture", title: "Next.js 16 Production Architectures for Sub-Second Loads", date: "May 14, 2026", readTime: "5 min read", abstract: "An analysis of server component caching strategies designed to minimize time-to-first-byte latency across cloud instances." },
    { slug: "seo-schema-strategy", title: "Injecting Micro-Schema Graphs for Automated Google Rankings", date: "April 28, 2026", readTime: "4 min read", abstract: "A technical guide to programmatic JSON-LD data construction designed to optimize crawling systems." }
  ];

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl space-y-16">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block">THE LOGIC REPOSITORY</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display">Thought Leadership Stream</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="glass-panel p-8 rounded-2xl border-white/5 flex flex-col justify-between group glass-card-hover">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-brand-muted">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold font-display group-hover:text-brand-electric transition-colors">{post.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{post.abstract}</p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-brand-electric transition-colors uppercase tracking-wider">
                  Read Whitepaper <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}