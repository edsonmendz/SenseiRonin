import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Fale Conosco e Comece Sua Jornada</h2>
          <p className="subtitle">Escolha o canal que preferir — responderemos com atenção e carinho.</p>
        </div>

        <div className="contact-grid">
          <a className="contact-btn whatsapp" href="https://wa.me/+5521964416875" target="_blank" rel="noreferrer" aria-label="Contato via WhatsApp">
            <div className="btn-icon-wrapper">
              <span className="icon" aria-hidden>💬</span>
            </div>
            <div className="btn-content">
              <span className="label">WhatsApp</span>
              <span className="btn-description">Mensagem direta</span>
            </div>
            <span className="btn-arrow" aria-hidden>→</span>
          </a>

          <a className="contact-btn mail" href="mailto:professorronnin@gmail.com" aria-label="Contato via Email">
            <div className="btn-icon-wrapper">
              <span className="icon" aria-hidden>✉️</span>
            </div>
            <div className="btn-content">
              <span className="label">Email</span>
              <span className="btn-description">professorronnin@gmail.com</span>
            </div>
            <span className="btn-arrow" aria-hidden>→</span>
          </a>

          <a className="contact-btn insta" href="https://www.instagram.com/judo_ronnin/" target="_blank" rel="noreferrer" aria-label="Siga-nos no Instagram">
            <div className="btn-icon-wrapper">
              <span className="icon" aria-hidden>📸</span>
            </div>
            <div className="btn-content">
              <span className="label">Instagram</span>
              <span className="btn-description">@judo_ronnin</span>
            </div>
            <span className="btn-arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
