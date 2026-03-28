'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js', 'MySQL', 'Stripe', 'Figma', 'Git']

const stats = [
  { value: '4+', label: 'Projects shipped' },
  { value: '2', label: 'Diplomas' },
  { value: '10+', label: 'Technologies' },
  { value: '2027', label: 'Degree expected' },
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 border-t border-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto">

        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono-dm text-[10px] text-[#444444] tracking-[0.3em] uppercase">02 / About</span>
            <div className="flex-1 h-px bg-[#1A1A1A]" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <Reveal>
              <h2 className="font-body font-black text-4xl md:text-6xl text-[#EFEFEF] leading-[1.05] tracking-tight mb-10">
                I build things
                <br />
                <span className="text-[#2A2A2A]">people use.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-sm text-[#888888] leading-relaxed font-body mb-10">
                <p>Software Engineering student at Centennial College completing an advanced diploma. I have shipped real SaaS products, e-commerce platforms, and IT tooling — not just tutorial projects.</p>
                <p>My focus is frontend and full-stack development with a strong pull toward UI/UX. I care about the details: fast load times, clean interactions, accessible interfaces, code that scales.</p>
                <p>Looking for my first paid tech role. Ready to ship product on day one.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#0A0A0A] p-6">
                    <div className="font-body font-black text-3xl text-accent mb-1">{s.value}</div>
                    <div className="font-mono-dm text-[10px] text-[#444444] tracking-widest uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <p className="font-mono-dm text-[10px] text-[#444444] tracking-[0.3em] uppercase mb-6">Stack</p>
              <div className="flex flex-wrap gap-2 mb-12">
                {stack.map((tech) => (
                  <span key={tech} className="font-mono-dm text-[10px] text-[#888888] border border-[#1A1A1A] px-3 py-2 hover:border-[#333333] hover:text-[#EFEFEF] transition-all tracking-wider uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-mono-dm text-[10px] text-[#444444] tracking-[0.3em] uppercase mb-6">Currently</p>
              <div className="space-y-4">
                {[
                  { dot: 'bg-accent', text: 'Software Engineering Technology diploma — Centennial College (May 2027)' },
                  { dot: 'bg-accent', text: 'Building BizTrack — SaaS analytics dashboard with Firebase' },
                  { dot: 'bg-accent', text: 'Google UX Design Professional Certificate' },
                  { dot: 'bg-green-400', text: 'Open to frontend, UI/UX, and full-stack roles in Canada' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`w-1 h-1 rounded-full ${item.dot} mt-2 flex-shrink-0`} />
                    <span className="font-body text-sm text-[#888888] leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}