export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
}: {
  index: string
  eyebrow: string
  title: string
  accent?: string
}) {
  return (
    <div className="mb-14 md:mb-20" data-reveal>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-[.3em] text-fuchsia-400">({index})</span>
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px w-16 bg-gradient-to-r from-violet-500/80 to-transparent" />
      </div>
      <h2 className="font-display mt-5 text-5xl font-medium leading-[1.03] md:text-7xl" data-split>
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
    </div>
  )
}
