import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Tools', id: 'tools' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export const sectionIds = navItems.map((item) => item.id)
