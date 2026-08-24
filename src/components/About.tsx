import { SectionHeading } from './ui'
import { PROFILE, STATS, COMPETENCIES, WHAT_I_DO } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
      <SectionHeading index="01" eyebrow="About me" title="The analyst" accent="behind the dashboard" />

      <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          {PROFILE.summary.map((s, i) => (
            <p
              key={i}
              className="mb-5 text-base leading-relaxed text-white/65 md:text-lg"
              data-reveal={i === 0 ? undefined : true}
              data-reveal-delay={i * 100}
            >
              {s}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-2" data-reveal>
            {COMPETENCIES.map((c) => (
              <span key={c} className="chip" data-hover>
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8" data-reveal>
            <p className="eyebrow mb-3">Languages</p>
            <div className="flex flex-wrap gap-2">
              {PROFILE.languages.map((l) => (
                <span key={l} className="chip" data-hover>
                  🌐 {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((st) => (
            <div
              key={st.label}
              className="glass glass-hover flex flex-col justify-between rounded-2xl p-6"
              data-reveal
            >
              <span
                className="font-display text-3xl font-medium text-white md:text-4xl"
                data-count={st.count}
                data-prefix={st.prefix ?? ''}
                data-suffix={st.suffix ?? ''}
                data-decimals={st.decimals}
              >
                0
              </span>
              <span className="mt-3 font-mono text-[0.68rem] uppercase tracking-widest text-white/45">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* What I Do */}
      <div className="mt-24 md:mt-32">
        <div className="mb-10 flex items-center gap-4" data-reveal>
          <span className="font-mono text-xs tracking-[.3em] text-fuchsia-400">(02)</span>
          <span className="eyebrow">What I do</span>
          <span className="h-px w-16 bg-gradient-to-r from-violet-500/80 to-transparent" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {WHAT_I_DO.map((w) => (
            <div key={w.n} className="glass glass-hover group rounded-2xl p-6" data-reveal>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-fuchsia-400/90">{w.n}</span>
                <span className="text-lg text-white/20 transition-colors group-hover:text-fuchsia-400/60">↗</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-white">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
