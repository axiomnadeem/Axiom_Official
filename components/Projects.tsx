'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ExternalLink,
  Github,
  BookOpen,
  Layers,
  Sparkles,
  Cpu,
  Scissors,
  Palette,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Liminal Study Partner',
    category: 'EdTech · AI Platform',
    tagline: 'The Complete Student Operating System',
    description:
      'A comprehensive academic productivity platform engineered to transform the way students learn, plan, and perform. Liminal delivers intelligent scheduling, adaptive revision systems, smart question management, and deep progress analytics — all unified in a single cohesive workflow engine.',
    features: [
      'Intelligent scheduling',
      'Adaptive revision',
      'Question practice and management',
      'Progress analytics',
      'Focus flow modes',
      'Smart organization',
      'Deeply analyzed tests'
    ],
    accentColor: '#00d4ff',
    accentSecondary: '#0099ff',
    borderGlow: 'rgba(32, 32, 32, 0.67)',
    icons: [BookOpen, Cpu, Sparkles],
    demoBtn: { label: 'Live Demo', href: '#' },
    codeBtn: { label: 'View Project', href: '#' },
    mockupContent: (
      <div className="w-full h-full flex flex-col gap-2 p-3 sm:p-4">
        <div className="flex gap-1.5 sm:gap-2 mb-1">
          <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-red-400/60" />
          <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-yellow-400/60" />
          <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-400/60" />
        </div>
        <div className="flex gap-2">
          <div className="w-1/3 flex flex-col gap-1.5">
            <div className="h-1.5 sm:h-2 rounded-full bg-[#00d4ff]/40 w-4/5" />
            <div className="h-1 sm:h-1.5 rounded-full bg-white/10 w-3/4" />
            <div className="h-1 sm:h-1.5 rounded-full bg-white/10 w-2/3" />
            <div className="h-1 sm:h-1.5 rounded-full bg-white/10 w-4/5 mt-2" />
            <div className="h-1 sm:h-1.5 rounded-full bg-white/10 w-3/5" />
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-6 sm:h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center px-2 gap-2">
              <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-[#00d4ff]/60" />
              <div className="h-1 sm:h-1.5 flex-1 rounded-full bg-[#00d4ff]/30" />
            </div>
            <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 sm:h-6 rounded bg-white/5 border border-white/5" />
              ))}
            </div>
            <div className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-[#00d4ff]/40 to-[#0099ff]/20 w-3/4" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Fabrixa Studio',
    category: 'FashionTech · 3D Design',
    tagline: 'Advanced Textile & Fashion Design Platform',
    description:
      'A cutting-edge design environment bridging the gap between textile craftsmanship and digital innovation. Fabrixa offers seamless 2D/3D garment workflows, photorealistic fabric visualization, intelligent pattern generation, and a full-spectrum material editing suite.',
    features: [
      '2D & 3D workflows',
      'Fabric visualization',
      'Garment customization',
      'Pattern generation',
      'Texture layering',
      'Apparel previews',
    ],
    accentColor: '#ff00b3',
    accentSecondary: '#00d4ff',
    borderGlow: 'rgba(255,0,128,0.25)',
    icons: [Scissors, Palette, Layers],
    demoBtn: { label: 'Open Studio', href: 'https://fabrixa-studio.netlify.app/' },
    codeBtn: { label: 'Learn More', href: '#' },
    mockupContent: (
      <div className="w-full h-full flex flex-col gap-2 p-3 sm:p-4">
        <div className="flex gap-1.5 sm:gap-2 mb-1">
          <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-red-400/60" />
          <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-yellow-400/60" />
          <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-400/60" />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="w-8 sm:w-10 flex flex-col gap-1.5 sm:gap-2 items-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center"
              >
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-[#ff0080]/30" />
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-xl bg-gradient-to-br from-[#ff0080]/10 to-[#00d4ff]/10 border border-white/8 flex items-center justify-center">
            <div className="w-10 h-16 sm:w-16 sm:h-24 rounded-lg bg-gradient-to-b from-[#ff0080]/30 to-[#00d4ff]/20 border border-white/10 relative">
              <div className="absolute inset-1.5 sm:inset-2 rounded bg-white/5 border border-white/5" />
            </div>
          </div>
          <div className="w-1/4 flex flex-col gap-1 sm:gap-1.5">
            <div className="h-1 sm:h-1.5 rounded-full bg-[#ff0080]/50 w-full" />
            <div className="h-1 sm:h-1.5 rounded-full bg-white/10 w-4/5" />
            <div className="h-1 sm:h-1.5 rounded-full bg-white/10 w-3/5" />
            <div className="mt-1 sm:mt-2 flex flex-wrap gap-0.5 sm:gap-1">
              {['#ff0080', '#00d4ff', '#00ff88', '#fff', '#0099ff'].map((c, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full border border-white/10"
                  style={{ background: c + '60' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.07] hover:border-white/15 transition-all duration-500"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.4)',
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${project.borderGlow} 0%, transparent 60%)`,
        }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
              <div className="flex items-center gap-1 sm:gap-1.5">
                {project.icons.map((Icon, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${project.accentColor}15`,
                      border: `1px solid ${project.accentColor}25`,
                    }}
                  >
                    <Icon size={12} style={{ color: project.accentColor }} className="sm:hidden" />
                    <Icon size={14} style={{ color: project.accentColor }} className="hidden sm:block" />
                  </div>
                ))}
              </div>
              <span
                className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                style={{
                  color: project.accentColor,
                  background: `${project.accentColor}12`,
                  border: `1px solid ${project.accentColor}25`,
                }}
              >
                {project.category}
              </span>
            </div>

            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5 sm:mb-2"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4" style={{ color: project.accentColor }}>
              {project.tagline}
            </p>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 sm:gap-2 mb-5 sm:mb-8">
              {project.features.map((f) => (
                <span
                  key={f}
                  className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium text-white/60"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a
              href={project.demoBtn.href}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#080b11] transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentSecondary})`,
                boxShadow: `0 0 25px ${project.accentColor}33`,
              }}
            >
              <ExternalLink size={13} />
              {project.demoBtn.label}
            </a>
            <a
              href={project.codeBtn.href}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
            >
              <Github size={13} />
              {project.codeBtn.label}
            </a>
          </div>
        </div>

        <div className="lg:w-[340px] xl:w-[400px] p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div
            className="w-full h-36 sm:h-44 md:h-48 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] relative"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              boxShadow: `0 0 40px ${project.accentColor}15, inset 0 0 20px rgba(0,0,0,0.2)`,
            }}
          >
            {project.mockupContent}
            <div
              className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(8,11,17,0.5), transparent)',
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,153,255,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#00d4ff] mb-3 sm:mb-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5">
            Featured Work
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-space)' }}
          >
            Projects that <span className="gradient-text">redefine</span>
            <br />
            the standard
          </h2>
          <p className="text-white/40 max-w-md sm:max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Two flagship platforms built with precision engineering, modern
            architecture, and a relentless focus on user experience.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
