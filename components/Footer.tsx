'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Send } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail('');
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <footer id="contact" className="relative pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.4) 30%, rgba(0,255,136,0.4) 60%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-16 sm:h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,212,255,0.03) 0%, transparent 100%)',
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,153,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 mb-12 sm:mb-16 md:mb-20 text-center relative overflow-hidden border border-white/[0.08]"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(0,153,255,0.03) 50%, rgba(0,255,136,0.03) 100%)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10">
            <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#00d4ff] mb-3 sm:mb-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5">
              Get In Touch
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Ready to build something{' '}
              <span className="gradient-text">extraordinary?</span>
            </h2>
            <p className="text-white/40 max-w-sm sm:max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed text-xs sm:text-sm md:text-base px-2">
              Whether you have a project in mind or just want to connect —
              we&apos;re always open to conversations about ambitious ideas and
              future collaborations.
            </p>

            <form
              onSubmit={handleContact}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-sm sm:max-w-md mx-auto mb-5 sm:mb-8"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm text-white placeholder-white/30 outline-none focus:ring-1 focus:ring-[#00d4ff]/40 transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-[#080b11] font-semibold text-xs sm:text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-105"
              >
                {sent ? (
                  <>Sent!</>
                ) : (
                  <>
                    <Send size={13} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <a
              href="mailto:axiomdynamics17@gmail.com"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#00d4ff] text-xs sm:text-sm transition-colors duration-200"
            >
              <Mail size={13} />
              axiomdynamics17@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-white/[0.06]"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer">
            {/* Custom SVG Logo matching Navbar */}
            <svg 
              viewBox="0 0 100 53" 
              className="w-6 h-auto sm:w-7 fill-none drop-shadow-[0_0_10px_rgba(0,212,255,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.6)] transition-all duration-300" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#00d4ff">
                <rect x="0" y="0" width="6" height="53" />
                <rect x="94" y="0" width="6" height="53" />
                <rect x="0" y="23.5" width="100" height="6" />
              </g>
              <circle 
                cx="50" 
                cy="26.5" 
                r="13" 
                stroke="#00d4ff" 
                strokeWidth="6" 
                fill="none"
              /> 
            </svg>
            <span
              className="text-sm sm:text-base font-bold text-white group-hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Axiom <span className="text-[#00d4ff]">Dynamics</span>
            </span>
          </div>

          <p className="text-white/25 text-[10px] sm:text-xs text-center tracking-wide">
            Building intelligent digital systems — one line at a time.
          </p>

          <div className="flex items-center gap-2 sm:gap-3">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white/30 hover:text-white transition-all duration-200 hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <Icon size={13} className="sm:hidden" />
                <Icon size={15} className="hidden sm:block" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-white/15 text-[10px] sm:text-xs">
            &copy; {new Date().getFullYear()} Axiom Dynamics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}