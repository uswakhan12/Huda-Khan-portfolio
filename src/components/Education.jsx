import React from 'react'

export default function Education({ items = [] }) {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      {items.map((it, idx) => (
        <div key={idx} className="card">
          <h3>{it.degree}</h3>
          <span className="muted">{it.school} • {it.period}</span>
          {it.details && <p>{it.details.join(' • ')}</p>}
        </div>
      ))}
    </section>
  )
}
