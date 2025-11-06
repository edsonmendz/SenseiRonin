import React from 'react'
import judoInclusivoImg from '../assets/judoinclusivo.jpeg'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Dojô Ronin</h1>
            <h1>O Caminho da Disciplina e do Autocontrole.</h1>
            <p className="lead">Aulas de Judô, Defesa Pessoal e Autocontrole — para quem busca força e técnica.</p>
            <div className="hero-cta">
              <a className="btn primary" href="#contact">Comece Agora</a>
              <a className="btn ghost" href="#profile">Conheça o Sensei</a>
            </div>
          </div>
          <div className="hero-cards">
            <div className="hero-card-horizontal">
              <article className="card card-1">
                  <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/adfcf9b1253df6b137ad173210ee2852.jpg" alt="Aula 1" />
                  <div className="card-overlay"></div>
                  <div className="card-text">Aulas de Judô Tradicional</div>
                </article>
                <article className="card card-2">
                  <img src="https://as1.ftcdn.net/jpg/05/48/64/48/1000_F_548644845_n732ZQyO87mHAb5XyOxYg8yaGwRWddz7.jpg" alt="Aula 2" />
                  <div className="card-overlay"></div>
                  <div className="card-text">Defesa Pessoal</div>
                </article>
            </div>
            <div className="hero-card-vertical">
              <article className="card card-3">
                <img src={judoInclusivoImg} alt="Judô inclusivo" />
                <div className="card-overlay"></div>
                <div className="card-text">Judô inclusivo</div>
              </article>
            </div>
          </div>   
        </div>
      </div>
    </div>
  )
}
