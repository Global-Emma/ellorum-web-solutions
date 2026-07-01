import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
import { previewServices as suite } from "@/lib/utils";

export default function ServicesCatalogPage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-20">
          <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block">
            Our Offers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display">
            Digital Solutions Designed To Drive Business Growth
          </h1>
          <p className="text-brand-muted text-sm md:text-base">
            We offer services tailored to meet your unique needs, helping you
            your make that product breakthrough, improve online presence,
            connect with more customers, and grow your business with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suite.map((s, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border-white/5 flex flex-col justify-between glass-card-hover group"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-brand-electric/10 text-brand-electric flex items-center justify-center group-hover:bg-brand-electric group-hover:text-brand-bg transition-all duration-300">
                  {s.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-electric transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-brand-muted text-xs md:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
              <div className="pt-8 mt-6 border-t border-white/5">
                <Link
                  href={`/services/${s.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white tracking-wider uppercase group-hover:text-brand-electric transition-colors"
                >
                  Review System Scope <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
