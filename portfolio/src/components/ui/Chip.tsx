import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ChipProps {
  variant?: 'default' | 'brand'
  size?: 'md' | 'sm'
  className?: string
  children: ReactNode
}

export function Chip({ variant = 'default', size = 'md', className, children }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-semibold',
        variant === 'brand'
          ? 'border-brand bg-brand text-on-brand'
          : 'border-line bg-chip text-ink',
        size === 'md' ? 'min-h-9 px-3.5 text-small md:px-4' : 'min-h-7 px-3 text-caption',
        className,
      )}
    >
      {children}
    </span>
  )
}
