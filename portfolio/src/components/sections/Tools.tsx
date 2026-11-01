import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { tools } from '@/data/tools'
import type { Tool } from '@/types'

const logoClass = 'size-8 object-contain md:size-10'

function ToolTile({ tool }: { tool: Tool }) {
  return (
    <div className="group relative flex size-16 items-center justify-center rounded-2xl border border-line bg-surface shadow-card transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:z-10 hover:-translate-y-1 hover:border-brand hover:shadow-tile-hover md:size-20 md:rounded-card">
      <Image
        src={tool.src}
        alt={tool.name}
        width={40}
        height={40}
        className={tool.srcDark ? `${logoClass} dark:hidden` : logoClass}
      />
      {tool.srcDark && (
        <Image
          src={tool.srcDark}
          alt={tool.name}
          width={40}
          height={40}
          className={`${logoClass} hidden dark:block`}
        />
      )}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-caption font-semibold text-bg opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      >
        {tool.name}
      </span>
    </div>
  )
}

export function Tools() {
  return (
    <section id="tools" className="container-page pt-16 md:pt-24">
      <SectionHeading>Tools</SectionHeading>
      <ul className="mx-auto flex max-w-[304px] flex-wrap justify-center gap-4 md:max-w-[752px]">
        {tools.map((tool, index) => (
          <Reveal as="li" key={tool.name} delay={(index % 8) * 30}>
            <ToolTile tool={tool} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
