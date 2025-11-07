import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // Fechar menu ao clicar fora ou ao pressionar ESC
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      return
    }

    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav') && !e.target.closest('.menu-toggle') && !e.target.closest('.menu-overlay')) {
        setMenuOpen(false)
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="#hero" onClick={closeMenu}>
          <img 
            src="sensei-ronin-logo.png"
            alt="Sensei Ronin Logo - Jiu Jitsu Ronin Judo Dojo" 
            loading="eager"
            decoding="async"
          />
        </a>
        
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={closeMenu}>Início</a>
          <a href="#inclusive" onClick={closeMenu}>Judô Inclusivo</a>
          <a href="#profile" onClick={closeMenu}>Sensei</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
          <a href="#location" onClick={closeMenu}>Nos Encontre</a>
        </nav>
      </div>
    </header>
  )
}
