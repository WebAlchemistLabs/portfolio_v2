'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, Code2, Bug, Headphones } from 'lucide-react'

const roles = [
  {
    Icon: Monitor,
    title: 'Frontend Developer',
    description:
      'Building responsive, pixel-perfect UIs with React, Next.js, and TypeScript. Strong attention to performance, accessibility, and smooth user experience.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    Icon: Code2,
    title: 'Software Developer',
    description:
      'Architecting full-stack applications from database to API to UI. Comfortable with system design, authentication flows, REST APIs, and cloud deployment.',
    skills: ['Node.js', 'REST APIs', 'Firebase', 'SQL', 'Docker'],
  },
  {
    Icon: Bug,
    title: 'QA Engineer',
    description:
      'Catching bugs before they reach users. Test case design, manual and regression testing, root cause analysis, and thorough bug documentation across frontend and backend.',
    skills: ['Manual Testing', 'Bug Tracking', 'Root Cause Analysis', 'Postman', 'DevTools'],
  },
  {
    Icon: Headphones,
    title: 'IT Support Specialist',
    description:
      'Diagnosing and resolving technical issues across user environments, networks, and enterprise systems. Experienced with ticketing workflows and real support teams.',
    skills: ['Troubleshooting', 'Windows / Linux', 'Microsoft 365', 'Azure', 'DNS / TCP-IP'],
  },
]

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
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

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36]"
      style={{ background: '#0B0B0F' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-5 mb-6">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">
              What I Do
            </span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mb-16">
            <h2 className="font-display text-[clamp(32px,4vw,60px)] italic text-[#F2EFE8] leading-tight">
              One person, four strengths.
            </h2>
            <p className="text-sm text-[#9B97A0] font-light mt-3 max-w-lg">
              I bring value across the full technology lifecycle — from building and shipping, to testing and supporting.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map(({ Icon, title, description, skills }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div
                className="group flex flex-col h-full p-7 rounded-2xl transition-all duration-300 hover:border-[#3A3A48]"
                style={{ background: '#16161C', border: '1px solid #2A2A36' }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.2)' }}
                >
                  <Icon size={18} style={{ color: '#C9A96E' }} />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg italic text-[#F2EFE8] mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#9B97A0] leading-relaxed font-light mb-6 flex-1">
                  {description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-[#2A2A36]">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono-dm text-[8px] px-2 py-1 tracking-wider uppercase"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid #2A2A36',
                        color: '#4A4755',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
