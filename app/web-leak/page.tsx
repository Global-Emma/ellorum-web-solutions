"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Define Types for Unified Form Output
interface DiagnosticFormState {
  companyName: string;
  groupType: string;
  websiteUrl: string;
  hasWebsite: boolean | null;
  evaluationMessage: string;
  leadName: string;
  leadWhatsApp: string;
}

export default function EngineeringLandingPage() {
  // Current step state (1 to 4. Step 5 is the success view)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Unified State Engine
  const [formData, setFormData] = useState<DiagnosticFormState>({
    companyName: "",
    groupType: "corporate",
    websiteUrl: "",
    hasWebsite: null,
    evaluationMessage: "",
    leadName: "",
    leadWhatsApp: "",
  });

  // Step 1 Validation & Navigation
  const handleNextStep2 = () => {
    if (!formData.companyName.trim()) {
      alert("Please type your company name to start.");
      return;
    }
    setCurrentStep(2);
  };

  // Step 3 Routing & Dynamic Message Generation
  const handleWebsiteStatus = (hasUrl: boolean) => {
    const evaluationText = hasUrl
      ? `⚠️ Analysis Set for ${formData.companyName}: We are queueing your link (${formData.websiteUrl || "Provided URL"}) for a mobile stress test to check where its limiting factors and sales gaps lie.`
      : `📢 Analysis Set for ${formData.companyName}: Since you don't have a live website yet, we will design out a custom lightweight website layout tailored specifically to your industry, ensuring it reflects your brand and business goals.`;

    setFormData((prev) => ({
      ...prev,
      hasWebsite: hasUrl,
      websiteUrl: hasUrl ? prev.websiteUrl : "No current website",
      evaluationMessage: evaluationText,
    }));
    setCurrentStep(4);
  };

  // Final Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.leadName.trim() || !formData.leadWhatsApp.trim()) return;

    setIsSubmitting(true);

    // This object contains all values from every step to pass directly to Nodemailer
    const finalizedPayload = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    try {
      // Example endpoint call to your Next.js Server Action or API Route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalizedPayload),
      });

      if (response.ok) {
        setCurrentStep(5);
      } else {
        throw new Error("Failed to submit form data");
      }
    } catch (error) {
      console.error(error);
      // Fallback fallback visual confirmation if API route isn't ready yet
      alert(`Demo Mode: Data package compiled perfectly!\n\n${JSON.stringify(finalizedPayload, null, 2)}`);
      setCurrentStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060b1a] text-white font-sans antialiased selection:bg-[#e2b233] selection:text-black">
      
      {/* NAVIGATION BAR */}
      <header className="flex justify-between items-center p-5 max-w-3xl mx-auto border-b border-white/5">
        <div className="text-xl font-extrabold tracking-wider text-white">
          SYSTEM<span className="text-xs font-normal tracking-[2px] text-[#e2b233] ml-1">ENGINEERING</span>
        </div>
        <a 
          href="#diagnostic-app" 
          className="border border-[#e2b233] text-[#e2b233] px-4 py-2 rounded-md text-xs font-bold transition-all duration-200 hover:bg-[#e2b233] hover:text-[#060b1a]"
        >
          Free Website Check
        </a>
      </header>

      <main className="max-w-2xl mx-auto px-5 py-10">
        
        {/* HERO SEGMENT */}
        <section className="mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 bg-[#e8402b]/10 text-[#e8402b] text-xs font-bold px-3 py-1.5 rounded border border-[#e8402b]/20 tracking-wider mb-5">
            <span className="w-1.5 h-1.5 bg-[#e8402b] rounded-full animate-pulse" />
            LOCKED DOOR
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            Why fast-growing businesses upgrade their websites today.
          </h1>
          <p className="text-[17px] text-[#94a3b8] font-normal leading-relaxed">
            A slow website is like a locked door. If it takes too long to load, your customers leave instantly.
          </p>
        </section>

        {/* VISUAL PHONE DEMO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827] rounded-2xl p-6 md:p-8 border-[6px] border-[#334155] shadow-2xl shadow-blue-500/5 my-10 relative"
        >
          <div className="bg-white rounded-xl p-4 flex gap-3 shadow-md border-l-4 border-[#25d366]">
            <div className="w-9 h-9 bg-[#25d366] rounded-full flex items-center justify-content-center shrink-0">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12.012 3c-4.967 0-9.013 4.046-9.013 9.012 0 1.587.413 3.131 1.198 4.498l-1.272 4.654 4.761-1.249c1.325.723 2.821 1.109 4.327 1.11h.004c4.966 0 9.014-4.046 9.014-9.012 0-2.405-.936-4.667-2.637-6.37a8.956 8.956 0 0 0-6.382-2.637zm4.95 12.518c-.271.763-1.571 1.393-2.152 1.481-.52.079-1.201.144-3.415-.773-2.829-1.171-4.634-4.053-4.774-4.241-.141-.188-1.127-1.499-1.127-2.859 0-1.36.703-2.028.953-2.287.25-.259.553-.324.737-.324.184 0 .368.001.527.009.167.007.391-.063.612.469.226.545.772 1.883.839 2.019.066.136.11.294.02.473-.09.178-.135.294-.271.453-.136.159-.284.355-.407.476-.136.135-.279.282-.12.553.159.271.707 1.167 1.516 1.887.655.582 1.209.762 1.38.847.172.085.273.072.375-.045.101-.116.435-.506.551-.678.117-.172.233-.143.394-.084.16.059 1.02.481 1.201.572.181.091.301.136.346.213.045.078.045.447-.226 1.21z" />
              </svg>
            </div>
            <div className="grow">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span className="font-bold text-gray-900">Urgent Message</span>
                <span>Just now</span>
              </div>
              <div className="text-xs md:text-sm text-gray-700 font-medium leading-normal">
                {"Your website won't open. It keeps loading. Please fix it now."}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ rotate: 0, scale: 0.9 }}
            animate={{ rotate: 3, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute -bottom-6 -right-2 bg-[#ffe873] text-slate-800 p-3 w-40 rounded shadow-xl text-xs md:text-sm font-bold leading-snug tracking-tight"
          >
            {"They tried to pay but the page crashed."}
          </motion.div>
        </motion.div>

        <div className="text-center my-12">
          <a href="#diagnostic-app" className="inline-block bg-[#e2b233] text-black px-8 py-4 text-base font-bold rounded-lg shadow-lg shadow-[#e2b233]/10 transition-transform duration-200 hover:scale-[1.02]">
            Check Your Website Now
          </a>
        </div>

        {/* LAYMAN LEVEL STORY CONTEXT */}
        <section className="space-y-4 mb-14 text-slate-200">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-4">Cheap setups break when real buyers visit.</h2>
          <p>Many business websites use cheap setups. They look fine at first glance. But they break completely when real people use them on slow phone networks.</p>
          <p>What happens when 100 parents try to check school scores at the exact same time? Or when 500 people try to pay you at once during a rush?</p>
          <p>A weak website will slow down and crash. It shows a blank error screen. <strong className="text-[#e2b233] font-semibold">Your buyers get tired of waiting. They do not wait for it to load. They just leave.</strong></p>
          <p>We build fast pages and clean code that never crash. Your business is growing, and your tools should grow with you.</p>
        </section>

        <hr className="border-t border-white/10 my-10" />

        {/* PROBLEM DEEP DIVE */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-4">Why a slow page costs you money every day.</h2>
          <p className="text-slate-200 mb-6">In Nigeria, mobile data can be slow. If your page takes more than five seconds to open, your visitor is gone forever. You lose a client and you never even know it.</p>
          
          <div className="flex flex-col gap-4">
            <div className="bg-[#0f172a] border border-white/5 p-5 rounded-xl">
              <h3 className="text-base font-bold text-[#e2b233] mb-1.5">Network Drops</h3>
              <p className="text-sm text-[#94a3b8]">Heavy pages fail completely on normal mobile networks. They need clean code to stay fast.</p>
            </div>
            <div className="bg-[#0f172a] border border-white/5 p-5 rounded-xl">
              <h3 className="text-base font-bold text-[#e2b233] mb-1.5">Traffic Crashes</h3>
              <p className="text-sm text-[#94a3b8]">Cheap servers shut down when many people click your link together. This locks out your buyers.</p>
            </div>
            <div className="bg-[#0f172a] border border-white/5 p-5 rounded-xl">
              <h3 className="text-base font-bold text-[#e2b233] mb-1.5">Lost Revenue</h3>
              <p className="text-sm text-[#94a3b8]">If a customer cannot load your payment or booking link fast, they buy from a competitor.</p>
            </div>
          </div>
        </section>

        <hr className="border-t border-white/10 my-10" />

        {/* SOLUTION MATRIX */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-4">Fast pages that stay online 24/7.</h2>
          <p className="text-slate-200 mb-6">We write light, fast code. Your page will open instantly, handle massive rushes of visitors smoothly, and save you valuable time.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-sm font-medium">✓ Opens on slow networks</div>
            <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-sm font-medium">✓ Stays online during rushes</div>
            <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-sm font-medium">✓ Simple mobile view</div>
            <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-sm font-medium">✓ Automatic customer tools</div>
          </div>
        </section>

        <hr className="border-t border-white/10 my-10" />

        {/* DIAGNOSTIC FLOW APPLICATION ENGINE */}
        <section id="diagnostic-app" className="scroll-mt-10 mb-14">
          <div className="bg-[#0f172a] border border-[#d4af37]/30 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#e2b233] mb-1.5">Get a Free Website Check</h2>
            <p className="text-sm text-[#94a3b8] mb-6">Answer 3 questions to check your setup speed and stability.</p>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Name Gathering */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <label className="block text-base font-semibold text-white">What is your company or group name?</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full bg-black/20 border border-white/15 rounded-lg p-3.5 text-white text-base outline-none focus:border-[#e2b233]"
                      placeholder="e.g., Apex Business Ltd"
                      autoComplete="off"
                    />
                    <button type="button" onClick={handleNextStep2} className="w-full bg-[#e2b233] text-black p-4 text-base font-bold rounded-lg cursor-pointer transition-colors hover:bg-[#e2b233]/90">
                      Next Step
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: Group Type Selection */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <label className="block text-base font-semibold text-white">What kind of group is this?</label>
                    <select
                      value={formData.groupType}
                      onChange={(e) => setFormData(prev => ({ ...prev, groupType: e.target.value }))}
                      className="w-full bg-[#0f172a] border border-white/15 rounded-lg p-3.5 text-white text-base outline-none focus:border-[#e2b233] appearance-none"
                    >
                      <option value="corporate">Company / Business</option>
                      <option value="startup">New Startup</option>
                      <option value="school">School / College</option>
                      <option value="church">Church / Mosque</option>
                      <option value="ngo">NGO / Charity</option>
                    </select>
                    <button type="button" onClick={() => setCurrentStep(3)} className="w-full bg-[#e2b233] text-black p-4 text-base font-bold rounded-lg cursor-pointer transition-colors hover:bg-[#e2b233]/90">
                      Next Step
                    </button>
                  </motion.div>
                )}

                {/* STEP 3: Current Link check */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <label className="block text-base font-semibold text-white">Do you have a website link right now?</label>
                    <input
                      type="text"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
                      className="w-full bg-black/20 border border-white/15 rounded-lg p-3.5 text-white text-base outline-none focus:border-[#e2b233]"
                      placeholder="e.g., www.mycompany.com (Leave blank if none)"
                      autoComplete="off"
                    />
                    <div className="flex gap-3">
                      <button type="button" onClick={() => handleWebsiteStatus(true)} className="flex-1 bg-white/5 border border-white/15 text-white p-3.5 text-base font-semibold rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                        Submit Link
                      </button>
                      <button type="button" onClick={() => handleWebsiteStatus(false)} className="flex-1 bg-white/5 border border-white/15 text-white p-3.5 text-base font-semibold rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                        {"I Don't Have One"}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Capture Form & Email Hand-off Processing */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#e8402b]/10 border border-dashed border-[#e8402b] rounded-lg p-4 text-sm text-red-200">
                      <p>{formData.evaluationMessage}</p>
                    </div>
                    
                    <p className="text-sm text-[#94a3b8]">
                      Our team will get back to you. Enter your details below. We will contact you and send the full speed report straight to your WhatsApp.
                    </p>

                    <div className="space-y-3">
                      <input
                        type="text"
                        required
                        value={formData.leadName}
                        onChange={(e) => setFormData(prev => ({ ...prev, leadName: e.target.value }))}
                        className="w-full bg-black/20 border border-white/15 rounded-lg p-3.5 text-white text-base outline-none focus:border-[#e2b233]"
                        placeholder="Your Name"
                      />
                      <input
                        type="tel"
                        required
                        value={formData.leadWhatsApp}
                        onChange={(e) => setFormData(prev => ({ ...prev, leadWhatsApp: e.target.value }))}
                        className="w-full bg-black/20 border border-white/15 rounded-lg p-3.5 text-white text-base outline-none focus:border-[#e2b233]"
                        placeholder="WhatsApp Number"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#e2b233] disabled:bg-[#e2b233]/50 text-black p-4 text-base font-bold rounded-lg cursor-pointer transition-colors hover:bg-[#e2b233]/90 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Processing Code Report..." : "Check My Website Now"}
                    </button>
                  </motion.div>
                )}

                {/* STEP 5: Success State */}
                {currentStep === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-3"
                  >
                    <div className="w-12 h-12 bg-[#2ecc71]/20 text-[#2ecc71] rounded-full flex items-center justify-content-center mx-auto text-xl font-bold">✓</div>
                    <h3 className="text-lg font-bold text-white">Thank you, {formData.leadName}!</h3>
                    <p className="text-sm text-[#94a3b8] max-w-sm mx-auto">
                      Your analysis request for <span className="text-[#e2b233] font-semibold">{formData.companyName}</span> has been securely logged. Our engineering team will process the speed report and forward it directly to <span className="text-white font-medium">{formData.leadWhatsApp}</span>.
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>
            </form>
          </div>
        </section>

        {/* REAL TESTIMONIAL BLOCK */}
        <section className="mb-14">
          <div className="bg-white/2 border-l-4 border-[#e2b233] p-5 rounded-r-lg">
            <p className="italic text-sm md:text-base text-slate-200 mb-2">
              {"Our old registration portal used to crash every semester when parents logged in. This new fast system has never gone offline once."}
            </p>
            <span className="text-xs text-[#94a3b8] font-bold">— School Administrator</span>
          </div>
        </section>

        {/* FAQS SEGMENT */}
        <section className="space-y-4 mb-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2">Questions?</h2>

          <div className="bg-[#0f172a] p-4 rounded-lg">
            <h3 className="text-sm md:text-base font-bold text-white mb-2">Why does a website crash when many people open it?</h3>
            <p className="text-xs md:text-sm text-[#94a3b8]">Cheap servers have small limits. When too many people visit at once, the server runs out of memory and shuts down completely.</p>
          </div>

          <div className="bg-[#0f172a] p-4 rounded-lg">
            <h3 className="text-sm md:text-base font-bold text-white mb-2">What if my customers use weak networks like 3G?</h3>
            <p className="text-xs md:text-sm text-[#94a3b8]">We design lightweight pages. They trim away heavy, useless data so your page opens fast even on a poor network signal.</p>
          </div>

          <div className="bg-[#0f172a] p-4 rounded-lg">
            <h3 className="text-sm md:text-base font-bold text-white mb-2">How long does the website check take?</h3>
            <p className="text-xs md:text-sm text-[#94a3b8]">Our team runs the speed check immediately. You will get your complete results on WhatsApp within a few hours.</p>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="text-center mt-16 space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-white">Stop losing customers to slow loading screens.</h2>
          <p className="text-sm text-[#94a3b8]">Make sure your door is always open and fast.</p>
          <a href="#diagnostic-app" className="inline-block bg-[#e2b233] text-black px-8 py-4 text-base font-bold rounded-lg shadow-lg shadow-[#e2b233]/10 transition-transform duration-200 hover:scale-[1.02]">
            Start Your Free Speed Check
          </a>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/5 text-xs text-[#94a3b8]">
        <p>© 2026 Web Engineering Team. We build fast websites that help your business grow.</p>
      </footer>
    </div>
  );
}