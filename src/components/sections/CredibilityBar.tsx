const items = [
  'Centennial College — Software Engineering',
  'Google UX Design Certificate',
  'React · Next.js · Firebase',
  'Available for Hire',
]

export default function CredibilityBar() {
  return (
    <div className="border-y border-[#1A1A1A] py-4 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-wrap gap-6 md:gap-12 items-center justify-between">
        {items.map((item, i) => (
          <span key={i} className="font-mono-dm text-[9px] text-[#333333] tracking-[0.2em] uppercase whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}