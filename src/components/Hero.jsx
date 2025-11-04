import { ArrowRight, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.18),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium ring-1 ring-inset ring-blue-200">
              <Code2 size={14} />
              Software Engineer
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Hi, I’m Muslih. I build reliable, scalable software.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Experienced in crafting performant web backends and delightful user experiences.
              Passionate about clean architecture, developer experience, and shipping impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/muslihz/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-slate-700 font-medium ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-1 ring-1 ring-slate-200">
              <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center">
                <span className="text-7xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
