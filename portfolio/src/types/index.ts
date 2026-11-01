export interface ImageAsset {
  src: string
  alt: string
}

export interface Profile {
  name: string
  initials: string
  role: string
  bio: string
  email: string | null
  github: string | null
  linkedin: string | null
  /** Full URL, or a path under /public (e.g. "/cv/your-file.pdf"). */
  cv: string | null
  photo: ImageAsset | null
}

export interface Experience {
  id: string
  title: string
  location: string
  period: string
  bullets: string[]
}

export interface Tool {
  name: string
  src: string
  /** Light variant used in dark mode, for logos that are dark by default. */
  srcDark?: string
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  featured?: boolean
  prototype?: boolean
  image: ImageAsset | null
  github: string | null
  demo: string | null
}

export interface NavItem {
  label: string
  id: string
}
