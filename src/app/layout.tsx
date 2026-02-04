import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer & Researcher",
  description: "Building systems with logic, exploring the world through critical inquiry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-parchment text-ink min-h-screen flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>
        <SocialLinks />
        <Navigation />
      </body>
    </html>
  );
}
