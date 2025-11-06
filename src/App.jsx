import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Inclusive from './components/Inclusive'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Location from './components/Location'

export default function App() {
  // Handle smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const { target } = e
      if (target.tagName.toLowerCase() === 'a' && target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          // Update URL without causing page jump
          window.history.pushState(null, '', target.hash)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
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
