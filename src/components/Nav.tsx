import { useEffect, useState } from 'react'
import { scrollToTarget } from '../lib/lenis'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    scrollToTarget(`#${id}`)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-[#07030c]/75 py-3 backdrop-blur-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => go('hero')}
            className="font-mono text-sm tracking-widest text-white"
            data-hover
            aria-label="Back to top"
          >
            <span className="text-fuchsia-400">SA</span>
            <span className="text-white/40">_</span>
            <span className="text-white/70">.dev</span>
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="nav-link" data-hover>
                {l.label}
              </button>
            ))}
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => go('contact')}
              data-hover
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-fuchsia-400/40 px-5 py-2 text-sm text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-violet-600/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative">Hire Me</span>
              <span className="relative size-1.5 animate-pulse rounded-full bg-fuchsia-400" />
            </button>
          </div>
          <button
            className="text-2xl text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </nav>
      </header>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-[#07030c]/95 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="font-display text-3xl text-white/85 hover:text-fuchsia-300"
              data-hover
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
