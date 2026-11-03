
"use client";

import Script from "next/script";

export default function BotpressChat() {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://files.bpcontent.cloud/2026/11/03/19/20261103191116-HRH423P4.js"
        strategy="afterInteractive"
      />
    </>
  );
}
