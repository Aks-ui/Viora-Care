import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vioracare.co.uk"),
  title: {
    default: `${site.name} · Cavendish Care Home, Gloucester`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "care home Gloucester",
    "residential care Gloucester",
    "elderly care",
    "Cavendish Care Home",
    "Viora Care",
    "CQC registered care home",
  ],
  openGraph: {
    title: `${site.name} · Cavendish Care Home`,
    description: site.description,
    type: "website",
    locale: "en_GB",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-700 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
