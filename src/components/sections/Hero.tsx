'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, GitBranch, Link, Mail } from 'lucide-react'

const roles = ['Frontend Dev.', 'UI/UX Dev.', 'React Dev.', 'Full-Stack Dev.']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length)
        setVisible(true)
      }, 300)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pt-14 pb-16 max-w-[1400px] mx-auto">

      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:flex flex-col gap-6 items-center">
        {[
          { href: 'https://github.com/WebAlchemistLabs', Icon: GitBranch, label: 'GH' },
          { href: 'https://linkedin.com/in/your-url', Icon: Link, label: 'LI' },
          { href: 'mailto:your@email.com', Icon: Mail, label: 'EM' },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 group"
          >
            <Icon size={14} className="text-[#444444] group-hover:text-[#EFEFEF] transition-colors" />
            <span className="font-mono-dm text-[9px] text-[#444444] group-hover:text-[#EFEFEF] transition-colors tracking-widest">{label}</span>
          </a>
        ))}
        <div className="w-px h-16 bg-[#222222] mt-2" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <span className="font-mono-dm text-xs text-[#444444] tracking-[0.3em] uppercase">
          — Marlon Haynes / Software Engineer / Canada
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-pixel leading-[1.6] mb-10"
        style={{ fontSize: 'clamp(18px, 3.5vw, 52px)', color: '#EFEFEF' }}
      >
        BUILDING
        <br />
        <span style={{ color: '#2A2A2A' }}>THINGS FOR</span>
        <br />
        THE WEB.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-3 mb-10"
      >
        <span className="font-mono-dm text-xs text-[#444444] tracking-widest uppercase">Currently:</span>
        <span
          className="font-mono-dm text-xs text-accent tracking-widest uppercase transition-all duration-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(4px)' }}
        >
          {roles[roleIndex]}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="font-body text-sm text-[#888888] max-w-md leading-relaxed mb-12"
      >
        Software Engineering student at Centennial College. Building production-quality web applications with React, Next.js, and Firebase. Available for frontend, UI/UX, and full-stack roles.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-3 font-mono-dm text-xs text-[#EFEFEF] bg-accent hover:bg-accent-hover px-6 py-3 tracking-widest uppercase transition-colors"
        >
          View Work <ArrowRight size={14} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 font-mono-dm text-xs text-[#888888] border border-[#222222] hover:border-[#444444] hover:text-[#EFEFEF] px-6 py-3 tracking-widest uppercase transition-all"
        >
          Get in Touch
        </a>
      </motion.div>

      <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 opacity-30">
        <div className="w-8 h-px bg-[#444444]" />
        <span className="font-mono-dm text-[9px] text-[#444444] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  )
}