import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  id: string
  active: boolean
  onClick?: () => void
  className?: string
  children: ReactNode
}

export function NavLink({ id, active, onClick, className, children }: NavLinkProps) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      aria-current={active ? 'true' : undefined}
      className={cn(
        'inline-flex min-h-11 items-center rounded-full px-4 text-small font-semibold transition-colors',
        active ? 'bg-brand text-on-brand' : 'text-muted hover:bg-hover hover:text-ink',
        className,
      )}
    >
      {children}
    </a>
  )
}
