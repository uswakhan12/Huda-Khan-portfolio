import React from 'react'

export default function Hero({ name, title, summary }) {
  return (
    <section id="home" className="hero">
      <div className="container">
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
