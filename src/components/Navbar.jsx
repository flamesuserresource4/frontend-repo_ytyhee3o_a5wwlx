import { Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-slate-900 text-lg tracking-tight">Muslih Z</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/muslihz/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/muslihz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-slate-900 hover:bg-slate-800"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  )
}
