import { useEffect, useRef, useState } from 'react'

export default function CursorFollower() {
  const cursorRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateEnabled = () => setEnabled(pointerQuery.matches && !motionQuery.matches)
    updateEnabled()
    pointerQuery.addEventListener('change', updateEnabled)
    motionQuery.addEventListener('change', updateEnabled)
    return () => {
      pointerQuery.removeEventListener('change', updateEnabled)
      motionQuery.removeEventListener('change', updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return undefined
    const cursor = cursorRef.current
    const move = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      cursor.classList.add('is-visible')
      cursor.classList.toggle('is-hovering', Boolean(event.target.closest('a, button, [role="button"]')))
    }
    const leave = () => cursor.classList.remove('is-visible', 'is-hovering')
    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [enabled])

  return enabled ? <span aria-hidden="true" className="cursor-follower" ref={cursorRef} /> : null
}
