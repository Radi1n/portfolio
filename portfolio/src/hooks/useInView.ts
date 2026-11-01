import { useCallback, useRef, useState } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
}

/** Reports `true` once the element has entered the viewport, then stops observing. */
export function useInView({ threshold = 0.1, rootMargin = '0px 0px -40px 0px' }: Options = {}) {
  const [inView, setInView] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)

  const ref = useCallback(
    (node: Element | null) => {
      observer.current?.disconnect()
      observer.current = null
      if (!node) return

      if (typeof IntersectionObserver === 'undefined') {
        setInView(true)
        return
      }

      const next = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            next.disconnect()
          }
        },
        { threshold, rootMargin },
      )
      next.observe(node)
      observer.current = next
    },
    [threshold, rootMargin],
  )

  return { ref, inView }
}
