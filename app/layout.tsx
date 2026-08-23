import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const clash = localFont({
  src: [
    {
      path: "./fonts/clash-display-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/clash-display-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

const cabinet = localFont({
  src: [
    {
      path: "./fonts/cabinet-grotesk-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${clash.variable} ${cabinet.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-paper">
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
