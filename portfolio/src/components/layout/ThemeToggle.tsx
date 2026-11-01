'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { IconButton } from '@/components/ui/IconButton'
import { MoonIcon, SunIcon } from '@/components/ui/icons'

const subscribe = () => () => {}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
  const isDark = mounted && resolvedTheme === 'dark'

  const toggle = () => {
    const root = document.documentElement
    root.classList.add('theme-transition')
    window.setTimeout(() => root.classList.remove('theme-transition'), 300)
    setTheme(isDark ? 'light' : 'dark')
  }

  // The icon follows the `dark` class via CSS, so the first paint is already correct.
  return (
    <IconButton
      label={!mounted ? 'Toggle theme' : isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
    >
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </IconButton>
  )
}
