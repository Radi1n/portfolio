import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { Placeholder } from '@/components/ui/Placeholder'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

const lift =
  'group transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_20px_rgba(0,0,0,0.05)]'

function ProjectImage({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div className="aspect-[16/10] transition-transform duration-300 ease-out group-hover:scale-[1.03]">
        {project.image ? (
          <div className="relative size-full">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(min-width: 900px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <Placeholder
            label="[Screenshot]"
            description={`${project.title} screenshot placeholder`}
            bordered={false}
            className="size-full"
          />
        )}
      </div>
    </div>
  )
}

function ProjectChips({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <li key={item}>
          <Chip size="sm">{item}</Chip>
        </li>
      ))}
    </ul>
  )
}

/** GitHub / Live demo buttons render only when their URL is set. */
function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  if (!project.github && !project.demo) return null

  return (
    <div className={cn('flex flex-wrap gap-3 pt-2', className)}>
      {project.github && (
        <Button href={project.github} external variant="secondary" size="sm">
          GitHub
        </Button>
      )}
      {project.demo && (
        <Button href={project.demo} external variant="secondary" size="sm">
          Live demo
        </Button>
      )}
    </div>
  )
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Card
      as="article"
      className={cn(
        lift,
        'grid overflow-hidden min-[900px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]',
      )}
    >
      <ProjectImage
        project={project}
        className="border-b border-line min-[900px]:border-b-0 min-[900px]:border-r"
      />
      <div className="flex flex-col justify-center gap-5 p-6 min-[900px]:p-10">
        <h3 className="text-feature min-[900px]:text-feature-lg">{project.title}</h3>
        <p className="text-small leading-[1.6] text-muted">{project.description}</p>
        <ProjectChips tech={project.tech} />
        <ProjectLinks project={project} />
      </div>
    </Card>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="article" className={cn(lift, 'flex h-full flex-col overflow-hidden')}>
      <ProjectImage project={project} className="border-b border-line" />
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <h3 className="text-h3 md:text-h3-lg">{project.title}</h3>
        <p className="text-small leading-[1.6] text-muted">{project.description}</p>
        <ProjectChips tech={project.tech} />
        <ProjectLinks project={project} className="mt-auto" />
      </div>
    </Card>
  )
}

export function PrototypeCard({ project }: { project: Project }) {
  return (
    <Card
      as="article"
      variant="outline"
      className="group flex flex-col gap-4 p-4 md:gap-5 md:p-5 min-[900px]:grid min-[900px]:grid-cols-2 min-[900px]:items-center min-[900px]:gap-8"
    >
      <ProjectImage project={project} className="rounded-2xl" />
      <div className="flex flex-col gap-3 px-1 pb-1 min-[900px]:px-0 min-[900px]:pb-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-h3 md:text-h3-lg">{project.title}</h3>
          <Chip variant="brand" size="sm">
            Prototype
          </Chip>
        </div>
        <p className="text-small leading-[1.6] text-muted">{project.description}</p>
        <ProjectChips tech={project.tech} />
        <ProjectLinks project={project} />
      </div>
    </Card>
  )
}
