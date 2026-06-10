import React from 'react'

export default function About({ summary }) {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>{summary}</p>
    </section>
  )
}
