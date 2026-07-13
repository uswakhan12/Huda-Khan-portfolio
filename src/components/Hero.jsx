import React from 'react'

export default function Hero({ name, title, summary }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="logo-strip">
          <img src="/logos/ameer.png" alt="Ameer-Ud-Din Medical College Alumni Association" />
          <img src="/logos/bppa.png" alt="Irish Chapter — British Pakistani Psychiatrists Association" />
          <img src="/logos/appne.png" alt="Association of Pakistani Physicians of Northern Europe (APPNE)" />
        </div>
        <h1>{name}</h1>
        <p className="title">{title}</p>
        <p className="lead">{summary}</p>
        <div className="hero-actions">
          <a className="btn" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  )
}
