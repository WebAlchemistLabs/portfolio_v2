'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react'

function Reveal({ children, delay = 0, className = '' }: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const imageRight = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl overflow-hidden"
      style={{ background: '#16161C', border: hovered ? '1px solid #3A3A48' : '1px solid #2A2A36', transition: 'border-color 0.3s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`grid lg:grid-cols-2 min-h-[480px] ${!imageRight ? 'lg:[direction:rtl]' : ''}`}>

        {/* Content */}
        <div className="flex flex-col justify-between p-5 sm:p-6 md:p-12 lg:p-14 lg:[direction:ltr]">
          <div>
            {/* Number + badge */}
            <div className="flex items-center justify-between mb-8">
              {project.badge && (
                <span
                  className="font-mono-dm text-[9px] px-3 py-1.5 tracking-widest uppercase"
                  style={{
                    background: 'rgba(201,169,110,0.1)',
                    border: '1px solid rgba(201,169,110,0.35)',
                    color: '#C9A96E',
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              className="font-display italic leading-tight mb-2 transition-colors duration-300 break-words"
              style={{
                fontSize: 'clamp(24px, 7vw, 52px)',
                color: hovered ? '#C9A96E' : '#F2EFE8',
              }}
            >
              {project.title}
            </h3>
            <p className="font-mono-dm text-[9px] sm:text-[10px] text-[#4A4755] tracking-[0.14em] sm:tracking-[0.25em] uppercase mb-5 sm:mb-6 break-words">
              {project.tagline}
            </p>
            <p className="text-sm text-[#9B97A0] leading-relaxed font-light mb-8 max-w-md">
              {project.description}
            </p>

            {/* Impact callout */}
            <div
              className="relative pl-4 mb-8"
              style={{ borderLeft: '2px solid rgba(201,169,110,0.5)' }}
            >
              <p className="font-mono-dm text-[9px] text-[#C9A96E]/60 tracking-widest uppercase mb-1.5">
                Impact
              </p>
              <p className="text-sm text-[#B8B4C0] leading-relaxed font-light">
                {project.impact}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <p className="font-mono-dm text-[9px] text-[#C9A96E]/60 tracking-widest uppercase mb-3">
                  Key Features
                </p>
                <ul className="space-y-2.5 max-w-xl">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-[#B8B4C0] leading-relaxed font-light">
                      <span className="text-[#C9A96E]/70">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            {/* Actions */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 font-mono-dm text-[10px] px-5 sm:px-6 py-3 tracking-[0.14em] sm:tracking-widest uppercase transition-all duration-300"
                  style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.4)', color: '#C9A96E' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,169,110,0.22)'; el.style.borderColor = 'rgba(201,169,110,0.7)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,169,110,0.12)'; el.style.borderColor = 'rgba(201,169,110,0.4)' }}
                >
                  <ExternalLink size={11} /> Live Platform
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 font-mono-dm text-[10px] px-5 sm:px-6 py-3 tracking-[0.14em] sm:tracking-widest uppercase transition-all duration-300"
                  style={{ border: '1px solid #2A2A36', color: '#9B97A0' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.color = '#F2EFE8' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2A2A36'; el.style.color = '#9B97A0' }}
                >
                  <GitBranch size={11} /> View Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex flex-col lg:[direction:ltr] w-full p-5 sm:p-6 md:p-8 gap-4 sm:gap-5 justify-center">
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '16/10', minHeight: 220 }}>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                aria-label={`${project.title} live demo`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 660px"
                    style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: '#1E1E26' }}>
                    <span className="font-mono-dm text-[10px] text-[#4A4755] tracking-widest uppercase">{project.title}</span>
                  </div>
                )}
              </a>
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 660px"
                style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: '#1E1E26' }}>
                <span className="font-mono-dm text-[10px] text-[#4A4755] tracking-widest uppercase">{project.title}</span>
              </div>
            )}
            {/* Gradient blend toward content panel */}
            <div
              className="absolute inset-y-0 pointer-events-none w-16"
              style={{
                [imageRight ? 'left' : 'right']: 0,
                background: `linear-gradient(to ${imageRight ? 'right' : 'left'}, #16161C, transparent)`,
              }}
            />
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center gap-2 self-center w-full sm:w-auto sm:min-w-[220px] rounded-full font-mono-dm text-[12px] sm:text-[14px] px-6 sm:px-10 py-4 sm:py-5 tracking-[0.14em] sm:tracking-[0.18em] uppercase transition-all duration-300"
            style={{
              border: '1px solid rgba(201,169,110,0.35)',
              background: 'rgba(201,169,110,0.08)',
              color: hovered ? '#F2EFE8' : '#C9A96E',
            }}
          >
            Case Study <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-[#2A2A36]">
      <div className="max-w-[1320px] mx-auto">

        <Reveal>
          <div className="flex items-center gap-5 mb-6">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">
              01 — Projects
            </span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <h2 className="font-display text-[clamp(32px,4vw,60px)] italic text-[#F2EFE8] leading-tight">
                Featured Projects
              </h2>
              <p className="text-sm text-[#9B97A0] font-light mt-3 max-w-lg">
                Full-stack applications demonstrating strong engineering fundamentals, clean architecture, and practical business solutions.
              </p>
            </div>
          </div>
        </Reveal>

        {/* All projects stacked */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
