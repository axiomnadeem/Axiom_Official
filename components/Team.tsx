'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Code,
  Layers,
  Cpu,
  Palette,
} from 'lucide-react';

const members = [
  {
    name: 'Nadeem',
    role: 'Chief Executive & Full Stack Engineer',
    bio: 'Architecting scalable backend systems and crafting seamless full-stack experiences with a passion for performance.',
    icon: Code,
    accentColor: '#1cd2f7',
    gradientFrom: '#00d4ff',
    gradientTo: 'rgb(170, 124, 255)',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    initials: 'N',
  },
  {
    name: 'Nawed',
    role: 'Systems Architect & Implementation Engineer',
    bio: 'implementing robust systems and optimizing infrastructure to ensure our technology runs smoothly and efficiently, with a focus on reliability and scalability.',
    icon: Cpu,
    accentColor: '#00ff88',
    gradientFrom: '#00ff88',
    gradientTo: '#00d4ff',
    skills: ['Python', 'ML/AI', 'FastAPI', 'Cloud',"Typescript"],
    initials: 'N',
  },
  {
    name: 'Bilal',
    role: 'Data Analyst and Visualization Engineer',
    bio: 'Analyzing data to uncover insights and crafting intuitive interfaces that turn complex data into actionable intelligence.',
    icon: Layers,
    accentColor: '#0099ff',
    gradientFrom: '#0099ff',
    gradientTo: '#00d4ff',
    skills: ['Typescript', "Python", "Tensorflow"],
    initials: 'B',
  },
  {
    name: 'Raheman',
    role: 'Design and Graphics Lead',
    bio: 'designing user-centric products and crafting compelling visual narratives that bring our vision to life with creativity and precision.',
    icon: Palette,
    accentColor: '#ff6b35',
    gradientFrom: '#ff6b35',
    gradientTo: '#ff0080',
    skills: ['Product', 'Design', 'Strategy', 'Research'],
    initials: 'R',
  },
];

function MemberCard({
  member,
  index,
}: {
  member: (typeof members)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = member.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/14 transition-all duration-500 cursor-default"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${member.accentColor}60, transparent)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -20%, ${member.accentColor}08 0%, transparent 70%)`,
        }}
      />

      <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-5">
          <div className="relative">
            <div
              className="w-11 h-11 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-xl flex items-center justify-center text-base sm:text-lg md:text-xl font-bold text-white shrink-0 group-hover:scale-105 transition-transform duration-300"
              style={{
                background: `linear-gradient(135deg, ${member.gradientFrom}30, ${member.gradientTo}20)`,
                border: `1px solid ${member.accentColor}30`,
                boxShadow: `0 0 20px ${member.accentColor}15`,
                fontFamily: 'var(--font-space)',
              }}
            >
              {member.initials}
            </div>
            <div
              className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-lg flex items-center justify-center"
              style={{
                background: `${member.accentColor}20`,
                border: `1px solid ${member.accentColor}30`,
              }}
            >
              <Icon size={8} style={{ color: member.accentColor }} className="sm:hidden" />
              <Icon size={10} style={{ color: member.accentColor }} className="hidden sm:block" />
            </div>
          </div>

          <div className="min-w-0">
            <h3
              className="text-base sm:text-lg font-bold text-white truncate"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold" style={{ color: member.accentColor }}>
              {member.role}
            </p>
          </div>
        </div>

        <p className="text-white/45 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 flex-1">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-5">
          {member.skills.map((s) => (
            <span
              key={s}
              className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-medium"
              style={{
                color: member.accentColor,
                background: `${member.accentColor}10`,
                border: `1px solid ${member.accentColor}20`,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/[0.06]">
          {[Github, Linkedin, Twitter].map((SocialIcon, i) => (
            <a
              key={i}
              href="#"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <SocialIcon size={11} className="sm:hidden" />
              <SocialIcon size={13} className="hidden sm:block" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="team" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute left-0 top-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute right-0 bottom-1/3 w-56 sm:w-80 h-56 sm:h-80 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#00ff88] mb-3 sm:mb-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5">
            The Team
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-space)' }}
          >
            Engineers & <span className="gradient-text">creators</span>
            <br />
            behind the vision
          </h2>
          <p className="text-white/40 max-w-md sm:max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Four minds united by a shared obsession with precision, craft, and
            building technology that genuinely matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {members.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
