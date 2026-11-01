import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  /** Opens in a new tab with a safe rel. */
  external?: boolean
  className?: string
  children: ReactNode
}

const variants = {
  primary: 'border-brand bg-brand text-on-brand hover:border-brand-hover hover:bg-brand-hover',
  secondary: 'border-line-strong bg-surface text-ink hover:bg-hover',
}

const sizes = {
  md: 'min-h-12 px-6',
  sm: 'min-h-11 px-4',
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  className,
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border text-small font-bold transition-colors',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  )
}
