import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BarChart3, ShieldCheck } from "lucide-react";

interface StudyModel {
  title: string;
  challenge: string;
  execution: string;
  metrics: string[];
}

const studyRegistry: Record<string, StudyModel> = {
  "quantum-retail": {
    title: "Quantum Enterprise E-Comm System Architecture",
    challenge: "The client suffered from high page load abandonment, leading to dropping performance conversion curves and systemic drop-offs across payment screens.",
    execution: "We rebuilt their transactional checkout engine on an optimized Next.js serverless architecture, integrating lightning-fast component logic to ensure smooth user interactions.",
    metrics: ["Sub-300ms Performance Paint Speeds", "34% Lift in End-to-End Retention Metrics", "Zero Server Outages Over Peak Launch Demands"],
  }
};

export async function generateStaticParams() {
  return [{ slug: "quantum-retail" }];
}

export default async function ProjectCaseRoute(props: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await props.params;
  const project = studyRegistry[resolvedParams.slug];
  if (!project) notFound();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase text-brand-muted hover:text-brand-electric transition-colors"><ArrowLeft className="w-4 h-4" /> Return to Masterworks Hub</Link>
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold font-display">{project.title}</h1>
          <div className="h-0.5 w-16 bg-brand-electric" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="glass-panel p-6 rounded-xl border-white/5 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-brand-electric uppercase font-mono">Market Obstacle</h4>
            <p className="text-brand-muted text-sm leading-relaxed">{project.challenge}</p>
          </div>
          <div className="glass-panel p-6 rounded-xl border-white/5 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-brand-electric uppercase font-mono">Strategic Execution</h4>
            <p className="text-brand-muted text-sm leading-relaxed">{project.execution}</p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl border-brand-electric/20 bg-linear-to-b from-brand-dark to-brand-bg space-y-6">
          <h3 className="text-lg font-bold font-display flex items-center gap-2"><BarChart3 className="w-5 h-5 text-brand-electric" /> Validated Performance Gains</h3>
          <ul className="space-y-3">
            {project.metrics.map((m, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-white font-medium"><ShieldCheck className="w-4 h-4 text-brand-electric shrink-0" /> {m}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}