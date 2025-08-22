type SectionProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  cta?: { label: string, href: string }
  reversed?: boolean
  id?: string
}

export default function Section({ eyebrow, title, description, cta, reversed, id }: SectionProps) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-grid" />
      </div>
      <div className={`mx-auto max-w-7xl px-6 grid gap-10 items-center ${reversed ? 'md:grid-cols-[1fr_0.6fr]' : 'md:grid-cols-[0.6fr_1fr]'}`}>
        {!reversed && <div className="order-1">
          <Eyebrow text={eyebrow} />
          <h2 className="text-3xl md:text-5xl font-extrabold neon-text">{title}</h2>
          {description && <p className="mt-6 text-white/80 max-w-prose">{description}</p>}
          {cta && <a href={cta.href} className="inline-block mt-8 px-5 py-3 rounded bg-accent/20 border border-accent/40 text-accent hover:bg-accent/30 transition">{cta.label}</a>}
        </div>}

        <div className={`order-2 ${reversed ? '' : ''}`}>
          <div className="aspect-[16/10] rounded-xl border border-white/10 bg-gradient-to-br from-darkElev to-black p-0 overflow-hidden">
            <div className="w-full h-full grid place-items-center">
              <div className="text-white/70 text-sm p-6">
                <span className="text-primary font-semibold">Live Telemetry</span> · Vibration damping: 0.2g · Thermal deviation: 0.03°C · Vision frames: 240 FPS
              </div>
            </div>
          </div>
        </div>

        {reversed && <div className="order-3 md:order-1">
          <Eyebrow text={eyebrow} />
          <h2 className="text-3xl md:text-5xl font-extrabold neon-text">{title}</h2>
          {description && <p className="mt-6 text-white/80 max-w-prose">{description}</p>}
          {cta && <a href={cta.href} className="inline-block mt-8 px-5 py-3 rounded bg-accent/20 border border-accent/40 text-accent hover:bg-accent/30 transition">{cta.label}</a>}
        </div>}
      </div>
    </section>
  )
}

function Eyebrow({ text }: { text?: string }) {
  if (!text) return null
  return (
    <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-4">{text}</p>
  )
}
