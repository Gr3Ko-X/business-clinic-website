import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Business Clinic | India Entry & Operational Advisory Solutions",
  description: "Empowering global companies to enter India, and Indian Industries to diagnose, troubleshoot, and resolve industrial challenges through execution-focused advisory.",
  keywords: "India Entry, Industrial Growth, Defence Industrial Licensing, Factory Setup, Vendor Audit, Operational troubleshooting, Industrial consulting India",
  openGraph: {
    title: "Business Clinic | India Entry & Operational Advisory Solutions",
    description: "Empowering global companies to enter India, and Indian Industries to resolve industrial challenges through execution-focused advisory.",
    type: "website",
    locale: "en_IN",
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
      className={`${lora.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Header />
        <main className="flex-grow pt-[92px] lg:pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
