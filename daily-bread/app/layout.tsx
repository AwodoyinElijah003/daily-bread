import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { BookOpen } from "lucide-react";

// Load Premium Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Daily Bread | Find Peace Daily",
  description: "A modern Christian devotional platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Global Glassmorphic Navigation */}
        <header className="fixed top-0 w-full z-50 border-b border-white/20 bg-white/40 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-navy hover:opacity-80 transition-opacity">
              <BookOpen className="w-5 h-5 text-gold" />
              <span className="font-serif font-semibold text-lg tracking-wide">Daily Bread.</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-navy/80">
              <Link href="/dashboard" className="hover:text-gold transition-colors">Dashboard</Link>
              <Link href="/devotional/today" className="px-4 py-2 bg-navy text-white rounded-full hover:bg-navy/90 transition-all shadow-sm">
                Read Today
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}