'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const floatingOrbs = [
  { size: 300, x: '-15%', y: '-20%', color: 'rgba(0,212,255,0.08)', delay: 0 },
  { size: 250, x: '65%', y: '10%', color: 'rgba(0,153,255,0.06)', delay: 0.5 },
  { size: 200, x: '25%', y: '55%', color: 'rgba(0,255,136,0.05)', delay: 1 },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg px-4 sm:px-6"
    >
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative z-10 mb-4 sm:mb-6"
      >
        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border border-[#00d4ff]/20 text-xs sm:text-sm text-[#00d4ff] font-medium">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          Next-Generation Digital Systems
        </div>
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6"
          style={{ fontFamily: 'var(--font-space)' }}
        >
          <span className="text-white">Building</span>{' '}
          <span className="gradient-text">intelligent</span>
          <br />
          <span className="text-white">digital systems</span>
          <br />
          <span className="text-white/40">for the</span>{' '}
          <span className="gradient-text">future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2"
        >
          Axiom Dynamics engineers precision-grade software, AI platforms, and
          next-generation tools that redefine what&apos;s possible at the
          intersection of technology and imagination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
        >
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-[#080b11] font-semibold text-sm sm:text-base hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            Explore Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform sm:hidden"
            />
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform hidden sm:block"
            />
          </button>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl glass border border-white/10 text-white font-semibold text-sm sm:text-base hover:border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300"
          >
            <Play size={14} className="text-[#00d4ff] sm:hidden" />
            <Play size={16} className="text-[#00d4ff] hidden sm:block" />
            Contact Team
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="relative z-10 mt-12 sm:mt-16 md:mt-20 grid grid-cols-3 gap-px w-full max-w-xs sm:max-w-sm md:max-w-xl mx-auto overflow-hidden rounded-2xl border border-white/[0.08]"
      >
        {[
          { label: 'Projects Built', value: '6+' },
          { label: 'Team Members', value: '4' },
          { label: 'Technologies', value: '20+' },
        ].map((stat, i) => (
          <div key={i} className="glass py-3 sm:py-4 md:py-5 px-2 sm:px-4 text-center">
            <div
              className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-0.5 sm:mb-1"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              {stat.value}
            </div>
            <div className="text-[10px] sm:text-xs text-white/40 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.button
        onClick={() =>
          document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/25 hover:text-white/50 transition-colors"
      >
        <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
