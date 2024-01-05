import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { GoogleAnalytics } from "components/GoogleAnalytics";
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <GoogleAnalytics />
          <Analytics />
          {children}
        </main>
      </body>
    </html>
  );
}
