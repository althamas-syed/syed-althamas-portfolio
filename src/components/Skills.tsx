import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from './ui'
import { SKILL_CATS, SKILL_BARS } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

const TOOLS = ['SQL', 'T-SQL', 'MySQL', 'Python', 'Pandas', 'NumPy', 'Power BI', 'DAX', 'Power Query', 'Tableau', 'Microsoft Fabric', 'Excel', 'VBA', 'Statistics', 'Seaborn', 'Scikit-learn', 'Jupyter', 'Git']

export default function Skills() {
  useEffect(() => {
    const els = gsap.utils.toArray<HTMLElement>('.skill-fill')
    const tween = gsap.fromTo(
      els,
      { width: '0%' },
      {
        width: (i) => `${SKILL_BARS[i].w}%`,
        duration: 1.3,
        ease: 'power3.out',
        stagger: 0.09,
        scrollTrigger: { trigger: els[0]?.parentElement, start: 'top 88%', once: true },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
      <SectionHeading index="04" eyebrow="Toolbox" title="Skills &" accent="stack" />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {SKILL_CATS.map((cat) => (
          <div key={cat.title} className="glass glass-hover rounded-2xl p-6" data-reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/40 to-fuchsia-600/30 text-lg text-fuchsia-200">
                {cat.icon}
              </span>
              <h3 className="font-display text-lg font-medium text-white">{cat.title}</h3>
            </div>
            <ul className="mt-5 space-y-2.5">
              {cat.items.map((it) => (
                <li key={it} className="flex gap-2.5 text-sm text-white/60">
                  <span className="mt-1.5 text-fuchsia-400/70">›</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="glass mt-6 rounded-2xl p-8" data-reveal>
        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
          {SKILL_BARS.map((b) => (
            <div key={b.name}>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-sm font-medium text-white">{b.name}</span>
                <span className="font-mono text-[0.68rem] tracking-wider text-white/40">{b.level}</span>
              </div>
              <div className="skill-bar" data-w={b.w}>
                <span className="skill-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="marquee">
          <div className="marquee-track gap-3">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <span key={i} className="chip whitespace-nowrap" data-hover>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="marquee mt-3">
          <div className="marquee-track reverse gap-3">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <span key={i} className="chip whitespace-nowrap opacity-70" data-hover>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
