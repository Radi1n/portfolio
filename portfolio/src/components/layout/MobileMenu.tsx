'use client'

import { useEffect } from 'react'
import { NavLink } from '@/components/layout/NavLink'
import { navItems } from '@/data/navigation'

interface MobileMenuProps {
  id: string
  activeId: string
  /** `restoreFocus` is true when closed with Escape. */
  onClose: (restoreFocus: boolean) => void
}

export function MobileMenu({ id, activeId, onClose }: MobileMenuProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose(true)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <nav
      id={id}
      aria-label="Primary"
      className="menu-panel absolute inset-x-0 top-full border-b border-line bg-bg shadow-card md:hidden"
    >
      <ul className="flex flex-col gap-1 px-5 py-3">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              id={item.id}
              active={activeId === item.id}
              onClick={() => onClose(false)}
              className="w-full"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
