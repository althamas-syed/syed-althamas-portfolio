import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import DataField from './components/DataField'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { initAnimations } from './lib/animations'

export default function App() {
  useEffect(() => {
    const anims = initAnimations()
    return () => anims.revert()
  }, [])

  return (
    <div className="relative min-h-screen bg-ink text-white">
      <div className="stars" aria-hidden />
      <DataField />
      <Cursor />
      <Nav />

      {/* ambient glow blobs */}
      <div
        className="glow-blob left-[-10%] top-[-5%] h-[38rem] w-[38rem] bg-violet-700/60"
        data-parallax="14"
        aria-hidden
      />
      <div
        className="glow-blob right-[-12%] top-[28%] h-[34rem] w-[34rem] bg-fuchsia-700/50"
        data-parallax="10"
        aria-hidden
      />
      <div
        className="glow-blob bottom-[10%] left-[8%] h-[30rem] w-[30rem] bg-indigo-700/50"
        data-parallax="18"
        aria-hidden
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
