"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Bell } from "lucide-react";
import VerseCard from "../../components/features/verse-card.tsx";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-1.5 text-sm font-medium text-navy/80 mb-4"
        >
          <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
          <span>Today&apos;s Devotional is Ready</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif font-semibold tracking-tight text-navy"
        >
          Find Peace in the <br />
          <span className="text-gradient">Daily Bread.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-light leading-relaxed"
        >
          Start your morning with guided devotionals, beautiful scripture, and a moment of calm. Delivered directly to your inbox, completely free.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-navy text-white rounded-full font-medium hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
            Start Reading
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Floating Verse Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl mx-auto mt-32 relative"
      >
        <div className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full" />
        <VerseCard 
          reference="Philippians 4:7"
          text="And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."
        />
      </motion.section>
    </main>
  );
}