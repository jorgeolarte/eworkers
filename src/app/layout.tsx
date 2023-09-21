import React from "react";
import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body
        className={`${montserrat.className} text-white bg-[url('/community.jpeg')] bg-cover bg-center bg-gray-700 bg-blend-multiply min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
