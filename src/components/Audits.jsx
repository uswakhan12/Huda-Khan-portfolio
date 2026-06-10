import React from 'react'

export default function Audits({ items = [] }) {
  if (!items || items.length === 0) return null
  return (
    <section id="audits" className="section">
      <h2>Clinical Audits</h2>
      <div className="table-wrap">
        <table className="courses-table">
          <thead>
            <tr><th>Title</th><th>Authors</th></tr>
          </thead>
          <tbody>
            {items.map((a, i) => (
              <tr key={i}><td>{a.topic}</td><td>{a.authors}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
