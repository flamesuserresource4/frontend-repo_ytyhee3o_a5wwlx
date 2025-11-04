import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Muslih Z. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/muslihz/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/muslihz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-slate-900 hover:bg-slate-800"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
