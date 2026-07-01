import { notFound } from "next/navigation";
import { CheckCircle, ShieldAlert, ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";

interface ServiceDataset {
  title: string;
  problem: string;
  solution: string;
  deliverables: string[];
  investmentFloor: string;
}

const serviceDirectory: Record<string, ServiceDataset> = {
  "web-development": {
    title: "Next-Gen Web Engineering Solutions",
    problem: "Modern online performance suffers under sluggish software legacy stacks. A 100ms lag can reduce conversions by up to 7%.",
    solution: "We build tailored Next.js 16 platforms compiled via highly customized build matrix pipelines to deliver instant page loads and strong organic SEO results.",
    deliverables: ["Tailwind CSS v4 Component Architectures", "Secure Database Integration Layers", "Advanced Server-Side Hydration Frameworks"],
    investmentFloor: "$4,500 USD",
  },
  "seo": {
    title: "Organic Authority & Search Domination Engine",
    problem: "Most companies lose valuable buyer interest to competitors due to weak structural architecture and poor content discovery metrics.",
    solution: "We deploy multi-layered SEO overhauls covering semantic structured indexing, automated schema graphs, and comprehensive performance tune-ups.",
    deliverables: ["Automated JSON-LD Rich Data Injection", "Core Web Vitals Performance Optimization", "Competitive Market Keyword Strategies"],
    investmentFloor: "$2,500 USD",
  }
};

export async function generateStaticParams() {
  return [{ slug: "web-development" }, { slug: "seo" }];
}

// Next.js 16 uses async/awaited page parameters for type-safe route evaluation
export default async function ServiceDetailRoute(props: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await props.params;
  const targetData = serviceDirectory[resolvedParams.slug];

  if (!targetData) {
    notFound();
  }

  return (
    <section className="py-32 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-electric transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Return to Service Catalog
        </Link>

        {/* Informational Hero Matrix */}
        <div className="space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display">{targetData.title}</h1>
          <div className="h-0.5 w-24 bg-brand-electric" />
        </div>

        {/* Dual Column Strategic Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10 space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-bold tracking-wider uppercase text-xs">
              <ShieldAlert className="w-4 h-4" /> Market Obstacle
            </div>
            <p className="text-neutral-300 leading-relaxed text-sm md:text-base">{targetData.problem}</p>
          </div>

          <div className="p-8 rounded-2xl bg-brand-electric/5 border border-brand-electric/10 space-y-4">
            <div className="flex items-center gap-2 text-brand-electric font-bold tracking-wider uppercase text-xs">
              <Terminal className="w-4 h-4" /> Strategic Solution
            </div>
            <p className="text-neutral-300 leading-relaxed text-sm md:text-base">{targetData.solution}</p>
          </div>
        </div>

        {/* Architectural Scope Deliverables Matrix */}
        <div className="glass-panel rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold font-display mb-6">Standard Included Scope Matrix</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targetData.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-brand-muted text-sm">
                <CheckCircle className="w-5 h-5 text-brand-electric shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Pricing Floor Notification Card */}
        <div className="p-8 rounded-2xl bg-linear-to-r from-brand-dark to-brand-bg border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-muted uppercase block">DEPLOYMENT BUDGET PROFILE</span>
            <p className="text-sm mt-1">Starting baseline packages configured from:</p>
            <p className="text-2xl font-bold text-brand-electric font-display mt-0.5">{targetData.investmentFloor}</p>
          </div>
          <Link href="/contact" className="w-full md:w-auto text-center px-8 py-4 bg-white text-brand-bg font-bold rounded-xl hover:bg-brand-electric hover:text-brand-bg transition-colors duration-300 shadow-xl">
            Secure Implementation Window
          </Link>
        </div>
      </div>
    </section>
  );
}