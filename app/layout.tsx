import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Busy Bees Tree Service | Expert Tree Removal & Trimming Services",
  description: "Fast, safe and affordable tree services. Licensed & insured tree removal, trimming, stump grinding, and emergency storm services. Free estimates available.",
  keywords: "tree removal, tree trimming, stump grinding, emergency tree service, arborist, tree care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
