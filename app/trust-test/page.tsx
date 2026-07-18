"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  businessName: string;
  hasWebsite: "yes" | "no" | "";
  hasInfo: "yes" | "no" | "";
  leadName: string;
  leadEmail: string;
  leadWhatsApp: string;
}

export default function TrustTestPage() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    hasWebsite: "",
    hasInfo: "",
    leadName: "",
    leadEmail: "",
    leadWhatsApp: "",
  });

  const nextStep = () => {
    if (step === 1 && !formData.businessName.trim()) {
      alert("Please type your business name to start.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleSelectOption = (
    key: "hasWebsite" | "hasInfo",
    value: "yes" | "no",
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    // Generate a completely unique identifier for this specific action
    const uniqueEventId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    try {
      // Fire Browser Pixel instantly with the event ID (Deduplication Layer)
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq(
          "track",
          "Lead",
          {
            content_name: formData.businessName,
            value: formData.leadWhatsApp,
          },
          { eventID: uniqueEventId },
        ); // Passed as the 4th parameter matching configuration
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          eventId: uniqueEventId,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setStep(5); // Thank you step
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for smooth multi-step card transitions
  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-[#060B1A] text-white font-sans antialiased selection:bg-[#E2B233] selection:text-black">
      {/* NAVIGATION BAR */}
      <header className="border-b border-white/5 max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-xl font-extrabold tracking-wider">TRUST CHECK</div>
        <a
          href="#audit"
          className="border border-[#E2B233] text-[#E2B233] px-4 py-2 rounded-md text-xs font-bold transition-all hover:bg-[#E2B233] hover:text-[#060B1A]"
        >
          Check Your Business
        </a>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* HERO SEGMENT */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E8402B]/12 text-[#E8402B] text-xs font-bold px-3 py-1.5 rounded border border-[#E8402B]/20 tracking-wider mb-5">
            <span className="w-1.5 h-1.5 bg-[#E8402B] rounded-full animate-pulse" />
            BUSINESS UPDATE
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            People judge your business before they ever call you.
          </h1>
          <p className="text-lg text-slate-400 font-normal">
            A simple search on Google can decide if a buyer trusts you. This
            happens before you ever speak to them.
          </p>
        </header>

        {/* VISUAL PHONE DEMO */}
        <div className="bg-white text-slate-800 rounded-2xl p-5 border-6 border-slate-700 shadow-2xl shadow-blue-500/10 my-10 relative">
          <div className="bg-[#F1F3F4] rounded-full px-4 py-2.5 text-sm flex items-center gap-2 mb-6 border border-slate-200 text-slate-900">
            <span>🔍</span>
            <span className="font-semibold">Best business near me</span>
          </div>

          <div className="flex flex-col gap-5">
            {/* Business A */}
            <div className="border-2 border-dashed border-[#2ECC71] rounded-lg p-3 bg-[#2ECC71]/2">
              <div className="text-xs text-slate-500">www.businessA.com</div>
              <div className="text-lg text-[#1A0DAB] font-semibold">
                Business A
              </div>
              <div className="text-sm text-slate-600">
                <span className="text-[#F4B400]">★★★★★</span> 5.0 rating
              </div>
              <div className="flex gap-1.5 mt-2 flex-wrap">
                <span className="text-[11px] bg-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium">
                  ✓ Website
                </span>
                <span className="text-[11px] bg-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium">
                  ✓ Photos
                </span>
                <span className="text-[11px] bg-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium">
                  ✓ Info
                </span>
              </div>
            </div>

            {/* Business B */}
            <div className="border-2 border-dashed border-[#E8402B] rounded-lg p-3 bg-[#E8402B]/2 relative">
              <div className="text-xs text-slate-500">
                facebook.com/empty-page
              </div>
              <div className="text-lg text-[#1A0DAB] font-semibold">
                Business B
              </div>
              <div className="text-sm text-slate-600">No reviews yet</div>
              <div className="flex gap-1.5 mt-2 flex-wrap">
                <span className="text-[11px] bg-red-100 px-2 py-0.5 rounded text-red-600 font-medium">
                  ✗ No Website
                </span>
                <span className="text-[11px] bg-red-100 px-2 py-0.5 rounded text-red-600 font-medium">
                  ✗ No Photos
                </span>
              </div>
              <div className="text-[#E8402B] font-bold text-xs mt-3 flex items-center gap-1.5">
                🛑 Customers skip this one.
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-2 bg-[#FFE873] text-slate-800 p-3 w-36 rounded-sm shadow-xl transform rotate-3 font-bold text-xs leading-snug">
            {"They found them in 6 seconds. Not us."}
          </div>
        </div>

        <div className="text-center my-10">
          <a
            href="#audit"
            className="inline-block bg-[#E2B233] text-black px-8 py-4 font-bold rounded-lg shadow-lg shadow-[#E2B233]/20 transition-transform active:scale-98 hover:scale-102"
          >
            See Your Trust Test
          </a>
        </div>

        {/* LAYMAN STORY INTRO */}
        <section className="space-y-4 mb-14">
          <h2 className="text-2xl font-extrabold mb-4 leading-snug">
            The first look happens before you know it.
          </h2>
          <p className="text-slate-200">
            Think about today. Someone heard about your business. They opened
            Google on their phone. They looked for your name.
          </p>
          <p className="text-slate-200">
            Did they find your details? Or did they see an empty page?
          </p>
          <p className="text-slate-200">
            If your page is empty, strangers feel unsafe.{" "}
            <strong className="text-[#E2B233] font-semibold">
              They do not say goodbye. They do not send a WhatsApp message. They
              just leave.
            </strong>
          </p>
          <p className="text-slate-200">
            You lose a customer, and you never know why. It is not because your
            price is high. It is because they could not find a reason to trust
            you.
          </p>
        </section>

        <hr className="border-white/10 my-10" />

        {/* PROBLEM DEEP DIVE */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold mb-4">
            Good businesses still lose customers quietly.
          </h2>
          <p className="text-slate-200 mb-6">
            You work hard. Your service is great. But people cannot see that
            behind the scenes. If your online space looks empty, they continue
            looking elsewhere.
          </p>

          <div className="flex flex-col gap-4">
            <div className="bg-[#0F172A] border border-white/5 p-5 rounded-xl">
              <h3 className="text-base text-[#E2B233] font-bold mb-1.5">
                No Clear Answers
              </h3>
              <p className="text-sm text-slate-400">
                Customers have simple questions. If they find no answers, they
                look for someone else.
              </p>
            </div>
            <div className="bg-[#0F172A] border border-white/5 p-5 rounded-xl">
              <h3 className="text-base text-[#E2B233] font-bold mb-1.5">
                Bad First Look
              </h3>
              <p className="text-sm text-slate-400">
                An empty screen creates doubt. It makes it hard for strangers to
                choose you.
              </p>
            </div>
            <div className="bg-[#0F172A] border border-white/5 p-5 rounded-xl">
              <h3 className="text-base text-[#E2B233] font-bold mb-1.5">
                Lost Attention
              </h3>
              <p className="text-sm text-slate-400">
                Buyers want things fast. They will click on a competitor who
                looks ready.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-white/10 my-10" />

        {/* SOLUTION MATRIX */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold mb-4">
            Build trust before the first conversation.
          </h2>
          <p className="text-slate-200 mb-6">
            A clean page shows people you are open and ready. It makes buying
            decisions easy for your next customer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white/3 border border-white/5 p-3 rounded-lg text-sm font-medium">
              ✓ Clear details online
            </div>
            <div className="bg-white/3 border border-white/5 p-3 rounded-lg text-sm font-medium">
              ✓ Good first impression
            </div>
            <div className="bg-white/3 border border-white/5 p-3 rounded-lg text-sm font-medium">
              ✓ Safe customer feelings
            </div>
            <div className="bg-white/3 border border-white/5 p-3 rounded-lg text-sm font-medium">
              ✓ More WhatsApp calls
            </div>
          </div>
        </section>

        <hr className="border-white/10 my-10" />

        {/* INTERACTIVE TRUST TEST SYSTEM */}
        <section id="audit" className="scroll-mt-10 mb-14">
          <div className="bg-[#0F172A] border border-[#D4AF37]/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <h2 className="text-2xl font-bold text-[#E2B233] mb-1">
              Take the Silent Trust Test
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Answer simple questions to see your online score.
            </p>

            <div className="min-h-55 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-4"
                  >
                    <p className="text-base font-semibold">
                      What is your business name?
                    </p>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Type your business name here..."
                      autoComplete="off"
                      className="w-full bg-black/20 border border-white/15 rounded-lg p-3.5 text-white text-base outline-none focus:border-[#E2B233] transition-colors"
                    />
                    <button
                      onClick={nextStep}
                      className="w-full bg-[#E2B233] text-black p-4 font-bold rounded-lg transition-transform active:scale-98"
                    >
                      Next Step
                    </button>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-4"
                  >
                    <p className="text-base font-semibold">
                      Do you have a professional website for your business?
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleSelectOption("hasWebsite", "yes")}
                        className="flex-1 bg-white/5 border border-white/15 text-white p-4 font-semibold rounded-lg hover:bg-white/10 transition-colors"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleSelectOption("hasWebsite", "no")}
                        className="flex-1 bg-white/5 border border-white/15 text-white p-4 font-semibold rounded-lg hover:bg-white/10 transition-colors"
                      >
                        No
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-4"
                  >
                    <p className="text-base font-semibold">
                      Can customers see your clear phone number and work photos
                      online?
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleSelectOption("hasInfo", "yes")}
                        className="flex-1 bg-white/5 border border-white/15 text-white p-4 font-semibold rounded-lg hover:bg-white/10 transition-colors"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleSelectOption("hasInfo", "no")}
                        className="flex-1 bg-white/5 border border-white/15 text-white p-4 font-semibold rounded-lg hover:bg-white/10 transition-colors"
                      >
                        No
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Lead Generation Submission */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="bg-[#E8402B]/10 border border-dashed border-[#E8402B] rounded-lg p-4 mb-2 text-sm text-red-200">
                      {formData.hasWebsite === "no" ||
                      formData.hasInfo === "no" ? (
                        <span>
                          ⚠️{" "}
                          <strong>Warning for {formData.businessName}:</strong>{" "}
                          Your search screen has gaps. Strangers are likely
                          leaving your page to call competitors right now.
                        </span>
                      ) : (
                        <span className="text-emerald-300">
                          👍{" "}
                          <strong>Status for {formData.businessName}:</strong>{" "}
                          You have a basic start! However, you can still improve
                          to stand out from competitors.
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 leading-normal">
                      We help business owners look real and trustworthy online.
                      Leave your details below. We will show you how to improve
                      your online presence.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        name="leadName"
                        required
                        value={formData.leadName}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full bg-black/20 border border-white/15 rounded-lg p-3.5 text-sm text-white outline-none focus:border-[#E2B233] transition-colors"
                      />
                      <input
                        type="email"
                        name="leadEmail"
                        required
                        value={formData.leadEmail}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full bg-black/20 border border-white/15 rounded-lg p-3.5 text-sm text-white outline-none focus:border-[#E2B233] transition-colors"
                      />
                      <input
                        type="tel"
                        name="leadWhatsApp"
                        required
                        value={formData.leadWhatsApp}
                        onChange={handleInputChange}
                        placeholder="Your WhatsApp Number"
                        className="w-full bg-black/20 border border-white/15 rounded-lg p-3.5 text-sm text-white outline-none focus:border-[#E2B233] transition-colors"
                      />

                      {submitStatus === "error" && (
                        <p className="text-xs text-red-400">
                          Failed to save configuration. Please try again.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#E2B233] text-black p-4 font-bold rounded-lg disabled:opacity-50 transition-transform active:scale-98"
                      >
                        {isSubmitting
                          ? "Processing Setup..."
                          : "Check My Business"}
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* Step 5: Thank You Response */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-center space-y-3 py-6"
                  >
                    <div className="text-4xl">🎉</div>
                    <h3 className="text-xl font-bold text-[#E2B233]">
                      Thank you, {formData.leadName}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      We have compiled your audit data for{" "}
                      <strong>{formData.businessName}</strong>. Our team will
                      look up your search profile and reach out via WhatsApp at{" "}
                      <strong>{formData.leadWhatsApp}</strong> shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* REAL TESTIMONIAL BLOCK */}
        <section className="mb-14">
          <div className="bg-white/2 border-l-4 border-[#E2B233] p-5 rounded-r-lg">
            <p className="italic text-slate-200 text-sm mb-2">
              {
                "A good online page made us look real. We became easy to find and trust."
              }
            </p>
            <span className="text-xs text-slate-400 font-bold">
              — Business Owner
            </span>
          </div>
        </section>

        {/* FAQS SEGMENT */}
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold mb-4">Questions?</h2>
          <div className="bg-[#0F172A] p-4 rounded-lg">
            <h3 className="text-sm font-bold mb-2">
              Do I need a website if I use social media?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Social media helps people see your posts. A website shows you are
              a real business they can trust.
            </p>
          </div>
          <div className="bg-[#0F172A] p-4 rounded-lg">
            <h3 className="text-sm font-bold mb-2">
              How does the trust check work?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We look at what shows up when people search your name. Then we
              show you how to make it look great.
            </p>
          </div>
          <div className="bg-[#0F172A] p-4 rounded-lg">
            <h3 className="text-sm font-bold mb-2">
              Is this only for big companies?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No. Small businesses need to look good too. It helps you get the
              first call from new clients.
            </p>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="text-center mt-16 space-y-4">
          <h2 className="text-2xl font-extrabold">
            Your next customer may search before they call.
          </h2>
          <p className="text-sm text-slate-400">
            Make sure what they find builds confidence.
          </p>
          <a
            href="#audit"
            className="inline-block bg-[#E2B233] text-black px-8 py-4 font-bold rounded-lg shadow-lg shadow-[#E2B233]/20 transition-transform active:scale-98 hover:scale-102"
          >
            Start Your Trust Check
          </a>
        </section>
      </main>

      {/* FOOTER */}
      {/* <footer className="text-center py-10 border-t border-white/5 text-xs text-slate-500 mt-12">
        <p>© Ellorum Web Solutions</p>
      </footer> */}
    </div>
  );
}
