"use client";

import { motion } from "framer-motion";
import { PlayCircle, Clock, Share2, Heart } from "lucide-react";

export default function DevotionalPage() {
  // In a real app, you would fetch data based on the URL parameter here.
  // We are using premium mock data to guarantee the UI renders perfectly.
  const devData = {
    date: "Today",
    reference: "John 14:27",
    verse: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    title: "Finding True Peace in the Noise",
    readTime: "3 min read",
    content: "In a world that constantly demands our attention and energy, finding true peace can feel impossible. Our screens flash with urgent news, our schedules overflow, and our minds race to keep up. But the peace Jesus offers is fundamentally different from the temporary relief the world provides.\n\nIt is not merely the absence of conflict or a temporary escape; it is a deep, abiding stillness in the very midst of the storm. It is an anchor. Today, take a deep breath. Release your anxieties, knowing you don't have to carry them alone. You are held by a peace that transcends all understanding."
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 text-center"
      >
        {/* Header Metadata */}
        <div className="flex items-center justify-center gap-4 text-sm font-medium text-gold uppercase tracking-widest">
          <span>{devData.date}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {devData.readTime}</span>
        </div>

        {/* Title & Verse */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
          {devData.title}
        </h1>
        
        <div className="glass-panel p-8 my-10 relative text-left">
          <div className="absolute top-0 left-0 w-1 h-full bg-sunrise-start rounded-l-3xl"></div>
          <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-3">{devData.reference}</h3>
          <p className="text-xl md:text-2xl font-serif text-navy/90 italic leading-relaxed">
            &quot;{devData.verse}&quot;
          </p>
        </div>
      </motion.div>

      {/* Action Bar (Audio & Sharing) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-between py-6 border-y border-navy/10 mb-12"
      >
        <button className="flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors group">
          <PlayCircle className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
          Listen to Audio
        </button>
        <div className="flex gap-4">
          <button className="p-2 rounded-full hover:bg-black/5 text-gray-500 transition-colors"><Heart className="w-5 h-5" /></button>
          <button className="p-2 rounded-full hover:bg-black/5 text-gray-500 transition-colors"><Share2 className="w-5 h-5" /></button>
        </div>
      </motion.div>

      {/* Main Content Body */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="prose prose-lg prose-headings:font-serif prose-p:text-gray-600 prose-p:leading-loose max-w-none"
      >
        {devData.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6">{paragraph}</p>
        ))}
      </motion.div>
    </article>
  );
}