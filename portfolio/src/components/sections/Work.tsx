import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

export function Work() {
  return (
    <section id="work" className="container-page pt-16 md:pt-24">
      <SectionHeading>Work</SectionHeading>
      <ol className="flex flex-col">
        {experience.map((job) => (
          <Reveal as="li" key={job.id} className="flex gap-3 pb-6 last:pb-0 md:gap-6">
            <div
              aria-hidden="true"
              className="flex w-3.5 shrink-0 flex-col items-center pt-7 md:w-4 md:pt-9"
            >
              <span className="size-3.5 rounded-full border-[3px] border-accent bg-brand md:size-4" />
              <span className="mt-2 w-0.5 flex-1 rounded-sm bg-line-strong" />
            </div>

            <Card as="article" className="flex min-w-0 flex-1 flex-col gap-5 p-6 md:gap-6 md:p-8">
              <header className="flex flex-col-reverse items-start gap-3 md:flex-row md:justify-between md:gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-h3 md:text-h3-lg">{job.title}</h3>
                  <p className="text-small text-muted">{job.location}</p>
                </div>
                <Chip size="sm" className="md:min-h-9 md:px-4 md:text-small">
                  {job.period}
                </Chip>
              </header>

              <ul className="flex max-w-[820px] flex-col gap-4 md:gap-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-body md:gap-4 md:text-body-lg">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-2 shrink-0 rounded-full bg-accent md:mt-3"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
