const items = [
  'Centennial College, Software Engineering',
  'Google UX Design Certificate',
  'WebAlchemistLabs',
  'React · Next.js · Firebase',
  'Open to Work, Canada',
]

export default function CredibilityBar() {
  return (
    <div className="border-y border-[#2A2A36] py-5 px-8 md:px-12">
      <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-4">
        {items.map((item, i) => (
          <span key={i} className="font-mono-dm text-[10px] text-[#4A4755] tracking-[0.2em] uppercase whitespace-nowrap hover:text-[#9B97A0] transition-colors duration-300 cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}