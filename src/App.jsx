import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Inclusive from './components/Inclusive'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Location from './components/Location'

// Meta information per section to improve indexing (updated on visibility)
const SECTION_META = {
  hero: {
    title: 'Sensei Ronin: O Caminho da Disciplina e do Autocontrole',
    description: 'Aulas de Judô, Defesa Pessoal e Autocontrole — disciplina marcial com acolhimento.'
  },
  inclusive: {
    title: 'Judô Inclusivo — Sensei Ronin',
    description: 'Programas adaptados para Autismo, TDAH e dificuldades psicomotoras com foco em acolhimento.'
  },
  profile: {
    title: 'Sensei Ronin — Perfil e Credenciais',
    description: 'Faixa Preta 3º Dan, certificações em psicomotricidade e especialização em transtornos de aprendizagem.'
  },
  contact: {
    title: 'Contato — Sensei Ronin',
    description: 'Fale conosco por WhatsApp, email ou Instagram e comece sua jornada.'
  },
  location: {
    title: 'Dojo Ronin — Localização',
    description: 'Venha nos visitar — mapa e informações de contato do Dojo Ronin.'
  }
}

function updateMetaForSection(id) {
  const meta = SECTION_META[id]
  if (!meta) return

  document.title = meta.title

  let desc = document.querySelector('meta[name="description"]')
  if (!desc) {
    desc = document.createElement('meta')
    desc.name = 'description'
    document.head.appendChild(desc)
  }
  desc.content = meta.description

  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.content = meta.title

  let ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.content = meta.description

  // adjust canonical to include fragment identifier for better deep linking
  let canonical = document.querySelector('link[rel="canonical"]')
  try {
    const base = (canonical && canonical.href) || window.location.origin + '/'
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = base.split('#')[0] + '#' + id
  } catch (e) {
    // ignore
  }
}

export default function App() {
  // Handle smooth scroll for anchor links and update URL
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const { target } = e
      if (target && target.tagName && target.tagName.toLowerCase() === 'a' && target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          // Update URL without causing page jump
          window.history.pushState(null, '', target.hash)
          updateMetaForSection(target.hash.replace('#', ''))
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  // Observe sections and update meta/title when they become visible
  useEffect(() => {
    const ids = Object.keys(SECTION_META)
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          updateMetaForSection(id)
        }
      })
    }, { root: null, rootMargin: '0px', threshold: 0.5 })

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
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
