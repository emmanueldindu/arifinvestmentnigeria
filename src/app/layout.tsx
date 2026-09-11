import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arif Investment Nigeria | Best In What We Offer",
  description: "ARIF INVESTMENT NIGERIA is an Indigenous Company that is specialized in all fields of constructions, engineering, IT & Telecommunications, and Real Estate.",
  keywords: "Arif Investment, Construction Nigeria, Real Estate Abuja, Procurement, IT Telecommunications, Engineering Services",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-gray text-brand-dark">
        {children}
      </body>
    </html>
  );
}
