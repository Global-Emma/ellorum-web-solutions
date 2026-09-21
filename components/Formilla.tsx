"use client";

import Script from "next/script";

declare global {
  interface Window {
    Formilla: {
      guid: string;
      loadWidgets: () => void;
    };
  }
}

export default function FormillaChat() {
  return (
    <Script
      src="https://www.formilla.com/scripts/feedback.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.Formilla) {
          window.Formilla.guid =
            "cs7b4c31-696a-45e2-a8e3-eaa253db753c";

          window.Formilla.loadWidgets();
        }
      }}
    />
  );
}