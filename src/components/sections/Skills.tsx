'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', skills: ['Node.js', 'Firebase', 'Firestore', 'REST APIs', 'MySQL', 'SQL'] },
  { category: 'Tools & Design', skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Stripe', 'Vercel', 'Render'] },
  { category: 'Learning', skills: ['UI/UX Design', 'Google UX Certificate', 'Advanced TypeScript', 'QA / Testing'] },
]

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
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
    <section id="skills" className="py-28 md:py-40 px-8 md:px-12 border-t border-[#2A2A36] bg-[#0B0B0F]">
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-5 mb-20">
            <span className="font-mono-dm text-[10px] text-[#C9A96E]/60 tracking-[0.3em] uppercase">03 Stack</span>
            <div className="flex-1 h-px bg-[#2A2A36]" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.1}>
              <div>
                <p className="font-mono-dm text-[10px] text-[#C9A96E]/70 tracking-[0.25em] uppercase mb-5 pb-4 border-b border-[#2A2A36]">{group.category}</p>
                <div className="space-y-3">
                  {group.skills.map((skill, j) => (
                    <motion.div key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.04, duration: 0.5 }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <div className="w-1 h-1 rounded-full bg-[#2A2A36] group-hover:bg-[#C9A96E] transition-colors duration-300 flex-shrink-0" />
                      <span className="text-sm font-light text-[#9B97A0] group-hover:text-[#F2EFE8] transition-colors duration-300">{skill}</span>
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