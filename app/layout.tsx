import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { OpenpanelProvider } from '@openpanel/nextjs';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://harshithpabbati.com"),
  title: {
    default: "Harshith Pabbati",
    template: "%s | Harshith Pabbati",
  },
  description: "Full Stack Developer",
  openGraph: {
    title: "Harshith Pabbati",
    description: "Full Stack Developer",
    url: "https://harshithpabbati.com",
    siteName: "Harshith Pabbati",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Harshith Pabbati",
    card: "summary_large_image",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010] font-sans",
        geist.className,
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Analytics />
          <SpeedInsights />
          <OpenpanelProvider
            url="https://api.openpanel.dev"
            clientId="08f71e62-9642-406b-aa98-e9a6f95ec49b"
            trackScreenViews={true}
            trackAttributes={true}
            trackOutgoingLinks={true}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
