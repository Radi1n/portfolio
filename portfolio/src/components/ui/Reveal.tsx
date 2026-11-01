'use client'

import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface RevealProps {
  as?: 'div' | 'li' | 'article' | 'section'
  /** Stagger in ms. */
  delay?: number
  className?: string
  children: ReactNode
}

/** Fades and lifts its children in once, the first time they scroll into view. */
export function Reveal({ as: Tag = 'div', delay = 0, className, children }: RevealProps) {
  const { ref, inView } = useInView()

  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={cn('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
