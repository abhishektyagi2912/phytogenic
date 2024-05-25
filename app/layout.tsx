import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
