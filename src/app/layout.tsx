import React from "react";
import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eWorkers Cartago",
  description: "Comunidad de trabajadores remotos de Cartago",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://eworkers.club",
    images: [
      {
        url: "https://eworkers.club/og-image.png",
        width: 1200,
        height: 630,
        alt: "eWorkers Cartago",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-white`}>
        <Navbar />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
