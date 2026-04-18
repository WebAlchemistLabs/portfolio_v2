'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const traits = [
  'Full Stack Developer',
  'Web Application Systems',
  'Technical Support & Troubleshooting',
  'SaaS & API Integration',
  'Business-Focused Solutions',
]

const bullets = [
  'Built and supported full-stack applications with real world business use cases',
  'Strong troubleshooting across frontend, backend, and user environments',
  'Experience with ticketing systems and structured issue resolution workflows',
  'Delivered scalable solutions across booking, e-commerce, dashboards, and support tools',
]

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36]">
      <div className="max-w-[1320px] mx-auto">

        <Reveal>
          <div className="flex items-center gap-5 mb-20">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">01 About</span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

          {/* Photo */}
          <Reveal className="lg:col-span-4" delay={0.05}>
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid #2A2A36',
                  aspectRatio: '3/4',
                  maxHeight: 480,
                }}
              >
                <Image
                  src="/M1.jpg"
                  alt="Marlon Haynes"
                  fill
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(14,14,18,0.7) 0%, transparent 50%)' }}
                />
              </div>

              <div className="mt-5">
                <h3 className="font-display text-2xl font-semibold text-[#F2EFE8] mb-1">Marlon Haynes</h3>
                <p className="font-mono-dm text-[10px] text-[#9B97A0] tracking-widest uppercase">
                  Full Stack Developer · Technical Support · Toronto, Canada
                </p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-8">

            <Reveal delay={0.1}>
              <p className="font-mono-dm text-[11px] text-[#C9A96E]/70 tracking-[0.25em] uppercase mb-4">About Me</p>
              <h2 className="font-display text-[clamp(32px,4vw,56px)] font-semibold text-[#F2EFE8] leading-tight mb-8">
                Building systems that are reliable, efficient, and ready for real use
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-2 mb-8">
                {traits.map((t) => (
                  <span
                    key={t}
                    className="font-mono-dm text-[10px] px-4 py-2 rounded-full tracking-wider"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid #2A2A36',
                      color: '#9B97A0',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-5 mb-10">
                <p className="text-base text-[#B8B4C0] leading-relaxed font-light">
                  I am a full stack developer with a strong focus on building practical applications that go beyond basic demos.
                </p>
                <p className="text-base text-[#B8B4C0] leading-relaxed font-light">
                  My experience includes developing systems such as booking platforms, dashboards, and business tools that handle real users and real data.
                </p>
                <p className="text-base text-[#B8B4C0] leading-relaxed font-light">
                  I work with modern technologies including React, Next.js, TypeScript, and backend systems involving APIs, authentication, and databases.
                </p>
                <p className="text-base text-[#B8B4C0] leading-relaxed font-light">
                  I approach development with a focus on clarity, performance, and maintainability, while also understanding testing, debugging, and system support.
                </p>
                <p className="text-base text-[#B8B4C0] leading-relaxed font-light">
                  I am currently open to opportunities in frontend development, full stack development, quality assurance, and IT support roles.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="space-y-3 mb-12">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#C9A96E] mt-2.5 flex-shrink-0" />
                    <span className="text-sm text-[#9B97A0] leading-relaxed font-light">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 font-mono-dm text-[11px] px-7 py-3.5 tracking-[0.15em] uppercase transition-all duration-300"
                  style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.35)', color: '#C9A96E' }}>
                  View Projects
                </a>

                <a href="#contact" className="inline-flex items-center gap-2 font-mono-dm text-[11px] px-7 py-3.5 tracking-[0.15em] uppercase transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(242,239,232,0.65)' }}>
                  Contact Me
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  )
}
