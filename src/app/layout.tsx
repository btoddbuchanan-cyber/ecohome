import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ecohome.net"),
  title: {
    default: "Ecohome — Build Better, Renovate Better, Live Better",
    template: "%s | Ecohome",
  },
  description:
    "North America's trusted green building resource. Expert guides, professional directory, and tools for building efficient, sustainable homes affordably.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ecohome",
    title: "Ecohome — Build Better, Renovate Better, Live Better",
    description:
      "North America's trusted green building resource. Expert guides, professional directory, and tools for building efficient, sustainable homes affordably.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecohome — Build Better, Renovate Better, Live Better",
    description:
      "North America's trusted green building resource. Expert guides, professional directory, and tools for building efficient, sustainable homes affordably.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
