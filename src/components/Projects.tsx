import { useEffect, type MouseEvent } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from './ui'
import { PROJECTS } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

function handleGlow(e: MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Projects() {
  useEffect(() => {
    const els = gsap.utils.toArray<HTMLElement>('.chart-bar')
    const tw = els.map((el, i) =>
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: (i % 18) * 0.045,
          scrollTrigger: { trigger: el.closest('.chart'), start: 'top 88%', once: true },
        },
      ),
    )
    return () => {
      tw.forEach((t) => {
        t.scrollTrigger?.kill()
        t.kill()
      })
    }
  }, [])

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
      <SectionHeading index="05" eyebrow="Featured work" title="Projects that" accent="move numbers" />

      <div className="space-y-16 md:space-y-24">
        {PROJECTS.map((p, i) => {
          const flip = i % 2 === 1
          return (
            <article
              key={p.title}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${flip ? 'md:[&>*:first-child]:order-2' : ''}`}
              data-reveal
            >
              {/* visual panel */}
              <div
                className="project-card glass glass-hover chart relative rounded-3xl p-6 md:p-8"
                onMouseMove={handleGlow}
                data-hover
              >
                <span className="absolute right-5 top-3 font-display text-[4rem] font-semibold leading-none text-white/[0.05] md:text-[5.5rem]">
                  0{i + 1}
                </span>
                <span className="inline-block rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 font-mono text-[0.65rem] tracking-widest text-fuchsia-300">
                  {p.tag}
                </span>

                <div
                  className="relative mt-6 flex h-44 items-end gap-2 rounded-xl border border-white/[0.06] bg-black/30 p-4"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 25%)',
                  }}
                >
                  {p.bars.map((h, j) => (
                    <div
                      key={j}
                      className="chart-bar relative flex-1 origin-bottom rounded-t-sm bg-gradient-to-t from-violet-600 via-fuchsia-500 to-fuchsia-300/90"
                      style={{ height: `${h}%`, boxShadow: '0 0 14px -2px rgba(192,132,252,0.55)' }}
                    />
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-center">
                      <div className="font-display text-lg font-medium text-white md:text-xl">{m.value}</div>
                      <div className="mt-1 font-mono text-[0.6rem] uppercase tracking-wider text-white/40">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* text panel */}
              <div>
                <span className="eyebrow">Project 0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-white md:text-4xl">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="chip" data-hover>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
