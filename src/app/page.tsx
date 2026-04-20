import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import CredibilityBar from '@/components/sections/CredibilityBar'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import CursorDots from '@/components/ui/CursorDots'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0E0E12', minHeight: '100vh' }}>
      <CursorDots />
      <Navbar />
      <Hero />
      <CredibilityBar />
      <Projects />
      <Skills />
      <About />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}