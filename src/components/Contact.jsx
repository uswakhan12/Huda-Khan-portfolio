import React from 'react'

export default function Contact({ info = {} }) {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p><strong>Email:</strong> <a href={`mailto:${info.email}`}>{info.email}</a></p>
      <p><strong>Location:</strong> {info.location}</p>
    </section>
  )
}
