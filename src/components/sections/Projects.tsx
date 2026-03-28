'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 border-t border-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto">

        <Reveal>
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <span className="font-mono-dm text-[10px] text-[#444444] tracking-[0.3em] uppercase">03 / Work</span>
              <div className="w-24 h-px bg-[#1A1A1A]" />
            </div>
            <a href="https://github.com/WebAlchemistLabs" target="_blank" rel="noopener noreferrer" className="font-mono-dm text-[10px] text-[#444444] hover:text-[#EFEFEF] transition-colors tracking-widest uppercase flex items-center gap-2">
              <GitBranch size={12} />
              GitHub <ArrowRight size={10} />
            </a>
          </div>
        </Reveal>

        <div className="space-y-0">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <div className="group border-t border-[#1A1A1A] py-10 hover:bg-[#0F0F0F] transition-colors duration-200 px-0 hover:px-4 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">

                  <div className="lg:w-16 flex-shrink-0 flex items-start gap-3">
                    <span className="font-mono-dm text-[10px] text-[#333333] tracking-widest">{String(index + 1).padStart(2, '0')}</span>
                    {project.badge && (
                      <span className="font-mono-dm text-[8px] text-accent border border-accent/30 px-2 py-1 tracking-wider uppercase">{project.badge}</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div>
                        <h3 className="font-body font-black text-2xl md:text-3xl text-[#EFEFEF] leading-tight mb-1 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-mono-dm text-[10px] text-[#444444] tracking-widest uppercase">{project.tagline}</p>
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-mono-dm text-[10px] text-[#444444] hover:text-[#EFEFEF] transition-colors tracking-widest uppercase flex items-center gap-1.5">
                            <GitBranch size={11} /> Code
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono-dm text-[10px] text-accent hover:text-accent-hover transition-colors tracking-widest uppercase flex items-center gap-1.5">
                            <ExternalLink size={11} /> Live
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="font-body text-sm text-[#888888] leading-relaxed mb-6 max-w-2xl">{project.description}</p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6 border-t border-[#1A1A1A] pt-6">
                      {[
                        { label: 'Problem', value: project.problem },
                        { label: 'Solution', value: project.solution },
                        { label: 'Impact', value: project.impact },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="font-mono-dm text-[9px] text-[#333333] tracking-[0.25em] uppercase mb-2">{item.label}</p>
                          <p className="font-body text-xs text-[#666666] leading-relaxed">{item.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono-dm text-[9px] text-[#444444] border border-[#1A1A1A] px-2.5 py-1 tracking-wider uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[#1A1A1A]" />
        </div>
      </div>
    </section>
  )
}