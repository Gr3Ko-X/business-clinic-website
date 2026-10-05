import type { Metadata } from "next";
import Script from "next/script";
import { Lora, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

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
  metadataBase: new URL("https://www.indiabusinessclinic.com"),
  title: "India Business Clinic | India Entry & Operational Advisory Solutions",
  description: "Empowering global companies to enter India, and Indian Industries to diagnose, troubleshoot, and resolve industrial challenges through execution-focused advisory.",
  keywords: "India Entry, Industrial Growth, Defence Industrial Licensing, Factory Setup, Vendor Audit, Operational troubleshooting, Industrial consulting India",
  openGraph: {
    title: "India Business Clinic | India Entry & Operational Advisory Solutions",
    description: "Empowering global companies to enter India, and Indian Industries to resolve industrial challenges through execution-focused advisory.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: [
      { url: "/images/logo/ibc-favicon.png?v=2" },
      { url: "/images/logo/ibc-favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/ibc-favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/images/logo/ibc-favicon-48x48.png?v=2", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/images/logo/ibc-favicon.png?v=2",
    apple: [
      { url: "/images/logo/ibc-favicon-180x180.png?v=2", sizes: "180x180", type: "image/png" },
    ],
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
      <head>
        <link rel="canonical" href="https://www.indiabusinessclinic.com/" />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WHRGKCMR');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHRGKCMR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-grow pt-[69px] sm:pt-[76px] lg:pt-[80px]">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
