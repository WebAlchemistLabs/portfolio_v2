'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#222222]' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a href="#" className="font-pixel text-[9px] text-[#EFEFEF] tracking-tight leading-tight hover:text-accent transition-colors duration-200">
          WEB<br />ALCHEMIST
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono-dm text-xs text-[#888888] hover:text-[#EFEFEF] transition-colors duration-200 tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="font-mono-dm text-xs text-[#888888] hover:text-[#EFEFEF] transition-colors tracking-widest uppercase border-b border-[#333333] hover:border-[#EFEFEF] pb-0.5"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="font-mono-dm text-xs bg-accent hover:bg-accent-hover text-white px-4 py-2 transition-colors tracking-widest uppercase"
          >
            Hire me
          </a>
        </div>

        <button
          className="md:hidden text-[#888888] hover:text-[#EFEFEF] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#222222] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono-dm text-xs text-[#888888] hover:text-[#EFEFEF] transition-colors tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-[#222222]">
            <a href="/resume.pdf" target="_blank" className="font-mono-dm text-xs text-[#888888] tracking-widest uppercase">Resume</a>
            <a href="#contact" className="font-mono-dm text-xs bg-accent text-white px-4 py-2 text-center tracking-widest uppercase">Hire me</a>
          </div>
        </div>
      )}
    </header>
  )
}