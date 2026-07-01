import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

interface PostContent {
  title: string;
  date: string;
  author: string;
  body: string;
}

const blogRegistry: Record<string, PostContent> = {
  "nextjs16-architecture": {
    title: "Next.js 16 Production Architectures for Sub-Second Loads",
    date: "May 14, 2026",
    author: "Ellorum Engineering Core",
    body: "Achieving high performance metrics on modern cloud frameworks requires strict bundle management. By prioritizing advanced static rendering mechanisms alongside edge-cached network parameters, web engines can completely skip client hydrate delays. This guide breaks down optimized structural components and deployment workflows to help your platform achieve peak efficiency."
  }
};

export async function generateStaticParams() {
  return [{ slug: "nextjs16-architecture" }];
}

export default async function BlogPostRoute(props: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await props.params;
  const post = blogRegistry[resolvedParams.slug];
  if (!post) notFound();

  return (
    <article className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl space-y-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-muted hover:text-brand-electric transition-colors"><ArrowLeft className="w-4 h-4" /> All Framework Articles</Link>
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight">{post.title}</h1>
          <div className="flex items-center gap-6 text-xs font-mono text-brand-muted pt-2 border-b border-white/5 pb-6">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.date}</span>
          </div>
        </div>

        <p className="text-brand-muted text-base md:text-lg leading-relaxed font-sans whitespace-pre-line pt-4">
          {post.body}
        </p>
      </div>
    </article>
  );
}