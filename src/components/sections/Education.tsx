'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    title: 'Software Engineering Technology Advanced Diploma',
    institution: 'Centennial College',
    location: 'Toronto, Ontario',
    status: 'Currently Enrolled',
    statusType: 'active',
    date: 'Expected April 2027',
    description:
      'Advancing technical depth in software engineering with emphasis on scalable systems, structured software design, and production-quality application development. Degree pathway program.',
  },
  {
    title: 'Google UX Design Professional Certificate',
    institution: 'Google / Coursera',
    location: 'Remote',
    status: 'Completed',
    statusType: 'done',
    date: 'July 2025',
    description:
      'Comprehensive UX program covering user research, interface design, prototyping, and usability testing. Applied UX principles to improve product structure and navigation flow across digital products.',
  },
  {
    title: 'Software Engineering Technician Diploma',
    institution: 'Centennial College',
    location: 'Toronto, Ontario',
    status: 'Completed',
    statusType: 'done',
    date: 'December 2025',
    description:
      'Software engineering program centred on application development, software architecture, and practical implementation. Built strong hands on experience across programming, databases, testing, and collaborative delivery.',
  },
]

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

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36] bg-[#0B0B0F]">
      <div className="max-w-[1320px] mx-auto">

        <Reveal>
          <div className="flex items-center gap-5 mb-16">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">Education</span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mb-14">
            <h2 className="font-display text-[clamp(28px,3.5vw,52px)] italic text-[#F2EFE8] leading-[0.95]">
              Academic background.
            </h2>
          </div>
        </Reveal>

        {/* 3-column horizontal grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div
                className="flex flex-col h-full rounded-2xl p-8 hover:border-[#3A3A48] transition-all duration-300"
                style={{
                  background: '#16161C',
                  border: '1px solid #2A2A36',
                  borderTop: `2px solid ${item.statusType === 'active' ? '#C9A96E' : 'rgba(74,222,128,0.5)'}`,
                }}
              >
                {/* Status badge */}
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className="font-mono-dm text-[9px] px-3 py-1.5 rounded-full tracking-wider uppercase"
                    style={
                      item.statusType === 'active'
                        ? { background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.3)', color: '#C9A96E' }
                        : { background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', color: '#4ADE80' }
                    }
                  >
                    {item.status}
                  </span>
                  <span className="font-mono-dm text-[9px] text-[#4A4755] tracking-wider">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-[clamp(16px,1.4vw,20px)] text-[#F2EFE8] leading-snug mb-2 flex-grow-0">
                  {item.title}
                </h3>

                {/* Institution */}
                <p className="font-mono-dm text-[10px] text-[#4A4755] tracking-wider uppercase mb-6">
                  {item.institution} · {item.location}
                </p>

                {/* Description */}
                <p className="text-sm text-[#9B97A0] leading-relaxed font-light mt-auto">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}