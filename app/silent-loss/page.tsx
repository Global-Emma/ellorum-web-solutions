"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TYPESCRIPT INTERFACES ---
interface DiagnosticState {
  businessName: string;
  hasWebsite: "yes" | "no" | "";
  hasInfo: "yes" | "no" | "";
  leadName: string;
  leadEmail: string;
  leadWhatsApp: string;
}

export default function EllorumDiagnosticPage() {
  // Unifying all steps and fields into a single state record
  const [formData, setFormData] = useState<DiagnosticState>({
    businessName: "",
    hasWebsite: "",
    hasInfo: "",
    leadName: "",
    leadEmail: "",
    leadWhatsApp: "",
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Smooth scroll helper
  const scrollToDiagnostic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("diagnostic-app")?.scrollIntoView({ behavior: "smooth" });
  };

  // Intermediate validation steps
  const handleNextStep = () => {
    if (currentStep === 1 && !formData.businessName.trim()) {
      alert("Please type your business name to start.");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleSelection = (key: "hasWebsite" | "hasInfo", value: "yes" | "no") => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setCurrentStep((prev) => prev + 1);
  };

  // --- FINAL CONSOLIDATED SUBMISSION ---
  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Sending the complete unified payload to your Next.js API Route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Logic to determine report messaging based on yes/no parameters
  const isBleedingLeads = formData.hasWebsite === "no" || formData.hasInfo === "no";

  return (
    <div className="min-h-screen bg-[#060b1a] text-white antialiased selection:bg-[#e2b233] selection:text-black">
      
      {/* NAVIGATION BAR */}
      <header className="border-b border-white/5 bg-[#060b1a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-wider text-white">SEARCH CHECK</div>
          <a
            href="#diagnostic-app"
            onClick={scrollToDiagnostic}
            className="border border-[#e2b233] text-[#e2b233] px-4 py-2 rounded-md text-sm font-bold tracking-wide hover:bg-[#e2b233] hover:text-[#060b1a] transition-all duration-300"
          >
            Run Search Check
          </a>
        </div>
      </header>

      {/* MAIN LAYOUT CONTAINER */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        
        {/* HERO SEGMENT */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#e8402b]/10 border border-[#e8402b]/20 text-[#e8402b] text-xs font-bold px-3 py-1.5 rounded mb-6 tracking-widest">
            <span className="w-2 h-2 bg-[#e8402b] rounded-full animate-pulse" />
            SILENT LOSS
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-white">
            Someone searched your business name this week.
          </h1>
          <p className="text-lg text-slate-400 font-normal">
            They used their phone. They looked for your name. This is what happened next.
          </p>
        </header>

        {/* VISUAL PHONE DEMO */}
        <div className="bg-white text-slate-800 rounded-2xl p-4 md:p-6 border-4 border-slate-700 shadow-2xl shadow-blue-500/10 my-10 relative">
          <div className="bg-slate-100 rounded-full py-2.5 px-4 text-sm flex items-center gap-2 mb-6 border border-slate-200">
            <span className="text-slate-400">🔍</span>
            <span className="font-semibold text-slate-500 italic">your business name</span>
          </div>

          <div className="space-y-5">
            {/* Competitor Listing */}
            <div className="border-2 border-dashed border-emerald-500 rounded-lg p-4 bg-emerald-50/20">
              <div className="text-xs text-slate-500 mb-0.5">www.competitor.com</div>
              <div className="text-lg text-blue-800 font-semibold mb-1">Top Local Competitor Ltd</div>
              <div className="text-xs text-slate-600 mb-1">
                <span className="text-amber-500">★★★★★</span> 4.9 (42 reviews) • Open now
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                See our work pictures. Call us today for fast service. We are ready to help you now.
              </div>
            </div>

            {/* Target Listing */}
            <div className="border-2 border-dashed border-rose-500 rounded-lg p-4 bg-rose-50/20">
              <div className="text-xs text-slate-500 mb-0.5">facebook.com › pages</div>
              <div className="text-lg text-blue-800 font-semibold mb-1">Your Business Name Here</div>
              <div className="text-xs text-slate-600 mb-2">No reviews yet • Photos from 2019</div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded font-medium">
                  ✗ Missing Website Link
                </span>
              </div>
              <div className="text-xs font-bold text-rose-600 mt-3 flex items-center gap-1.5">
                🛑 Left behind on the list.
              </div>
            </div>
          </div>

          {/* Sticky Note */}
          <div className="absolute -bottom-6 -right-2 bg-[#ffe873] text-slate-900 p-3.5 w-40 rounded shadow-xl transform rotate-3 font-bold text-xs leading-snug">
            &quot;They found them in 6 seconds. Not us.&quot;
          </div>
        </div>

        {/* CALL TO ACTION LINK */}
        <div className="text-center my-12">
          <a
            href="#diagnostic-app"
            onClick={scrollToDiagnostic}
            className="inline-block bg-[#e2b233] text-black font-bold px-8 py-4 rounded-lg shadow-lg shadow-[#e2b233]/10 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          >
            Run A Search Check
          </a>
        </div>

        {/* STORY CONTEXT SECTION */}
        <section className="space-y-5 text-slate-300 mb-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-white">The search happened fast. Then they stopped.</h2>
          <p>
            Somebody wanted to give you money this week. Maybe it was a new client. Maybe a friend told them about your good work.
          </p>
          <p>
            They opened Google on their phone. They typed your name. It took them four seconds. Then they looked at the screen.
          </p>
          <p>
            They did not see a clean page. They did not see your phone number. They did not see pictures of your new work. They saw an old page or a blank screen.
          </p>
          <p className="text-base">
            So, they did something very quiet. <strong className="text-[#e2b233] font-semibold">They clicked the next name on the list.</strong>
          </p>
          <p>
            They did not call you to complain. They did not send a WhatsApp message to tell you. They just went away forever.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        {/* PROBLEM HIGHLIGHTS GRID */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-4">Why good businesses lose clients quietly.</h2>
          <p className="text-slate-300 mb-6">
            This happens across Nigeria every day. You do not lose clients because your price is high. You lose them because your online screen looks empty. When your screen looks empty, strangers feel unsafe.
          </p>
          <div className="flex flex-col gap-4">
            <div className="bg-[#0f172a] border border-white/5 p-5 rounded-xl">
              <h3 className="text-sm font-bold text-[#e2b233] uppercase tracking-wider mb-1.5">Competitor Advantage</h3>
              <p className="text-sm text-slate-400">Other businesses show clean profiles, fresh reviews, and quick phone links right away.</p>
            </div>
            <div className="bg-[#0f172a] border border-white/5 p-5 rounded-xl">
              <h3 className="text-sm font-bold text-[#e2b233] uppercase tracking-wider mb-1.5">Old Footprints</h3>
              <p className="text-sm text-slate-400">Showing old pictures or outdated pages makes clients think you closed down.</p>
            </div>
            <div className="bg-[#0f172a] border border-white/5 p-5 rounded-xl">
              <h3 className="text-sm font-bold text-[#e2b233] uppercase tracking-wider mb-1.5">Silent Departure</h3>
              <p className="text-sm text-slate-400">No one tells you when they click away. They simply drop you and choose someone else.</p>
            </div>
          </div>
        </section>

        <hr className="border-white/10 my-12" />

        {/* SOLUTION MATRIX */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-4">Make your screen build trust instantly.</h2>
          <p className="text-slate-300 mb-6">
            Fixing your screen is very easy. A professional presence lets people understand your value and take action instantly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Instantly found details", "Modern look on mobile", "Strong trust from start", "Steady incoming calls"].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-3.5 rounded-lg text-sm font-medium">
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/10 my-12" />

        {/* --- DIAGNOSTIC FLOW CARD SETUP --- */}
        <section id="diagnostic-app" className="scroll-mt-24">
          <div className="bg-[#0f172a] border border-[#e2b233]/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#e2b233] mb-1">Run a Search Check</h2>
            <p className="text-xs text-slate-400 mb-6">See what a stranger finds when they search for you.</p>

            <AnimatePresence mode="wait">
              {/* STEP 1: Name Gathering */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <label htmlFor="biz-name" className="block font-semibold text-slate-200">
                    What is your business name?
                  </label>
                  <input
                    type="text"
                    id="biz-name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-black/30 border border-white/15 focus:border-[#e2b233] rounded-lg p-3.5 text-white outline-none transition-colors"
                    placeholder="Type your business name here..."
                    autoComplete="off"
                  />
                  <button
                    onClick={handleNextStep}
                    className="w-full bg-[#e2b233] text-black font-bold py-3.5 rounded-lg hover:bg-[#e2b233]/90 transition-colors"
                  >
                    Next Step
                  </button>
                </motion.div>
              )}

              {/* STEP 2: Website Check */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="font-semibold text-slate-200">
                    Do you have a clean website that works well on phones?
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSelection("hasWebsite", "yes")}
                      className="flex-1 bg-white/5 border border-white/15 hover:bg-white/10 font-semibold py-3.5 rounded-lg transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleSelection("hasWebsite", "no")}
                      className="flex-1 bg-white/5 border border-white/15 hover:bg-white/10 font-semibold py-3.5 rounded-lg transition-colors"
                    >
                      No
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Content Check */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="font-semibold text-slate-200">
                    Can customers see your phone number and recent pictures instantly?
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSelection("hasInfo", "yes")}
                      className="flex-1 bg-white/5 border border-white/15 hover:bg-white/10 font-semibold py-3.5 rounded-lg transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleSelection("hasInfo", "no")}
                      className="flex-1 bg-white/5 border border-white/15 hover:bg-white/10 font-semibold py-3.5 rounded-lg transition-colors"
                    >
                      No
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Combined Capture Form & Report Data */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* Generated Evaluation Data Output */}
                  <div className="bg-[#e8402b]/10 border border-dashed border-[#e8402b] rounded-lg p-4">
                    {isBleedingLeads ? (
                      <p className="text-sm text-red-300 leading-relaxed">
                        🚨 <strong className="font-bold text-white">Report for {formData.businessName}:</strong> Your search results are bleeding leads. Competitors look safer and are swallowing your clients right now.
                      </p>
                    ) : (
                      <p className="text-sm text-amber-300 leading-relaxed">
                        ⚡ <strong className="font-bold text-white">Report for {formData.businessName}:</strong> You have a foundation, but you are likely missing clear hooks to lock in modern mobile traffic before they drop off.
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    We build clean pages that make strangers trust your business instantly. Leave your details below and we will show you how to improve your online presence.
                  </p>

                  <form onSubmit={handleSubmitLead} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.leadName}
                      onChange={(e) => setFormData({ ...formData, leadName: e.target.value })}
                      className="w-full bg-black/30 border border-white/15 focus:border-[#e2b233] rounded-lg p-3 text-sm text-white outline-none transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.leadEmail}
                      onChange={(e) => setFormData({ ...formData, leadEmail: e.target.value })}
                      className="w-full bg-black/30 border border-white/15 focus:border-[#e2b233] rounded-lg p-3 text-sm text-white outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your WhatsApp Number"
                      value={formData.leadWhatsApp}
                      onChange={(e) => setFormData({ ...formData, leadWhatsApp: e.target.value })}
                      className="w-full bg-black/30 border border-white/15 focus:border-[#e2b233] rounded-lg p-3 text-sm text-white outline-none transition-colors"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === "success"}
                      className="w-full bg-[#e2b233] disabled:bg-slate-700 disabled:text-slate-400 text-black font-bold py-3.5 rounded-lg hover:bg-[#e2b233]/90 transition-colors mt-2"
                    >
                      {isSubmitting ? "Processing..." : "Get My Free Review"}
                    </button>
                  </form>

                  {/* Submission Status Alerts */}
                  {submitStatus === "success" && (
                    <p className="text-sm text-emerald-400 text-center font-semibold mt-2">
                      ✓ Thank you, {formData.leadName}! Your profile is ready. We will reach out on WhatsApp at {formData.leadWhatsApp}.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-sm text-rose-400 text-center font-semibold mt-2">
                      ✗ Something went wrong. Please try again.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* TESTIMONIAL BLOCK */}
        <section className="my-14">
          <div className="bg-white/2 border-l-4 border-[#e2b233] p-5 rounded-r-lg">
            <p className="italic text-slate-300 text-sm mb-2">
              &quot;We stopped losing people to local search links once our website page went live. Best setup ever.&quot;
            </p>
            <span className="text-xs text-slate-500 font-bold">— Business Owner</span>
          </div>
        </section>

        {/* FAQS SEGMENT */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2">Questions?</h2>
          <div className="bg-[#0f172a] p-4 rounded-xl space-y-1">
            <h3 className="text-sm font-bold text-white">Why do people skip my page if they already know my name?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              They want to see if you are active and professional. An old page or missing link makes them look for an easier option.
            </p>
          </div>
          <div className="bg-[#0f172a] p-4 rounded-xl space-y-1">
            <h3 className="text-sm font-bold text-white">How fast can we update our profile?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Very fast. Once we have your correct information, your new professional presence can start pulling clients in days.
            </p>
          </div>
          <div className="bg-[#0f172a] p-4 rounded-xl space-y-1">
            <h3 className="text-sm font-bold text-white">Is this service complicated to manage?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No. We handle the heavy build for you so you can focus entirely on taking orders and talking to clients.
            </p>
          </div>
        </section>

        {/* CLOSING FINAL CTA */}
        <section className="text-center py-12 mt-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2">Stop losing customers to the next name on the list.</h2>
          <p className="text-sm text-slate-400 mb-6">Make sure your online screen shows you are ready.</p>
          <a
            href="#diagnostic-app"
            onClick={scrollToDiagnostic}
            className="inline-block bg-[#e2b233] text-black font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            Start Your Search Check
          </a>
        </section>

      </main>

      {/* FOOTER */}
      {/* <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <p>© Ellorum Web Solutions</p>
      </footer> */}
    </div>
  );
}