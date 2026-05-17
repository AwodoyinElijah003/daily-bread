"use client";

import { motion, type Variants } from "framer-motion";
import { Flame, Mail, Bookmark, Settings, Calendar } from "lucide-react";

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-navy">Welcome back, Elijah.</h1>
        <p className="text-gray-500 mt-2">Here is your spiritual journey at a glance.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Streak Card (Spans 2 columns on desktop) */}
        <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-2 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-sunrise-start/10 rounded-full blur-3xl group-hover:bg-sunrise-start/20 transition-all"></div>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold text-navy flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" /> Current Streak
              </h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-6xl font-serif font-bold text-navy">12</span>
                <span className="text-gray-500 font-medium">Days</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">You&apos;re in the top 15% of readers this week!</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-2xl">
              <Calendar className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </motion.div>

        {/* Email Settings Card */}
        <motion.div variants={itemVariants} className="glass-panel p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-navy flex items-center gap-2">
              <Mail className="w-5 h-5 text-gold" /> Daily Delivery
            </h2>
            <p className="text-sm text-gray-500 mt-2">Your devotional arrives at:</p>
            <p className="text-2xl font-serif font-bold text-navy mt-2">7:00 AM</p>
          </div>
          <button className="mt-6 w-full py-2.5 bg-white/50 hover:bg-white text-navy font-medium rounded-xl border border-white/60 transition-all text-sm flex items-center justify-center gap-2">
            <Settings className="w-4 h-4" /> Edit Time
          </button>
        </motion.div>

        {/* Saved Verses Card (Spans full width) */}
        <motion.div variants={itemVariants} className="glass-panel p-8 md:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-navy flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-gold" /> Saved Verses
            </h2>
            <button className="text-sm font-medium text-gold hover:text-gold-light transition-colors">View All</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white/40 rounded-2xl border border-white/50 hover:-translate-y-1 transition-transform cursor-pointer">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Philippians 4:7</h4>
              <p className="font-serif text-navy/90 text-sm line-clamp-2">&quot;And the peace of God, which transcends all understanding...&quot;</p>
            </div>
            <div className="p-5 bg-white/40 rounded-2xl border border-white/50 hover:-translate-y-1 transition-transform cursor-pointer">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Isaiah 41:10</h4>
              <p className="font-serif text-navy/90 text-sm line-clamp-2">&quot;So do not fear, for I am with you; do not be dismayed...&quot;</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}