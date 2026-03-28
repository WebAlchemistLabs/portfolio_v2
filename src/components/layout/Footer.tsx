export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] py-8 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="font-pixel text-[8px] text-[#333333]">WEB ALCHEMIST</span>
          <p className="font-mono-dm text-[9px] text-[#333333] tracking-wider mt-1">Built by Marlon Haynes — Next.js · Tailwind · Framer Motion</p>
        </div>
        <div className="flex items-center gap-8">
          {[
            { label: 'GitHub', href: 'https://github.com/WebAlchemistLabs' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/your-url' },
            { label: 'Email', href: 'mailto:your@email.com' },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="font-mono-dm text-[9px] text-[#333333] hover:text-[#EFEFEF] transition-colors tracking-widest uppercase">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}