import React from 'react'

function PresentationTable({ items = [] }) {
  if (!items || items.length === 0) return null
  return (
    <div className="table-wrap">
      <table className="courses-table">
        <thead>
          <tr><th>Title</th><th>Conference</th><th>Date</th></tr>
        </thead>
        <tbody>
          {items.map((p, i) => (
            <tr key={i}><td>{p.title}</td><td>{p.conference}</td><td>{p.date}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Presentations({ items = {} }) {
  return (
    <section id="presentations" className="section">
      <h2>Presentations</h2>
      <h3>Oral Presentations</h3>
      <PresentationTable items={items.oral} />
      <h3>Poster Presentations</h3>
      <PresentationTable items={items.poster} />
    </section>
  )
}
