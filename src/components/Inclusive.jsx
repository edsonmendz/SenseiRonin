import React from 'react'

const cards = [
  { 
    title: 'Autismo', 
    text: 'Programas adaptados com rotinas previsíveis e suporte sensorial.',
    icon: '🧡',
    color: 'autism'
  },
  { 
    title: 'TDAH', 
    text: 'Aulas curtas e dinâmicas que aproveitam o foco em movimento.',
    icon: '🌻',
    color: 'sunflower'
  },
  { 
    title: 'Psicomotricidade', 
    text: 'Atividades que promovem coordenação e confiança motora.',
    icon: '🤗',
    color: 'care'
  }
]

export default function Inclusive() {
  return (
    <div className="inclusive">
      <div className="inclusive-background"></div>
      <div className="container">
        <div className="inclusive-header">
          <h2>Judô Inclusivo</h2>
          <p className="subtitle">Acolhimento, respeito e adaptação — espaço seguro para todos.</p>
        </div>

        <div className="card-grid">
          {cards.map((c) => (
            <article className={`info-card info-card-${c.color}`} key={c.title}>
              <div className="card-icon-wrapper">
                <div className="icon" aria-hidden>{c.icon}</div>
              </div>
              <div className="card-content">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
