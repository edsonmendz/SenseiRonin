import React from 'react'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Sensei Ronin: O Caminho da Disciplina e do Autocontrole.</h1>
            <p className="lead">Aulas de Judô, Defesa Pessoal e Autocontrole — para quem busca força e técnica.</p>
            <div className="hero-cta">
              <a className="btn primary" href="#contact">Comece Agora</a>
              <a className="btn ghost" href="#profile">Conheça o Sensei</a>
            </div>
          </div>

          <div className="hero-cards">
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
            <article className="card card-3">
              <img src="https://www.reporterguaibense.com.br/uploads/images/2020/06/autocontrole-e-sensacao-de-bem-estar-com-as-artes-marciais.jpg" alt="Aula 3" />
              <div className="card-overlay"></div>
              <div className="card-text">Treino de Autocontrole</div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
