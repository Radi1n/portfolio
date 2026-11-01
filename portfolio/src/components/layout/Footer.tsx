import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { IconLink } from '@/components/ui/IconButton'
import { profile } from '@/data/profile'

export function Footer() {
  const { email, github, linkedin, name } = profile

  return (
    <footer id="contact" className="mt-16 border-t border-line md:mt-24">
      <div className="container-page flex flex-col gap-8 pb-10 pt-12 md:gap-12 md:pb-12 md:pt-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-feature md:text-feature-lg">Let&apos;s work together</h2>
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-11 items-center text-body font-semibold text-accent underline underline-offset-4 md:text-body-lg"
              >
                {email}
              </a>
            )}
          </div>

          {(github || linkedin) && (
            <div className="flex gap-3">
              {github && (
                <IconLink label="GitHub" href={github} external>
                  <GithubIcon />
                </IconLink>
              )}
              {linkedin && (
                <IconLink label="LinkedIn" href={linkedin} external>
                  <LinkedinIcon />
                </IconLink>
              )}
            </div>
          )}
        </div>

        <p className="text-caption text-muted">© 2026 {name}</p>
      </div>
    </footer>
  )
}
