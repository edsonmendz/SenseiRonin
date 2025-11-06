import React from 'react'
import senseiPerfil from '../assets/roni.jpeg'

export default function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <div className="profile-header">
          <h2>Sensei Ronin</h2>
          <p className="subtitle">Cuidado, método e credenciais — experiência que transforma.</p>
        </div>
        
        <div className="profile-inner">
          <div className="profile-img">
            <div className="profile-img-wrapper">
              <img src={senseiPerfil} alt="Sensei Ronin" />
              {/*<div className="profile-badge">Faixa Preta 2º Dan</div>*/}
            </div>
          </div>
          
          <div className="profile-content">
            <p className="profile-description">
              Sensei Ronin combina disciplina marcial com sensibilidade pedagógica. 
              Experiência em ensino para todas as idades e necessidades, criando um espaço 
              onde cada aluno desenvolve seu potencial único.
            </p>
            
            <div className="credentials">
              <h3 className="credentials-title">Formação e Experiência</h3>
              <ul className="credentials-list">
                <li>
                  <span className="credential-icon">🥋</span>
                  <span className="credential-text">
                    <strong>Faixa Preta 2º Dan</strong><br />
                    15 Anos de Experiência em Judô
                  </span>
                </li>
                <li>
                  <span className="credential-icon">🎓</span>
                  <span className="credential-text">
                    <strong>Certificação em Psicomotricidade</strong><br />
                    Desenvolvimento motor e cognitivo
                  </span>
                </li>
                <li>
                  <span className="credential-icon">💡</span>
                  <span className="credential-text">
                    <strong>Especialização em Transtornos de Aprendizagem</strong><br />
                    Educação inclusiva e adaptada
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
