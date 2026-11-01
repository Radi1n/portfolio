import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { Placeholder } from '@/components/ui/Placeholder'
import { Reveal } from '@/components/ui/Reveal'
import { profile } from '@/data/profile'

const STAGGER = 70

export function Hero() {
  const { name, role, bio, cv, github, linkedin, photo } = profile

  return (
    <section
      id="hero"
      className="container-page flex flex-col gap-6 pt-10 md:pb-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:pt-[72px]"
    >
      {/* Mobile: the two groups join the section's flex flow so the photo sits between them. */}
      <div className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-6">
        <div id="about" className="order-1 flex flex-col items-start gap-5 lg:order-none lg:gap-6">
          <Reveal>
            <Chip variant="brand">{role}</Chip>
          </Reveal>
          <Reveal delay={STAGGER}>
            <h1 className="max-w-[640px] text-display">{name}</h1>
          </Reveal>
          <Reveal delay={STAGGER * 2}>
            <p className="max-w-[560px] text-body text-muted lg:text-body-lg">{bio}</p>
          </Reveal>
        </div>

        <Reveal delay={STAGGER * 3} className="order-3 flex flex-col gap-6 lg:order-none lg:mt-2">
          <div className="flex flex-wrap gap-3">
            {cv && (
              <Button href={cv} external className="w-full lg:w-auto">
                View my CV
              </Button>
            )}
            {github && (
              <Button href={github} external variant="secondary" className="flex-1 lg:flex-none">
                GitHub
              </Button>
            )}
            {linkedin && (
              <Button href={linkedin} external variant="secondary" className="flex-1 lg:flex-none">
                LinkedIn
              </Button>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={STAGGER * 4}
        className="order-2 w-full max-w-[416px] pb-4 pr-4 lg:order-none lg:w-[424px] lg:max-w-none lg:shrink-0 lg:pb-6 lg:pr-6"
      >
        <div className="relative aspect-[5/6]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-card bg-brand lg:translate-x-6 lg:translate-y-6"
          />
          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 400px, 90vw"
              className="rounded-card object-cover"
            />
          ) : (
            <Placeholder
              label="[Profile photo]"
              description="Profile photo placeholder"
              className="absolute inset-0 rounded-card"
            />
          )}
        </div>
      </Reveal>
    </section>
  )
}
