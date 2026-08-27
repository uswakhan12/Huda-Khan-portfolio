import React from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { manifesto } from '../manifesto'

export default function Newsletter() {
  return (
    <main>
      <PageHero
        kicker="Communication"
        title="BPPA Irish Chapter E-Newsletter"
        lead={manifesto.newsletter.intro}
      />
      <section className="section">
        <div className="container narrow">
          <Reveal>
            <p className="list-label">Featuring</p>
            <ul className="pill-list">
              {manifesto.newsletter.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p className="prose">{manifesto.newsletter.closing}</p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
