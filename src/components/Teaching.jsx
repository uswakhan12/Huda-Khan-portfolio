import React from 'react'

export default function Teaching({ items = [] }) {
  if (!items || items.length === 0) return null
  return (
    <section id="teaching" className="section">
      <h2>Teaching Experience</h2>
      <div className="card">
        <ul>
          {items.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
    </section>
  )
}
