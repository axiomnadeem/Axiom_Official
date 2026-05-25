'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const target = hovered || activeLink;
    if (target && linkRefs.current[target] && navRef.current) {
      const btn = linkRefs.current[target]!;
      const nav = navRef.current;
      const btnRect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hovered, activeLink]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'py-0' : 'py-2 sm:py-3'
        }`}
      >
        {/* Ambient glow top line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 max-w-md"
          style={{
            background: scrolled
              ? 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)'
              : 'transparent',
            transition: 'all 0.7s ease',
          }}
        />

        <div
          className={`mx-3 sm:mx-6 lg:mx-auto lg:max-w-5xl rounded-2xl transition-all duration-700 ${
            scrolled
              ? 'bg-[rgba(8,11,17,0.75)] backdrop-blur-2xl border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,212,255,0.04)]'
              : 'bg-transparent border border-transparent'
          }`}
          style={{
            marginTop: scrolled ? '10px' : '0',
          }}
        >
          <div
            ref={navRef}
            className="px-4 sm:px-5 flex items-center justify-between h-14 sm:h-16 relative"
          >
            {/* Logo */}
            <motion.button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2 group z-10"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
         {/* Premium Logo Container */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 group z-10 flex-shrink-0 cursor-pointer">
                
                {/* Ambient Background Glow - Subtle monochromatic cyan */}
                <div 
                  className="absolute inset-0 bg-[#00d4ff] opacity-10 blur-[10px] rounded-xl group-hover:opacity-30 group-hover:blur-[14px] transition-all duration-500" 
                />
                
                {/* Glassmorphic Box */}
                <div className="relative w-full h-full flex items-center justify-center bg-[#080b11]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:border-white/30 transition-all duration-300 group-hover:scale-[1.02]">
                  
                  {/* Solid/Clean SVG Logo */}
                  <svg 
                    viewBox="0 0 100 53" 
                    className="w-8 h-8 sm:w-9 sm:h-9 fill-none drop-shadow-[0_2px_8px_rgba(0,212,255,0.3)]" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Solid crisp cyan color matching the navbar theme */}
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
                  
                </div>
              </div>

              <div className="flex items-baseline gap-0.5">
                <span
                  className="text-[15px] sm:text-[16px] font-semibold text-white tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-space, "Space Grotesk", sans-serif)', letterSpacing: '-0.03em' }}
                >
                  Axiom
                </span>
                <span
                  className="text-[15px] sm:text-[16px] font-semibold tracking-[-0.02em]"
                  style={{
                    fontFamily: 'var(--font-space, "Space Grotesk", sans-serif)',
                    letterSpacing: '-0.03em',
                    color: '#00d4ff',
                  }}
                >
                  {' '}Dynamics
                </span>
              </div>
            </motion.button>

            {/* Desktop nav links — floating pill indicator */}
            <div
              className="hidden md:flex items-center gap-0.5 relative"
              onMouseLeave={() => setHovered(null)}
            >
              {/* Sliding pill background */}
              <div
                className="absolute top-1/2 -translate-y-1/2 h-8 rounded-lg pointer-events-none"
                style={{
                  left: pillStyle.left,
                  width: pillStyle.width,
                  opacity: pillStyle.opacity,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'left 0.25s cubic-bezier(0.4,0,0.2,1), width 0.2s ease, opacity 0.2s ease',
                }}
              />

              {navLinks.map((link) => (
                <button
                  key={link.label}
                  ref={(el) => { linkRefs.current[link.href] = el; }}
                  onClick={() => handleNav(link.href)}
                  onMouseEnter={() => setHovered(link.href)}
                  className="relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg z-10"
                  style={{
                    color:
                      activeLink === link.href
                        ? 'rgba(255,255,255,0.95)'
                        : 'rgba(255,255,255,0.5)',
                    fontFamily: '"DM Sans", sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {link.label}
                  {/* Active dot */}
                  {activeLink === link.href && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: '#00d4ff' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2 sm:gap-3 z-10">
              <motion.button
                onClick={() => handleNav('#contact')}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0070f3 100%)',
                  color: '#070a10',
                  fontFamily: '"DM Sans", sans-serif',
                  letterSpacing: '-0.01em',
                  boxShadow: '0 2px 12px rgba(0,212,255,0.2)',
                }}
                whileHover={{
                  boxShadow: '0 4px 24px rgba(0,212,255,0.4)',
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                Get in Touch
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>

              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl"
                style={{
                  background: mobileOpen ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid',
                  borderColor: mobileOpen ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.08)',
                  color: mobileOpen ? '#00d4ff' : 'rgba(255,255,255,0.6)',
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={16} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed z-50 md:hidden"
              style={{
                top: '76px',
                left: '12px',
                right: '12px',
                background: 'rgba(10,14,22,0.92)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '8px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.04)',
              }}
            >
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left px-4 py-3 rounded-xl transition-all duration-150 text-sm font-medium"
                    style={{
                      color: 'rgba(255,255,255,0.65)',
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.95)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)';
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <div className="h-px mx-2 my-1" style={{ background: 'rgba(255,255,255,0.06)' }} />

                <motion.button
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.05, duration: 0.2 }}
                  onClick={() => handleNav('#contact')}
                  className="mx-0.5 mb-0.5 px-4 py-3 rounded-xl text-sm font-semibold text-center"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #0070f3 100%)',
                    color: '#070a10',
                    fontFamily: '"DM Sans", sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Get in Touch →
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}