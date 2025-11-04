import { PenSquare, ExternalLink } from 'lucide-react'

const posts = [
  {
    title: 'Designing APIs that Scale',
    excerpt:
      'Principles and patterns for building maintainable APIs with clear contracts, observability, and strong testing.',
    link: 'https://www.linkedin.com/in/muslihz/',
  },
  {
    title: 'From Idea to Production: A Delivery Checklist',
    excerpt:
      'A practical checklist I use to ship features with confidence: metrics, alerts, docs, and release plans.',
    link: 'https://www.linkedin.com/in/muslihz/',
  },
  {
    title: 'Frontend UX Details that Matter',
    excerpt:
      'Micro-interactions, accessibility, and content structure that elevate the overall product experience.',
    link: 'https://www.linkedin.com/in/muslihz/',
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Writing</h2>
            <p className="mt-2 text-slate-600">Thoughts on engineering, delivery, and product.</p>
          </div>
          <a
            href="https://www.linkedin.com/in/muslihz/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            More on LinkedIn
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl ring-1 ring-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 ring-1 ring-inset ring-blue-200 px-2.5 py-1 rounded-md text-xs font-medium">
                <PenSquare size={14} />
                Article
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <div className="mt-4">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Read on LinkedIn
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="sm:hidden mt-8">
          <a
            href="https://www.linkedin.com/in/muslihz/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            More on LinkedIn
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
