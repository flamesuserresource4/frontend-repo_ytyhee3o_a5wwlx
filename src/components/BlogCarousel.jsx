import { PenSquare, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

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
  {
    title: 'Scaling Teams with Strong Engineering Practices',
    excerpt:
      'Principles for code review, documentation, and incident response that scale with the org.',
    link: 'https://www.linkedin.com/in/muslihz/',
  },
]

function PostCard({ post }) {
  return (
    <article className="w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] shrink-0 rounded-xl ring-1 ring-slate-200 bg-white p-6 hover:shadow-xl transition-shadow">
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
  )
}

export default function BlogCarousel() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const total = posts.length

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

        <div className="relative mt-8">
          <div ref={trackRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2" style={{ scrollBehavior: 'smooth' }}>
            {posts.map((post) => (
              <div key={post.title} className="snap-start">
                <PostCard post={post} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 ring-slate-300 bg-white hover:bg-slate-50"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full cursor-pointer ${i === index ? 'bg-slate-900' : 'bg-slate-300'}`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setIndex((i) => (i + 1) % total)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 ring-slate-300 bg-white hover:bg-slate-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
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
