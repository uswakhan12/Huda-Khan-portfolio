import React from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { manifesto } from '../manifesto'

export default function Vision() {
  return (
    <main>
      <PageHero
        kicker="My Vision"
        title={manifesto.visionLine}
        lead="A collaborative, academically active and culturally connected professional community."
      />
      <section className="section">
        <div className="container narrow">
          <Reveal>
            <h2 className="section-title">Personal Statement</h2>
          </Reveal>
          <div className="statement-stack">
            {manifesto.personalStatement.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="prose statement-block">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
