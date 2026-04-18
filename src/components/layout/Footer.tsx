export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A36] py-10 px-8 md:px-12">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl italic text-[#F2EFE8] mb-1">Marlon Haynes</p>
          <p className="font-mono-dm text-[10px] text-[#4A4755] tracking-wider">WebAlchemistLabs · Next.js · Tailwind CSS · Framer Motion</p>
        </div>
        <div className="flex items-center gap-8">
          {[
            { label: 'GitHub', href: 'https://github.com/WebAlchemistLabs' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marlon-haynes-3bb010391/' },
            { label: 'Email', href: 'mailto:webalchemistlabs@gmail.com' },
          ].map((link) => (
            <a key={link.label} href={link.href} target={link.label !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer"
              className="font-mono-dm text-[10px] text-[#4A4755] hover:text-[#9B97A0] transition-colors tracking-[0.15em] uppercase">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}