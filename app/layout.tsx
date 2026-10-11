import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Providers from "./providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Phytogenic Life Science | Herbal Extracts & Natural Actives",
    template: "%s | Phytogenic Life Science",
  },
  description:
    "Phytogenic Life Science manufactures premium herbal extracts, natural actives and speciality chemicals for the cosmetic and personal care industry.",
  openGraph: {
    title: "Phytogenic Life Science",
    description:
      "Premium herbal extracts, natural actives and speciality chemicals, sourced and manufactured sustainably.",
    siteName: "Phytogenic Life Science",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
