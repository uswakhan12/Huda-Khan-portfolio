import React from 'react'

export default function Skills({ items = [] }) {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-list">
        {items.map((s, i) => <span key={i} className="skill">{s}</span>)}
      </div>
    </section>
  )
}
