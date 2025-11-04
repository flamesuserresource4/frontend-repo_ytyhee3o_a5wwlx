import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsCarousel from './components/ProjectsCarousel'
import BlogCarousel from './components/BlogCarousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProjectsCarousel />
        <BlogCarousel />
      </main>
      <Footer />
    </div>
  )
}

export default App
