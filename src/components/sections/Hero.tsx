'use client'

import { motion } from 'framer-motion'
import { ArrowDown, GitBranch, Link, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(10,10,14,0.28)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full mx-5 md:mx-12 lg:mx-20"
        style={{ maxWidth: 1240 }}
      >
        <div
          className="absolute -inset-[1px] rounded-2xl pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02), rgba(255,255,255,0.06))',
            borderRadius: 18,
          }}
        />

        <div
          className="relative rounded-2xl overflow-hidden px-10 md:px-16 lg:px-20 py-16 md:py-20"
          style={{
            background: 'rgba(22,22,30,0.25)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow:
              '0 20px 80px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono-dm text-[10px] text-[#B8B4C0] tracking-[0.25em] uppercase">
              Available for work
            </span>
          </motion.div>

          <div className="mb-5">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-mono-dm text-[18px] md:text-2xl tracking-[0.3em] uppercase mb-4"
                style={{ color: '#C9A96E' }}
              >
                Hello, I am
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display font-bold leading-[0.95] tracking-tight"
                style={{
                  fontSize: 'clamp(56px, 9vw, 140px)',
                  color: '#F2EFE8',
                }}
              >
                MARLON
              </motion.h1>
            </div>
          </div>

          <div className="overflow-hidden mb-10">
            <motion.p
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display italic leading-[1.3]"
              style={{
                fontSize: 'clamp(18px, 2.4vw, 34px)',
                color: 'rgba(242,239,232,0.75)',
                maxWidth: 720,
              }}
            >
              I design and develop scalable web applications and digital
              products built for performance, reliability, and real world use.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 font-mono-dm text-[11px] px-8 py-4 tracking-[0.18em] uppercase transition-all duration-300"
              style={{
                background: 'rgba(201,169,110,0.14)',
                border: '1px solid rgba(201,169,110,0.4)',
                color: '#C9A96E',
              }}
            >
              View Work <ArrowDown size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono-dm text-[11px] px-8 py-4 tracking-[0.18em] uppercase transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.14)',
                color: 'rgba(242,239,232,0.7)',
              }}
            >
              Get in Touch →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.9 }}
            className="flex items-center gap-8 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {[
              {
                href: 'https://github.com/WebAlchemistLabs',
                Icon: GitBranch,
                label: 'GitHub',
              },
              {
                href: 'https://www.linkedin.com/in/marlon-haynes-3bb010391/',
                Icon: Link,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:webalchemistlabs@gmail.com',
                Icon: Mail,
                label: 'Email',
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono-dm text-[10px] tracking-widest uppercase transition-colors duration-300"
                style={{ color: '#F2EFE8' }}
              >
                <Icon size={13} /> {label}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 right-10 z-20 flex flex-col items-center gap-3"
      >
        <span
          className="font-mono-dm text-[9px] tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl', color: '#4A4755' }}
        >
          Scroll
        </span>

        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 origin-top"
          style={{ background: 'linear-gradient(to bottom, #4A4755, transparent)' }}
        />
      </motion.div>
    </section>
  )
}