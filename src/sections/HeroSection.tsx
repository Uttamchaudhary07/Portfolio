import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-bg">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-purple/[0.07] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-orange/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Role tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-accent-purple/80 border border-accent-purple/15 rounded-full px-5 py-2 bg-accent-purple/[0.04] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse flex-shrink-0" />
            {portfolioData.personal.title} &nbsp;·&nbsp; {portfolioData.personal.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(4rem,14vw,9rem)] font-black tracking-tighter leading-[0.88] mb-8 select-none"
        >
          <span className="block text-white">Uttam</span>
          <span className="block font-serif italic font-medium gradient-text">
            Chaudhary
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-gray-500 text-base md:text-lg max-w-[38rem] mx-auto mb-12 leading-relaxed font-light"
        >
          {portfolioData.personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-28"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="px-8 py-3 bg-accent-purple text-white text-sm font-semibold rounded-lg hover:bg-[#6d28d9] hover:shadow-2xl hover:shadow-accent-purple/25 active:scale-95 transition-all duration-300 cursor-hover"
          >
            View Projects
          </button>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/10 text-gray-400 text-sm font-semibold rounded-lg hover:border-accent-orange/40 hover:text-accent-orange active:scale-95 transition-all duration-300 cursor-hover"
          >
            LinkedIn Profile →
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          onClick={() => scrollTo('#about')}
          className="flex flex-col items-center gap-2 text-gray-700 hover:text-gray-500 transition-colors cursor-hover group"
        >
          <span className="text-[10px] tracking-[0.22em] uppercase font-semibold">Scroll</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};
