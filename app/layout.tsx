import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Phytogenic",
  description: "Phytogenic a herbal medicine ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
