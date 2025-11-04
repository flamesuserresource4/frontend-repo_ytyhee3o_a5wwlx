import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

const projects = [
  {
    title: 'API Services & Integrations',
    description:
      'Production-grade RESTful APIs with robust testing, observability, and CI/CD.',
    tech: ['FastAPI', 'Postgres', 'Docker'],
    link: 'https://github.com/muslihz',
  },
  {
    title: 'Modern Frontend Interfaces',
    description:
      'Accessible, responsive web apps with delightful UX and component-driven architecture.',
    tech: ['React', 'Vite', 'Tailwind'],
    link: 'https://github.com/muslihz',
  },
  {
    title: 'Cloud Infrastructure Automation',
    description:
      'Infrastructure as Code and GitOps workflows for reliable delivery at scale.',
    tech: ['AWS', 'Terraform', 'GitHub Actions'],
    link: 'https://github.com/muslihz',
  },
  {
    title: 'Developer Experience Tooling',
    description:
      'CLIs and internal platforms that speed up delivery and reduce cognitive load.',
    tech: ['Node.js', 'Go', 'Turbo'],
    link: 'https://github.com/muslihz',
  },
]

function ProjectCard({ p }) {
  return (
    <article className="group w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] shrink-0 rounded-xl ring-1 ring-slate-200 dark:ring-white/10 bg-white dark:bg-neutral-900 p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4">
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-100 hover:opacity-80"
        >
          <Github size={16} />
          Open on GitHub
        </a>
      </div>
    </article>
  )
}

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const total = projects.length

  const visible = useMemo(() => {
    if (typeof window === 'undefined') return 1
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }, [])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4500)
    return () => clearInterval(id)
  }, [total])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const child = el.children[index]
    child?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }, [index])

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Work</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A snapshot of what I love building.</p>
          </div>
          <a
            href="https://github.com/muslihz?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:opacity-80"
          >
            Browse all on GitHub
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="relative mt-8">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((p) => (
              <div key={p.title} className="snap-start">
                <ProjectCard p={p} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 ring-slate-300 dark:ring-white/10 bg-white dark:bg-neutral-900 hover:bg-slate-50 dark:hover:bg-white/5"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full cursor-pointer ${i === index ? 'bg-slate-900 dark:bg-white' : 'bg-slate-300 dark:bg-white/30'}`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setIndex((i) => (i + 1) % total)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 ring-slate-300 dark:ring-white/10 bg-white dark:bg-neutral-900 hover:bg-slate-50 dark:hover:bg-white/5"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="sm:hidden mt-8">
          <a
            href="https://github.com/muslihz?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:opacity-80"
          >
            Browse all on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
