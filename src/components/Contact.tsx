import Magnetic from './Magnetic'
import { PROFILE, CONTACT_LINKS } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-36">
      <div className="mb-14 flex items-center gap-4" data-reveal>
        <span className="font-mono text-xs tracking-[.3em] text-fuchsia-400">(07)</span>
        <span className="eyebrow">Contact</span>
        <span className="h-px w-16 bg-gradient-to-r from-violet-500/80 to-transparent" />
      </div>

      <h2 className="font-display max-w-4xl text-4xl font-medium leading-[1.05] md:text-7xl" data-split>
        Data speaks — <span className="text-gradient">let's listen</span> together.
      </h2>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg" data-reveal>
        Open to relocation (Hyderabad & beyond) for work-from-office Analytics & Insights roles. If you have a dataset
        that needs a story — or a dashboard that needs to exist — say hi.
      </p>

      <div className="mt-12" data-reveal>
        <Magnetic strength={0.2}>
          <a
            href={`mailto:${PROFILE.email}`}
            data-hover
            className="group inline-flex items-center gap-4 rounded-full border border-fuchsia-400/30 bg-white/[0.03] py-4 pl-7 pr-8 backdrop-blur transition-transform"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-fuchsia-400" />
            </span>
            <span className="font-mono text-sm text-white/80 transition-colors group-hover:text-white md:text-base">
              {PROFILE.email}
            </span>
            <span className="text-fuchsia-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </Magnetic>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3" data-reveal>
        {CONTACT_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="glass glass-hover group rounded-2xl p-5"
          >
            <span className="font-display text-lg text-white">{l.label}</span>
            <span className="mt-1 block font-mono text-xs text-white/45 transition-colors group-hover:text-fuchsia-300">
              {l.sub}
            </span>
          </a>
        ))}
      </div>

      <footer className="mt-24 border-t border-white/[0.07] pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-white/35">
            © {new Date().getFullYear()} Syed Althamas · Data Analyst
          </p>
          <p className="font-mono text-xs text-white/35">
            {PROFILE.location} · {PROFILE.phone}
          </p>
          <p className="font-mono text-xs text-white/35">
            Built with <span className="text-fuchsia-300">React · Three.js · GSAP · Tailwind</span>
          </p>
        </div>
      </footer>
    </section>
  )
}
