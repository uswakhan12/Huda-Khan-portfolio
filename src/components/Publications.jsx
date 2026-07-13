import React from 'react'

export default function Publications({ items = [] }) {
  if (!items || items.length === 0) return null
  return (
    <section id="publications" className="section">
      <h2>Publications</h2>
      <div className="table-wrap">
        <table className="courses-table">
          <thead>
            <tr><th>Title</th><th>Author</th><th>Journal</th></tr>
          </thead>
          <tbody>
            {items.map((p, i) => (
              <tr key={i}>
                <td>{p.title}</td>
                <td>{p.author}</td>
                <td>{p.journal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
