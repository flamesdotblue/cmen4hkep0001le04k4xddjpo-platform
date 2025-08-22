"use client"

import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      const intensity = 10
      el.style.setProperty('--tiltX', `${-(y * intensity)}deg`)
      el.style.setProperty('--tiltY', `${x * intensity}deg`)
    }
    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="relative pt-28 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(124,124,255,0.35), transparent 60%)' }} />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(0,255,198,0.35), transparent 60%)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <p className="uppercase tracking-[0.35em] text-xs text-white/70">Project Robocop</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight neon-text">
            Tesla's Robocop Factory
          </h1>
          <p className="mt-6 text-white/80 max-w-xl">
            An immersive look at the robotics nexus where autonomy is forged. Move your cursor — the sentinel is watching.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#about" className="px-5 py-3 rounded bg-primary text-black font-semibold shadow-neon hover:brightness-110 transition">Begin Tour</a>
            <a href="#systems" className="px-5 py-3 rounded border border-white/15 hover:border-white/30 transition">Systems</a>
          </div>
        </div>

        <div className="relative h-[480px] md:h-[620px]" ref={containerRef} style={{ perspective: '1200px' }}>
          <div className="absolute inset-0 rounded-xl border border-white/10 bg-black/20 backdrop-blur [transform:rotateX(var(--tiltX))_rotateY(var(--tiltY))] transition-transform duration-150 will-change-transform">
            <Spline scene="https://prod.spline.design/95dP3Hm4ufSAdOMb/scene.splinecode" />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl shadow-neon" />
        </div>
      </div>

      <div className="mt-16 md:mt-24 mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { kpi: '1.2s', label: 'Cycle Time' },
          { kpi: '99.997%', label: 'Uptime' },
          { kpi: '10K+', label: 'Arms Coordinated' },
          { kpi: 'AES-256', label: 'Encrypted Mesh' },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-bold text-primary">{item.kpi}</div>
            <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
