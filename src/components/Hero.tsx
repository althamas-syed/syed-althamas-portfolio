import { useEffect, useState } from 'react'
import Magnetic from './Magnetic'
import { PROFILE } from '../data/resume'
import { scrollToTarget } from '../lib/lenis'

const ROLES = ['Data Analyst', 'Analytics & Insights Associate', 'SQL  •  Python  •  Power BI', 'Data Storyteller']

const MARQUEE = [
  'DATA CLEANING',
  'EDA',
  'SQL',
  'PYTHON',
  'POWER BI',
  'DASHBOARDS',
  'KPI REPORTING',
  'STORYTELLING',
  'MICROSOFT FABRIC',
  'EXCEL / VBA',
]

function useTypedRole() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  useEffect(() => {
    const full = ROLES[idx]
    setText('')
    let i = 0
    const iv = window.setInterval(() => {
      i++
      setText(full.slice(0, i))
      if (i >= full.length) window.clearInterval(iv)
    }, 58)
    const to = window.setTimeout(() => {
      setIdx((r) => (r + 1) % ROLES.length)
    }, full.length * 58 + 1800)
    return () => {
      window.clearInterval(iv)
      window.clearTimeout(to)
    }
  }, [idx])
  return { text, caret: true }
}

export default function Hero() {
  const { text } = useTypedRole()

  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* giant outline backdrop */}
      <div
        className="outline-text pointer-events-none absolute inset-x-0 top-24 select-none whitespace-nowrap text-center font-display text-[16vw] font-semibold leading-none opacity-60 md:top-32"
        data-parallax="8"
        aria-hidden
      >
        DATA → DECISIONS
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pt-28 text-center">
        <div className="eyebrow mb-6 flex items-center gap-3" data-reveal>
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_12px_2px_rgba(232,121,249,0.8)]" />
          {PROFILE.location}
        </div>

        <h1
          className="font-display text-[clamp(3rem,9.5vw,8.5rem)] font-medium leading-[1.02] tracking-tight text-white"
          aria-label="Syed Althamas"
        >
          <span className="block overflow-hidden">
            <span className="block" data-split>
              Syed <span className="text-gradient">Althamas</span>
            </span>
          </span>
        </h1>

        <p className="mt-6 font-mono text-sm text-white/60 md:text-base" data-reveal>
          I turn <span className="text-white">messy data</span> into clear signal —{' '}
          <span className="text-white">recoverable revenue</span> included.
        </p>

        <div className="mt-4 flex h-8 items-center font-mono text-lg text-fuchsia-300 md:text-xl" data-reveal>
          <span data-testid="typed">{text}</span>
          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-fuchsia-400" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4" data-reveal>
          <Magnetic>
            <button
              onClick={() => scrollToTarget('#projects')}
              data-hover
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_-8px_rgba(168,85,247,0.9)] transition-shadow hover:shadow-[0_0_55px_-6px_rgba(232,121,249,0.95)]"
            >
              <span className="relative z-10">View Work</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href={PROFILE.resumePdf}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/85 backdrop-blur transition-colors hover:border-fuchsia-400/50 hover:text-white"
            >
              Download Résumé
              <span className="text-fuchsia-300">↓</span>
            </a>
          </Magnetic>
        </div>

        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-white/45"
          data-reveal
        >
          <a href={`mailto:${PROFILE.email}`} className="transition-colors hover:text-fuchsia-300" data-hover>
            {PROFILE.email}
          </a>
          <span className="hidden text-white/20 sm:inline">/</span>
          <span>{PROFILE.phone}</span>
          <span className="hidden text-white/20 sm:inline">/</span>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-fuchsia-300"
            data-hover
          >
            {PROFILE.linkedinLabel}
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="relative z-10 mb-8 flex justify-center">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-fuchsia-400" />
        </div>
      </div>

      {/* marquee strips */}
      <div className="relative z-10 border-y border-white/[0.06] py-3">
        <div className="marquee">
          <div className="marquee-track gap-8">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={`a-${i}`} className="flex items-center gap-8 whitespace-nowrap font-mono text-xs tracking-[0.25em] text-white/35">
                {m} <span className="text-fuchsia-500/70">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
