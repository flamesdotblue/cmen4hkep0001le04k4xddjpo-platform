"use client"

import { useEffect, useState } from 'react'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-dark/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded border border-white/20 bg-darkElev shadow-neon flex items-center justify-center">
            <span className="text-primary text-sm font-bold">TF</span>
          </div>
          <span className="font-semibold tracking-wide">Tesla Factory</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#about">About</a>
          <a href="#systems">Systems</a>
          <a href="#security">Security</a>
        </div>
        <a href="#" className="ml-4 px-4 py-2 rounded bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition">Enter Facility</a>
      </nav>
    </header>
  )
}
