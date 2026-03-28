'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', skills: ['Node.js', 'Firebase', 'Firestore', 'REST APIs', 'MySQL', 'SQL'] },
  { category: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Stripe', 'Vercel', 'Render'] },
  { category: 'Learning', skills: ['UI/UX Design', 'Google UX Cert', 'QA / Testing', 'TypeScript Advanced'] },
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 border-t border-[#1A1A1A] bg-[#080808]">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono-dm text-[10px] text-[#444444] tracking-[0.3em] uppercase">04 / Skills</span>
            <div className="flex-1 h-px bg-[#1A1A1A]" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="bg-[#080808] p-8 h-full">
                <p className="font-mono-dm text-[9px] text-accent tracking-[0.3em] uppercase mb-6 border-b border-[#1A1A1A] pb-4">{group.category}</p>
                <div className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="font-body text-sm text-[#666666] hover:text-[#EFEFEF] transition-colors cursor-default">
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