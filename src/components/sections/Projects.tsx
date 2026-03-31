'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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

export default function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36]">
      <div className="max-w-[1320px] mx-auto">

        <Reveal>
          <div className="flex items-center justify-between mb-20">
            <div className="flex items-center gap-5">
              <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">02 Projects</span>
              <div className="w-16 h-px bg-[#2A2A36]" />
            </div>
            <a
              href="https://github.com/WebAlchemistLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-dm text-[10px] text-[#4A4755] hover:text-[#C9A96E] transition-colors tracking-widest uppercase flex items-center gap-2"
            >
              <GitBranch size={12} /> All on GitHub <ArrowRight size={11} />
            </a>
          </div>
        </Reveal>

        <div className="space-y-0">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="border-t border-[#2A2A36] py-12">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

                  {/* Index + badge */}
                  <div className="lg:col-span-1 flex lg:flex-col items-start gap-3 pt-1">
                    <span className="font-mono-dm text-[10px] text-[#4A4755] tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {project.badge && (
                      <span
                        className="font-mono-dm text-[8px] px-2 py-1 tracking-wider uppercase whitespace-nowrap"
                        style={{ color: 'rgba(201,169,110,0.7)', border: '1px solid rgba(201,169,110,0.2)' }}
                      >
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Main content */}
                  <div className="lg:col-span-8">
                    <Link href={`/projects/${project.slug}`} className="group block mb-5">
                      <h3 className="font-display text-[clamp(26px,3vw,48px)] italic text-[#F2EFE8] leading-tight mb-1 group-hover:text-[#C9A96E] transition-colors duration-400">
                        {project.title}
                      </h3>
                      <p className="font-mono-dm text-[10px] text-[#4A4755] tracking-widest uppercase">{project.tagline}</p>
                    </Link>

                    <p className="text-sm text-[#9B97A0] leading-relaxed font-light mb-8 max-w-2xl">{project.description}</p>

                    {/* Problem / Solution / Impact */}
                    <div className="grid md:grid-cols-3 gap-6 border-t border-[#2A2A36] pt-7 mb-8">
                      {[
                        { label: 'Problem', value: project.problem },
                        { label: 'Solution', value: project.solution },
                        { label: 'Impact', value: project.impact },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="font-mono-dm text-[9px] text-[#C9A96E]/50 tracking-[0.25em] uppercase mb-2">{item.label}</p>
                          <p className="text-xs text-[#9B97A0] leading-relaxed font-light">{item.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-dm text-[9px] text-[#4A4755] border border-[#2A2A36] px-2.5 py-1.5 tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-5 py-2.5 tracking-[0.14em] uppercase transition-all duration-300"
                        style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.3)', color: '#C9A96E' }}
                        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,169,110,0.2)' }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,169,110,0.1)' }}
                      >
                        Case Study <ArrowRight size={11} />
                      </Link>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-5 py-2.5 tracking-[0.14em] uppercase transition-all duration-300"
                          style={{ border: '1px solid #2A2A36', color: '#9B97A0' }}
                          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#4A4755'; el.style.color = '#F2EFE8' }}
                          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2A2A36'; el.style.color = '#9B97A0' }}
                        >
                          <GitBranch size={11} /> GitHub Repo
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-5 py-2.5 tracking-[0.14em] uppercase transition-all duration-300"
                          style={{ border: '1px solid #2A2A36', color: '#9B97A0' }}
                          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#4A4755'; el.style.color = '#F2EFE8' }}
                          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2A2A36'; el.style.color = '#9B97A0' }}
                        >
                          <ExternalLink size={11} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right — view case study CTA */}
                  <div className="lg:col-span-3 flex lg:flex-col lg:items-end pt-1">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group inline-flex items-center gap-2 font-mono-dm text-[10px] text-[#4A4755] hover:text-[#C9A96E] transition-colors tracking-widest uppercase"
                    >
                      View case study
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[#2A2A36]" />
        </div>
      </div>
    </section>
  )
}