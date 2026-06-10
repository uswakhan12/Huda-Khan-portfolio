import React from 'react'

export default function Publications({ items = [] }) {
  if (!items || items.length === 0) return null
  return (
    <section id="publications" className="section">
      <h2>Publications</h2>
      {items.map((p, i) => (
        <div className="card" key={i}>
          <p>{p.citation}</p>
        </div>
      ))}
    </section>
  )
}
