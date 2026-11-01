'use client'

import { useCallback, useRef, useState } from 'react'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { NavLink } from '@/components/layout/NavLink'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { CloseIcon, MenuIcon } from '@/components/ui/icons'
import { IconButton } from '@/components/ui/IconButton'
import { navItems, sectionIds } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const MENU_ID = 'mobile-menu'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const activeId = useScrollSpy(sectionIds)

  const closeMenu = useCallback((restoreFocus: boolean) => {
    setMenuOpen(false)
    if (restoreFocus) menuButton.current?.focus()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="container-page flex items-center justify-between gap-6 py-4 md:py-6">
        <a
          href="#hero"
          aria-label={`${profile.initials}, back to top`}
          className="flex size-11 items-center justify-center rounded-full bg-brand text-[16px] font-extrabold tracking-[-0.02em] text-on-brand md:size-12 md:text-[17px]"
        >
          {profile.initials}
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.id} id={item.id} active={activeId === item.id}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <ThemeToggle />

          <IconButton
            label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            expanded={menuOpen}
            controls={MENU_ID}
            ref={menuButton}
            className="md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      {menuOpen && <MobileMenu id={MENU_ID} activeId={activeId} onClose={closeMenu} />}
    </header>
  )
}
