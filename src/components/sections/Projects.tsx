'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects, Project } from '@/data/projects'
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react'

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const num = String(index + 1).padStart(2, '0')
  const flip = index % 2 !== 0

  return (
    <div
      ref={ref}
      className="relative group border-b border-[#2A2A36] last:border-b-0 overflow-hidden"
    >
      {/* Top border accent that sweeps on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"
        style={{ background: 'linear-gradient(to right, #C9A96E, transparent)' }}
      />

      {/* Giant watermark number */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-display font-bold transition-all duration-700 group-hover:opacity-[0.045]"
          style={{
            fontSize: 'clamp(200px, 28vw, 380px)',
            color: 'rgba(255,255,255,0.02)',
            lineHeight: 1,
          }}
        >
          {num}
        </span>
      </div>

      {/* Row content */}
      <div className={`flex flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[520px] md:min-h-[580px]`}>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: flip ? 60 : -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full md:w-[55%] flex-shrink-0 overflow-hidden"
          style={{ minHeight: 280 }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="w-full h-full" style={{ background: '#1E1E26' }} />
          )}

          {/* Edge fade toward text side */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: flip
                ? 'linear-gradient(to left, rgba(14,14,18,0) 55%, rgba(14,14,18,0.85) 100%)'
                : 'linear-gradient(to right, rgba(14,14,18,0) 55%, rgba(14,14,18,0.85) 100%)',
            }}
          />

          {/* Badge */}
          {project.badge && (
            <div className="absolute top-6 left-6 z-10">
              <span
                className="font-mono-dm text-[9px] px-3 py-1.5 tracking-wider uppercase"
                style={{
                  background: 'rgba(14,14,18,0.82)',
                  border: '1px solid rgba(201,169,110,0.35)',
                  color: '#C9A96E',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {project.badge}
              </span>
            </div>
          )}
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: flip ? -60 : 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-16 py-12 flex-1"
        >
          {/* Counter */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-mono-dm text-[10px] tracking-[0.4em] uppercase mb-5 block"
            style={{ color: 'rgba(201,169,110,0.45)' }}
          >
            {num} / {String(projects.length).padStart(2, '0')}
          </motion.span>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="font-display italic leading-[1.05] mb-3 transition-colors duration-400 group-hover:text-[#C9A96E]"
            style={{ fontSize: 'clamp(30px, 3.5vw, 56px)', color: '#F2EFE8' }}
          >
            {project.title}
          </motion.h3>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="font-mono-dm text-[9px] tracking-[0.28em] uppercase mb-7"
            style={{ color: '#4A4755' }}
          >
            {project.tagline}
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="origin-left h-px w-12 mb-7"
            style={{ background: 'rgba(201,169,110,0.5)' }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="text-sm leading-relaxed font-light mb-8"
            style={{ color: '#9B97A0', maxWidth: 420 }}
          >
            {project.description}
          </motion.p>

          {/* Role tags */}
          {project.roles && project.roles.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.roles.map((role) => (
                <span
                  key={role}
                  className="font-mono-dm text-[8px] px-2.5 py-1 tracking-wider uppercase"
                  style={{
                    background: 'rgba(201,169,110,0.08)',
                    border: '1px solid rgba(201,169,110,0.25)',
                    color: '#C9A96E',
                  }}
                >
                  {role}
                </span>
              ))}
            </motion.div>
          )}

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.54 }}
            className="flex flex-wrap gap-1.5 mb-10"
          >
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="font-mono-dm text-[8px] px-2 py-1 tracking-wider uppercase"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid #2A2A36',
                  color: '#4A4755',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="flex items-center gap-4"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-6 py-3.5 tracking-[0.18em] uppercase transition-all duration-300"
              style={{
                background: 'rgba(201,169,110,0.1)',
                border: '1px solid rgba(201,169,110,0.35)',
                color: '#C9A96E',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(201,169,110,0.2)'
                el.style.borderColor = 'rgba(201,169,110,0.65)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(201,169,110,0.1)'
                el.style.borderColor = 'rgba(201,169,110,0.35)'
              }}
            >
              Case Study <ArrowUpRight size={12} />
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-5 py-3.5 tracking-[0.18em] uppercase transition-all duration-300"
                style={{ border: '1px solid #2A2A36', color: '#9B97A0' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.25)'
                  el.style.color = '#F2EFE8'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#2A2A36'
                  el.style.color = '#9B97A0'
                }}
              >
                <GitBranch size={11} /> GitHub
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A4755] hover:text-[#C9A96E] transition-colors duration-300"
                title="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36]">
      <div className="max-w-[1320px] mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-5 mb-6">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">
              02 — Projects
            </span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
            <div>
              <h2 className="font-display text-[clamp(32px,4vw,60px)] italic text-[#F2EFE8] leading-tight">
                Projects that prove the point.
              </h2>
              <p className="text-sm text-[#9B97A0] font-light mt-3 max-w-lg">
                Every project is live with source code available — built for real business outcomes.
              </p>
            </div>
            <a
              href="https://github.com/WebAlchemistLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-dm text-[10px] text-[#4A4755] hover:text-[#C9A96E] transition-colors tracking-widest uppercase flex items-center gap-2 flex-shrink-0"
            >
              <GitBranch size={12} /> View GitHub
            </a>
          </div>
        </motion.div>

        {/* Project rows */}
        <div className="border-t border-[#2A2A36]">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
