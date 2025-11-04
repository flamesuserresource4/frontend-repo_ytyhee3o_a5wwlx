import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsPreview from './components/ProjectsPreview'
import BlogPreview from './components/BlogPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProjectsPreview />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}

export default App
