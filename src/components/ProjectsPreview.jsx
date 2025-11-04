import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'API Services & Integrations',
    description:
      'Production-grade RESTful APIs with robust testing, observability, and CI/CD. Focus on security and performance.',
    tech: ['FastAPI', 'Postgres', 'Docker', 'Kubernetes'],
    link: 'https://github.com/muslihz',
  },
  {
    title: 'Modern Frontend Interfaces',
    description:
      'Accessible, responsive web apps with delightful UX, component-driven architecture, and strong state management.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com/muslihz',
  },
  {
    title: 'Cloud Infrastructure Automation',
    description:
      'Infrastructure as Code, GitOps workflows, and platform engineering for reliable delivery at scale.',
    tech: ['AWS', 'Terraform', 'GitHub Actions', 'ArgoCD'],
    link: 'https://github.com/muslihz',
  },
]

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Featured Work</h2>
            <p className="mt-2 text-slate-600">A snapshot of what I love building.</p>
          </div>
          <a
            href="https://github.com/muslihz?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Browse all on GitHub
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl ring-1 ring-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <Github size={16} />
                  Open on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="sm:hidden mt-8">
          <a
            href="https://github.com/muslihz?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Browse all on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
