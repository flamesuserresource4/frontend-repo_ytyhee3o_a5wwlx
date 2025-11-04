import { Github, Linkedin, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'system'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return 'system'
}

function applyTheme(theme) {
  if (typeof window === 'undefined') return
  const root = document.documentElement
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
  root.classList.toggle('dark', isDark)
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => theme === 'system' && applyTheme('system')
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [theme])

  const cycleTheme = () => {
    setTheme((t) => {
      const next = t === 'light' ? 'dark' : t === 'dark' ? 'system' : 'light'
      if (next === 'system') localStorage.removeItem('theme')
      else localStorage.setItem('theme', next)
      return next
    })
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/40 bg-white/80 dark:bg-black/50 border-b border-slate-200/60 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-slate-900 dark:text-slate-100 text-lg tracking-tight">Muslih Z</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
          <a href="#blog" className="hover:text-slate-900 dark:hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={cycleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 ring-1 ring-transparent hover:ring-slate-200/60"
            title={`Theme: ${theme}`}
          >
            {theme === 'dark' ? <Moon size={18} /> : theme === 'light' ? <Sun size={18} /> : (
              <>
                <Sun size={18} className="block dark:hidden" />
                <Moon size={18} className="hidden dark:block" />
              </>
            )}
            <span className="hidden sm:inline capitalize">{theme}</span>
          </button>
          <a
            href="https://www.linkedin.com/in/muslihz/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/muslihz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white/90"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  )
}
