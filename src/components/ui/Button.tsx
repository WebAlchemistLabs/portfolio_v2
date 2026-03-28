import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  target?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  target,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover active:scale-95',
    ghost: 'border border-[#2A2A2E] text-text-2 hover:text-text hover:border-[#3F3F46] active:scale-95',
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}