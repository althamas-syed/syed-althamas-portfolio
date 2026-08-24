import { useRef, type ReactNode } from 'react'

export default function Magnetic({
  children,
  strength = 0.35,
  className = '',
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const relX = e.clientX - (r.left + r.width / 2)
    const relY = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`
  }
  const onEnter = () => {
    const el = ref.current
    if (el) el.style.transition = 'transform .2s ease-out'
  }
  const onLeave = () => {
    const el = ref.current
    if (el) {
      el.style.transition = 'transform .45s cubic-bezier(.22,1,.36,1)'
      el.style.transform = 'translate(0,0)'
    }
  }

  return (
    <div
      ref={ref}
      className={`inline-block will-change-transform ${className}`}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}
