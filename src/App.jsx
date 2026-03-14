import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Experience, Contact, Footer } from './components/Sections'
import { ScrollTop } from './components/UI'
import { NAV } from './data'

function useActiveSection() {
  const [active, setActive] = useState('Home')
  useEffect(() => {
    const ids = NAV.map(n => n.toLowerCase())
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id
          setActive(id.charAt(0).toUpperCase() + id.slice(1))
        }
      })
    }, { threshold: 0.3, rootMargin: '-5% 0px -55% 0px' })
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
  return active
}

export default function App() {
  const active = useActiveSection()
  return (
    <>
      <Navbar active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  )
}
