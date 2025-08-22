export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded border border-white/20 bg-darkElev flex items-center justify-center">
            <span className="text-primary text-xs font-bold">TF</span>
          </div>
          <span>© {new Date().getFullYear()} Tesla Factory — Robocop Division</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#about">About</a>
          <a href="#systems">Systems</a>
          <a href="#security">Security</a>
        </div>
      </div>
    </footer>
  )
}
