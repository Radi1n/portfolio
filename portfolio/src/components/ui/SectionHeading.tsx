interface SectionHeadingProps {
  children: string
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-7 flex flex-col gap-3 md:mb-10 md:gap-4">
      <h2 className="text-h2 md:text-h2-lg">{children}</h2>
      <span aria-hidden="true" className="h-1.5 w-12 rounded-full bg-brand" />
    </div>
  )
}
