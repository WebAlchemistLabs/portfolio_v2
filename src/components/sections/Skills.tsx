'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      'Node.js',
      'REST APIs',
      'Firebase / Firestore',
      'Authentication (JWT / Session-Based)',
      'SQL',
      'Data Modeling',
      'Database Design',
      'API Integration',
    ],
  },
  {
    category: 'Systems & Support',
    skills: [
      'Technical Troubleshooting',
      'Ticket Management',
      'Root Cause Analysis',
      'Windows OS',
      'Linux',
      'Microsoft 365',
      'Azure Fundamentals',
      'DNS / DHCP / TCP-IP',
    ],
  },
  {
    category: 'QA & Testing',
    skills: [
      'Manual Testing',
      'Test Case Design',
      'Bug Reporting',
      'Regression Testing',
      'UAT',
      'API Testing (Postman)',
      'Root Cause Analysis',
      'Test Documentation',
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      'Git',
      'GitHub',
      'Jenkins',
      'Docker',
      'Postman',
      'Remote Debugging (Chrome DevTools / RDP)',
      'Figma',
      'Vercel',
    ],
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36] bg-[#0B0B0F]"
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-5 mb-20">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">
              02 — Stack
            </span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 items-start">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.1} className="self-start">
              <div>
                <p className="font-mono-dm text-[10px] text-[#C9A96E]/70 tracking-[0.25em] uppercase mb-4 pb-3 border-b border-[#2A2A36]">
                  {group.category}
                </p>

                <div className="space-y-2.5">
                  {group.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.08 + j * 0.04,
                        duration: 0.5,
                      }}
                      className="flex items-center gap-2.5 group cursor-default"
                    >
                      <div className="w-1 h-1 rounded-full bg-[#2A2A36] group-hover:bg-[#C9A96E] transition-colors duration-300 flex-shrink-0" />
                      <span className="text-xs md:text-sm font-light text-[#9B97A0] group-hover:text-[#F2EFE8] transition-colors duration-300 leading-snug">
                        {skill}
                      </span>
                    </motion.div>
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