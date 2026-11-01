import { cn } from '@/lib/utils'

interface PlaceholderProps {
  label: string
  /** Accessible description, e.g. "Profile photo placeholder". */
  description: string
  /** Dashed outline; turn off when a parent already draws the border. */
  bordered?: boolean
  className?: string
}

export function Placeholder({ label, description, bordered = true, className }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={description}
      className={cn(
        'flex items-center justify-center bg-placeholder text-small font-semibold text-muted',
        bordered && 'border-[1.5px] border-dashed border-placeholder-line',
        className,
      )}
    >
      {label}
    </div>
  )
}
