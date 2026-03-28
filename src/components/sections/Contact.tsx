'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, GitBranch, Link, Mail, Send } from 'lucide-react'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}

const inputClass = "w-full bg-transparent border border-[#1A1A1A] px-4 py-3 text-sm text-[#EFEFEF] font-body placeholder:text-[#333333] focus:outline-none focus:border-[#444444] transition-colors"

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('sent')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const links = [
    { label: 'GitHub', sub: 'WebAlchemistLabs', href: 'https://github.com/WebAlchemistLabs', Icon: GitBranch },
    { label: 'LinkedIn', sub: 'Connect', href: 'https://linkedin.com/in/your-url', Icon: Link },
    { label: 'Email', sub: 'your@email.com', href: 'mailto:your@email.com', Icon: Mail },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 border-t border-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono-dm text-[10px] text-[#444444] tracking-[0.3em] uppercase">05 / Contact</span>
            <div className="flex-1 h-px bg-[#1A1A1A]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <Reveal>
            <div>
              <h2 className="font-body font-black text-4xl md:text-6xl text-[#EFEFEF] leading-[1.05] tracking-tight mb-6">
                Let us build
                <br />
                <span className="text-[#2A2A2A]">something.</span>
              </h2>
              <p className="font-body text-sm text-[#888888] leading-relaxed mb-12 max-w-sm">
                Actively looking for frontend, UI/UX, and full-stack roles in Canada. Have an opportunity or a project? Reach out — I respond within 24 hours.
              </p>

              <div className="space-y-0 border border-[#1A1A1A]">
                {links.map(({ label, sub, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-5 py-4 border-b border-[#1A1A1A] last:border-b-0 hover:bg-[#111111] transition-colors group"
                  >
                    <Icon size={14} className="text-[#333333] group-hover:text-accent transition-colors flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-mono-dm text-[10px] text-[#EFEFEF] tracking-wider uppercase">{label}</p>
                      <p className="font-mono-dm text-[9px] text-[#444444] tracking-wider">{sub}</p>
                    </div>
                    <ArrowRight size={12} className="text-[#333333] group-hover:text-[#EFEFEF] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {status === 'sent' ? (
              <div className="flex flex-col items-start justify-center py-16 border border-[#1A1A1A] px-8">
                <Send size={24} className="text-accent mb-4" />
                <h3 className="font-body font-black text-2xl text-[#EFEFEF] mb-2">Sent.</h3>
                <p className="font-mono-dm text-[10px] text-[#444444] tracking-widest uppercase">I will reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0 border border-[#1A1A1A]">
                <div className="border-b border-[#1A1A1A] p-1">
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Name" className={inputClass} />
                </div>
                <div className="border-b border-[#1A1A1A] p-1">
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email" className={inputClass} />
                </div>
                <div className="border-b border-[#1A1A1A] p-1">
                  <textarea name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Message" className={`${inputClass} resize-none`} />
                </div>
                <div className="p-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-mono-dm text-[10px] py-4 tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : (<>Send Message <Send size={12} /></>)}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}