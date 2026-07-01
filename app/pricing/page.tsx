import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const tiers = [
    { name: "Startup Launch Package", price: "$2,500", desc: "Designed for small to mid-sized businesses looking to establish a highly professional online presence.", features: ["Custom Next.js Web Landing Platform", "Tailwind CSS Component Architecture", "Standard SEO Strategy Mapping", "Integrated Analytics Dashboards"] },
    { name: "Business Velocity Upgrade", price: "$4,500", desc: "Our primary tier designed to optimize acquisition loops for expanding mid-market companies.", features: ["Comprehensive Multi-Page Ecosystem", "Advanced Custom Database Frameworks", "Full Structural JSON-LD Optimization", "Automated Email & CRM Webhook Tools"] },
    { name: "Premium Enterprise Tier", price: "Custom", desc: "High-end bespoke system engineering tailored for complex, large-scale software operations.", features: ["Microservice Software Layouts", "Dedicated 24/7 Priority Cloud Support", "Continuous Core Web Vitals Monitoring", "Custom Platform Automation Workflows"] },
  ];

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-brand-electric font-mono text-xs tracking-widest uppercase block">PREDICTABLE INVESTMENT</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display">Calculated Pricing Tiers</h1>
          <p className="text-brand-muted text-sm md:text-base">Transparent, value-focused pricing structures built to deliver strong returns on your technology investment.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((t, idx) => (
            <div key={idx} className={`glass-panel p-8 rounded-2xl border flex flex-col justify-between min-h-125 ${idx === 1 ? "border-brand-electric/40 bg-linear-to-b from-brand-dark to-brand-bg shadow-[0_0_40px_rgba(0,210,255,0.05)]" : "border-white/5"}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">{t.name}</h3>
                  <p className="text-brand-muted text-xs leading-relaxed mt-2">{t.desc}</p>
                </div>
                <div className="py-2">
                  <span className="text-4xl font-bold font-display text-white">{t.price}</span>
                  {t.price !== "Custom" && <span className="text-xs text-brand-muted font-mono"> / Baseline</span>}
                </div>
                <ul className="space-y-3 pt-4 border-t border-white/5">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-brand-muted leading-relaxed">
                      <Check className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="/contact" className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all ${idx === 1 ? "bg-brand-electric text-brand-bg hover:bg-white hover:text-brand-bg shadow-md" : "bg-white/5 text-white hover:bg-white/10"}`}>
                  Initiate Plan Build <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}