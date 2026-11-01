import { useCallback, useSyncExternalStore } from 'react'

function getActiveId(ids: readonly string[], offset: number): string {
  const atBottom =
    window.scrollY > 0 &&
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
  if (atBottom) return ids[ids.length - 1]

  let active = ids[0]
  for (const id of ids) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= offset) active = id
  }
  return active
}

/** Returns the id of the section currently under the sticky navbar. `ids` must be a stable array. */
export function useScrollSpy(ids: readonly string[], offset = 140): string {
  const subscribe = useCallback((notify: () => void) => {
    let frame = 0
    const onChange = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(notify)
    }
    window.addEventListener('scroll', onChange, { passive: true })
    window.addEventListener('resize', onChange)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onChange)
      window.removeEventListener('resize', onChange)
    }
  }, [])

  const getSnapshot = useCallback(() => getActiveId(ids, offset), [ids, offset])
  const getServerSnapshot = useCallback(() => ids[0], [ids])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
