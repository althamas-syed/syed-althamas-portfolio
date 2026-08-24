import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from './ui'
import { EXPERIENCE } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el) return
    const tw = gsap.fromTo(
      el,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 72%',
          end: 'bottom 55%',
          scrub: 0.6,
        },
      },
    )
    return () => {
      tw.scrollTrigger?.kill()
      tw.kill()
    }
  }, [])

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
      <SectionHeading index="03" eyebrow="Career path" title="Experience" accent="so far" />

      <div ref={listRef} className="relative">
        {/* base line */}
        <div className="timeline-line absolute bottom-0 left-[5px] top-0 w-px opacity-40" />
        {/* animated fill */}
        <div ref={fillRef} className="timeline-line absolute bottom-0 left-[5px] top-0 w-[2px] origin-top" />

        <div className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <div key={`${e.org}-${i}`} className="relative pl-10 md:pl-14" data-reveal>
              <span className="orbit-node" />
              <div className="glass glass-hover rounded-2xl p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-medium text-white md:text-2xl">{e.role}</h3>
                    <p className="mt-1 text-sm font-semibold tracking-wide text-fuchsia-300">{e.org}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[0.68rem] tracking-wider text-white/50">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {e.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-white/60">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fuchsia-400/80" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
