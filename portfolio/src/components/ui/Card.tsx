import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  as?: 'div' | 'article'
  /** `outline` is the transparent, dashed, shadowless style used by prototypes. */
  variant?: 'default' | 'outline'
  className?: string
  children: ReactNode
}

export function Card({ as: Tag = 'div', variant = 'default', className, children }: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-card border',
        variant === 'default'
          ? 'border-line bg-surface shadow-card'
          : 'border-dashed border-line-strong bg-transparent',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
