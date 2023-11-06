'use client'

import Script from "next/script";


export function GoogleAnalytics() {
  const trackingId = process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID;
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
          page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  )
}
