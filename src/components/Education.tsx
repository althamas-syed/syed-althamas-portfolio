import { SectionHeading } from './ui'
import { EDU, CERTS } from '../data/resume'

export default function Education() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
      <SectionHeading index="06" eyebrow="Learning" title="Education &" accent="certifications" />

      <div className="grid gap-5 md:grid-cols-2" data-reveal>
        {EDU.map((e) => (
          <div key={e.degree} className="glass glass-hover rounded-2xl p-7">
            <span className="font-mono text-xs tracking-[.3em] text-fuchsia-400">🎓</span>
            <h3 className="mt-4 font-display text-2xl font-medium text-white">{e.degree}</h3>
            <p className="mt-2 text-sm text-white/60">{e.school}</p>
            <span className="mt-4 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[0.68rem] tracking-wider text-white/50">
              {e.period}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {CERTS.map((g) => (
          <div key={g.group} className="glass glass-hover rounded-2xl p-7" data-reveal>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/50 to-fuchsia-600/40 font-mono text-sm text-white">
                {g.badge}
              </span>
              <h3 className="font-display text-lg font-medium text-white">{g.group}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {g.items.map((it) => (
                <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-white/60">
                  <span className="mt-1 text-fuchsia-400/80">✔</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
