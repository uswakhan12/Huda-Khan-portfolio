import React from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import PriorityIcon from '../components/PriorityIcon'
import { manifesto } from '../manifesto'

export default function Priorities() {
  return (
    <main>
      <PageHero
        kicker="Core Priorities"
        title="Core Priorities for the BPPA Irish Chapter"
        lead="Seven commitments to strengthen collaboration, learning, mentorship, careers, culture and wider partnerships."
      />
      <section className="section">
        <div className="container">
          <div className="priority-list">
            {manifesto.priorities.map((p, idx) => (
              <Reveal key={p.number} delay={(idx % 3) * 70}>
                <article className="priority-block">
                  <div className="priority-head">
                    <PriorityIcon name={p.icon} className="priority-icon-lg" />
                    <span className="priority-num">{p.number}</span>
                    <h2>{p.title}</h2>
                  </div>
                  {p.body.map((para, i) => (
                    <p key={i} className="prose">
                      {para}
                    </p>
                  ))}
                  {p.bullets ? (
                    <ul className="clean-list">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
