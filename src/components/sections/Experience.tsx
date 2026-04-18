'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    title: 'Software Engineering Technology Advanced Diploma',
    institution: 'Centennial College · Toronto, Ontario',
    status: 'Currently Enrolled',
    statusColor: '#C9A96E',
    date: 'Expected April 2027',
    description: 'Currently advancing technical depth in software engineering technology with emphasis on scalable systems, structured software design, and production-quality application development.',
  },
  {
    title: 'Google UX Design Professional Certificate',
    institution: 'Google / Coursera · Remote',
    status: 'Completed',
    statusColor: '#4ADE80',
    date: 'July 2025',
    description: 'Completed a UX program focused on user research, interface design, prototyping, and usability testing. Applied UX principles to improve product structure, navigation flow, and clarity across digital experiences.',
  },
  {
    title: 'Software Engineering Technician Diploma',
    institution: 'Centennial College · Toronto, Ontario',
    status: 'Completed',
    statusColor: '#4ADE80',
    date: 'December 2025',
    description: 'Completed a software engineering program centered on application development, software architecture, and practical implementation. Built strong hands on experience across programming, databases, testing, and collaborative delivery.',
  },
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36] bg-[#0B0B0F]">
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-5 mb-20">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">Education</span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
        </Reveal>

        <div className="max-w-2xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#2A2A36]" />

            <div className="space-y-10">
              {education.map((item, i) => (
                <Reveal key={i} delay={i * 0.12}>
                  <div className="relative pl-10">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#2A2A36] bg-[#0B0B0F]"
                      style={{ boxShadow: `0 0 0 3px rgba(201,169,110,0.15)` }}
                    />

                    {/* Card */}
                    <div
                      className="rounded-xl p-6"
                      style={{
                        background: 'rgba(22,22,28,0.8)',
                        border: '1px solid #2A2A36',
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-display font-semibold text-lg text-[#F2EFE8] leading-snug mb-1">{item.title}</h3>
                          <p className="font-mono-dm text-[10px] text-[#4A4755] tracking-wider uppercase">{item.institution}</p>
                        </div>
                        <span
                          className="font-mono-dm text-[9px] px-3 py-1.5 rounded-full tracking-wider uppercase flex-shrink-0"
                          style={{
                            background: item.status === 'Currently Enrolled' ? 'rgba(201,169,110,0.1)' : 'rgba(74,222,128,0.1)',
                            border: `1px solid ${item.status === 'Currently Enrolled' ? 'rgba(201,169,110,0.3)' : 'rgba(74,222,128,0.3)'}`,
                            color: item.statusColor,
                          }}
                        >
                          {item.status} · {item.date}
                        </span>
                      </div>
                      <p className="text-sm text-[#9B97A0] leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}