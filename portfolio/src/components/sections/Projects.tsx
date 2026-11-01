import { FeaturedProjectCard, ProjectCard, PrototypeCard } from '@/components/sections/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'

export function Projects() {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="container-page pt-16 md:pt-24">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col gap-6 md:gap-8">
        {featured.map((project) => (
          <Reveal key={project.id}>
            <FeaturedProjectCard project={project} />
          </Reveal>
        ))}

        <div className="grid grid-cols-1 gap-6 md:gap-8 min-[900px]:grid-cols-2">
          {others.map((project) => (
            <Reveal
              key={project.id}
              className={project.prototype ? 'self-start min-[900px]:col-span-2' : 'h-full'}
            >
              {project.prototype ? (
                <PrototypeCard project={project} />
              ) : (
                <ProjectCard project={project} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
