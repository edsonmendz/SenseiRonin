import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Inclusive from './components/Inclusive'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Location from './components/Location'

export default function App() {
  // Scroll to hash on route changes (works with anchor links)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="inclusive">
          <Inclusive />
        </section>

        <section id="profile">
          <Profile />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="location">
          <Location />
        </section>
      </main>
    </div>
  )
}
