import React from 'react'

export default function Courses({ items = [] }) {
  return (
    <section id="courses" className="section">
      <h2>Courses & Certifications</h2>
      <div className="table-wrap">
        <table className="courses-table">
          <thead>
            <tr><th>Course</th><th>Location</th></tr>
          </thead>
          <tbody>
            {items.map((c, i) => (
              <tr key={i}><td>{c.course}</td><td>{c.location}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
