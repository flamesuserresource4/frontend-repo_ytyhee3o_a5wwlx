import { ArrowRight, Code2 } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays to improve text contrast; don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ minHeight: '70vh' }}>
        <div className="flex flex-col justify-center items-start gap-6 py-24 sm:py-32" style={{ minHeight: '70vh' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-slate-900 text-xs font-medium ring-1 ring-inset ring-white/60 backdrop-blur">
            <Code2 size={14} />
            Software Engineer
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow">Hi, I’m Muslih. I build reliable, scalable software.</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/90">
            Experienced in crafting performant web backends and delightful user experiences. Passionate about clean
            architecture, developer experience, and shipping impact.
          </p>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-slate-900 font-medium hover:bg-slate-100 shadow"
            >
              Lihat Proyek
              <ArrowRight size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/muslihz/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900/80 px-5 py-3 text-white font-medium ring-1 ring-white/20 hover:bg-slate-900/90 backdrop-blur"
            >
              Terhubung di LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
