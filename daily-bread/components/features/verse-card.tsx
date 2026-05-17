"use client";

import { motion } from "framer-motion";
import { Share2, BookmarkPlus } from "lucide-react";

interface VerseCardProps {
  reference: string;
  text: string;
}

export default function VerseCard({ reference, text }: VerseCardProps) {
  return (
    <motion.div 
      className="glass-panel p-8 md:p-12 relative overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Decorative quotes */}
      <span className="absolute top-4 left-6 text-8xl font-serif text-gold/10 select-none">"</span>
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">{reference}</h3>
        <p className="text-2xl md:text-4xl font-serif leading-snug text-navy/90">
          {text}
        </p>
        
        {/* Microinteractions block */}
        <div className="flex items-center gap-4 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 rounded-full hover:bg-white/50 text-gray-500 hover:text-navy transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/50 text-gray-500 hover:text-navy transition-colors">
            <BookmarkPlus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}