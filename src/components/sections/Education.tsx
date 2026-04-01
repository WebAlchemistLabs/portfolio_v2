'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
    title: 'Software Engineering Technician Diploma',
    institution: 'Centennial College',
    location: 'Toronto, Ontario',
    status: 'Completed',
    statusType: 'done',
    date: 'December 2025',
    description:
      'Software engineering program centred on application development, software architecture, and practical implementation. Built strong hands on experience across programming, databases, testing, and collaborative delivery.',
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

function EducationCard({ item }: { item: typeof education[0] }) {
  return (
    <div
      className="flex flex-col h-full rounded-2xl p-8 hover:border-[#3A3A48] transition-all duration-300"
      style={{
        background: '#16161C',
        border: '1px solid #2A2A36',
        borderTop: `2px solid ${item.statusType === 'active' ? '#C9A96E' : 'rgba(74,222,128,0.5)'}`,
      }}
    >
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

      <h3 className="font-display font-semibold text-[clamp(16px,1.4vw,20px)] text-[#F2EFE8] leading-snug mb-2">
        {item.title}
      </h3>

      <p className="font-mono-dm text-[10px] text-[#4A4755] tracking-wider uppercase mb-6">
        {item.institution} · {item.location}
      </p>

      <p className="text-sm text-[#9B97A0] leading-relaxed font-light mt-auto">
        {item.description}
      </p>
    </div>
  )
}

export default function Education() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section
      id="education"
      className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36] bg-[#0B0B0F]"
    >
      <div className="max-w-[1320px] mx-auto">

        <Reveal>
          <div className="flex items-center gap-5 mb-16">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">
              Education
            </span>
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

        {/* ── Desktop: 3-column grid (unchanged) ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <EducationCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* ── Mobile: show 1 card, expand to all ── */}
        <div className="md:hidden flex flex-col gap-5">
          {/* First card always visible */}
          <Reveal>
            <EducationCard item={education[0]} />
          </Reveal>

          {/* Remaining cards animate in/out */}
          <AnimatePresence>
            {showAll &&
              education.slice(1).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <EducationCard item={item} />
                </motion.div>
              ))}
          </AnimatePresence>

          {/* View All / Show Less toggle */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-2 inline-flex items-center justify-center gap-2 font-mono-dm text-[11px] w-full py-4 tracking-[0.18em] uppercase transition-all duration-300"
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
              <><ChevronUp size={13} /> Show Less</>
            ) : (
              <><ChevronDown size={13} /> View All ({education.length - 1} more)</>
            )}
          </button>
        </div>

      </div>
    </section>
  )
}