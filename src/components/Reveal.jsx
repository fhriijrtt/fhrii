import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children }) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!elementRef.current || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.08 })
    observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [])

  return <div className={visible ? 'reveal is-visible' : 'reveal'} ref={elementRef}>{children}</div>
}
