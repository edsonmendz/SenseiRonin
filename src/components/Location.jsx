import React from 'react'

export default function Location() {
  return (
    <div className="location">
      <div className="container">
        <div className="location-header">
          <h2>Dojô Ronin</h2>
          <p className="subtitle">Venha nos visitar — a prática começa com um passo.</p>
        </div>
        
        <div className="location-content">
          <div className="location-info">
            <div className="info-item">
              <span className="info-icon" aria-hidden>📍</span>
              <div className="info-text">
                <strong>Endereço</strong>
                <p>Estr. da Coivara, n° 0 - Chácaras Arcampo, Duque de Caxias - RJ, 25240-260</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon" aria-hidden>🕐</span>
              <div className="info-text">
                <strong>Horários</strong>
                <p>Terças e Quintas-Feiras: 17:30h - 22:30h</p>
              </div>
            </div>
          </div>
          
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235651.56377672247!2d-43.435671974166645!3d-22.65171238713606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9973d95e4bd2e1%3A0xe6165db0c021a33d!2sDOJO%20RONNIN!5e0!3m2!1spt-BR!2sbr!4v1761877159852!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Dojo Ronin no Google Maps"
              aria-label="Mapa interativo mostrando a localização do Dojo Ronin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
