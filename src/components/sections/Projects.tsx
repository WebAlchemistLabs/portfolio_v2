'use client'

<<<<<<< HEAD
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
=======
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { ExternalLink, GitBranch, ChevronDown, ChevronUp } from 'lucide-react'

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
>>>>>>> 344f380f5dfbf782627728b1ac7a4a9d0f8b59f7
  )
}

export default function Projects() {
<<<<<<< HEAD
=======
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

>>>>>>> 344f380f5dfbf782627728b1ac7a4a9d0f8b59f7
  return (
    <section id="projects" className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36]">
      <div className="max-w-[1320px] mx-auto">

<<<<<<< HEAD
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
=======
        <Reveal>
>>>>>>> 344f380f5dfbf782627728b1ac7a4a9d0f8b59f7
          <div className="flex items-center gap-5 mb-6">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">
              02 — Projects
            </span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
<<<<<<< HEAD

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
=======
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
>>>>>>> 344f380f5dfbf782627728b1ac7a4a9d0f8b59f7
            <div>
              <h2 className="font-display text-[clamp(32px,4vw,60px)] italic text-[#F2EFE8] leading-tight">
                Projects that prove the point.
              </h2>
              <p className="text-sm text-[#9B97A0] font-light mt-3 max-w-lg">
<<<<<<< HEAD
                Every project is live with source code available — built for real business outcomes.
=======
                Showcasing impactful projects and technical achievements built for real business outcomes.
>>>>>>> 344f380f5dfbf782627728b1ac7a4a9d0f8b59f7
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
<<<<<<< HEAD
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
=======
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="group flex flex-col h-full rounded-2xl overflow-hidden hover:border-[#3A3A48] transition-all duration-300"
                  style={{ background: '#16161C', border: '1px solid #2A2A36' }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: '#1E1E26' }}
                      >
                        <span className="font-mono-dm text-[10px] text-[#4A4755] tracking-widest uppercase">
                          {project.title}
                        </span>
                      </div>
                    )}

                    {/* Desktop hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-3 hidden md:flex"
                      style={{ background: 'rgba(14,14,18,0.75)' }}
                    >
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-4 py-2.5 tracking-widest uppercase transition-all"
                          style={{ background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.5)', color: '#C9A96E' }}
                          onClick={e => e.stopPropagation()}
                        >
                          <ExternalLink size={11} /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-4 py-2.5 tracking-widest uppercase transition-all"
                          style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#F2EFE8' }}
                          onClick={e => e.stopPropagation()}
                        >
                          <GitBranch size={11} /> GitHub
                        </a>
                      )}
                    </div>

                    {/* Badge */}
                    {project.badge && (
                      <div className="absolute top-3 left-3">
                        <span
                          className="font-mono-dm text-[9px] px-2.5 py-1 tracking-wider uppercase"
                          style={{
                            background: 'rgba(14,14,18,0.85)',
                            border: '1px solid rgba(201,169,110,0.3)',
                            color: '#C9A96E',
                            backdropFilter: 'blur(8px)',
                          }}
                        >
                          {project.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Mobile-only: always-visible action buttons */}
                  <div
                    className="flex md:hidden items-center gap-3 px-4 py-3 border-b border-[#2A2A36]"
                    style={{ background: '#111118' }}
                  >
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 font-mono-dm text-[10px] py-2.5 tracking-widest uppercase transition-all rounded-lg"
                        style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.35)', color: '#C9A96E' }}
                      >
                        <ExternalLink size={12} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 font-mono-dm text-[10px] py-2.5 tracking-widest uppercase transition-all rounded-lg"
                        style={{ border: '1px solid #2A2A36', color: '#9B97A0' }}
                      >
                        <GitBranch size={12} /> GitHub
                      </a>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display text-xl italic text-[#F2EFE8] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-mono-dm text-[9px] text-[#4A4755] tracking-widest uppercase mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-[#9B97A0] leading-relaxed font-light mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-dm text-[8px] px-2 py-1 tracking-wider uppercase"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #2A2A36', color: '#4A4755' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#2A2A36]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-mono-dm text-[10px] text-[#9B97A0] hover:text-[#C9A96E] transition-colors tracking-widest uppercase flex items-center gap-1.5"
                      >
                        Read more →
                      </Link>
                      {/* Desktop icon links */}
                      <div className="hidden md:flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4A4755] hover:text-[#F2EFE8] transition-colors"
                            title="GitHub Repo"
                          >
                            <GitBranch size={14} />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4A4755] hover:text-[#C9A96E] transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All toggle */}
        <Reveal delay={0.2}>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 font-mono-dm text-[11px] px-8 py-4 tracking-[0.18em] uppercase transition-all duration-300"
              style={{ border: '1px solid #2A2A36', color: '#9B97A0' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#C9A96E'
                el.style.color = '#C9A96E'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#2A2A36'
                el.style.color = '#9B97A0'
              }}
            >
              {showAll ? (
                <><ChevronUp size={14} /> Show Less</>
              ) : (
                <><ChevronDown size={14} /> View All Projects</>
              )}
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
>>>>>>> 344f380f5dfbf782627728b1ac7a4a9d0f8b59f7
