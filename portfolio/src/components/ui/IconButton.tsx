import type { ReactNode, Ref } from 'react'
import { cn } from '@/lib/utils'

const base =
  'inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:bg-hover md:size-12'

interface CommonProps {
  /** Accessible name; icon-only controls need one. */
  label: string
  className?: string
  children: ReactNode
}

interface IconButtonProps extends CommonProps {
  onClick: () => void
  expanded?: boolean
  controls?: string
  ref?: Ref<HTMLButtonElement>
}

export function IconButton({
  label,
  className,
  children,
  onClick,
  expanded,
  controls,
  ref,
}: IconButtonProps) {
  return (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={controls}
      className={cn(base, 'cursor-pointer', className)}
    >
      {children}
    </button>
  )
}

interface IconLinkProps extends CommonProps {
  href: string
  external?: boolean
}

/** Same circular look as IconButton, for links (e.g. social profiles). */
export function IconLink({ label, className, children, href, external }: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(base, className)}
    >
      {children}
    </a>
  )
}
