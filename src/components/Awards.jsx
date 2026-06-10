import React from 'react'

export default function Awards({ items = {} }) {
  if (!items) return null
  return (
    <section id="awards" className="section">
      <h2>Awards & Scholarships</h2>
      {items.postgraduate && (
        <div className="card">
          <h4>Postgraduate</h4>
          <ul>{items.postgraduate.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </div>
      )}
      {items.undergraduate && (
        <div className="card">
          <h4>Undergraduate</h4>
          <ul>{items.undergraduate.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </div>
      )}
    </section>
  )
}
