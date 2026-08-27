import React from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { manifesto } from '../manifesto'

export default function Leadership() {
  return (
    <main>
      <PageHero
        kicker="Executive Team"
        title="Proposal of an Executive Team"
        lead={manifesto.executiveIntro}
      />

      <section className="section">
        <div className="container">
          <div className="role-grid">
            {manifesto.executiveRoles.map((role) => (
              <Reveal key={role.title}>
                <article className="role-panel">
                  <h2>{role.title}</h2>
                  <p className="role-summary">{role.summary}</p>
                  <p className="list-label">Responsible for</p>
                  <ul className="clean-list compact">
                    {role.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                  {role.note ? <p className="prose muted-note">{role.note}</p> : null}
                </article>
              </Reveal>
            ))}
          </div>
          <p className="prose closing-note">
            These positions would form a collaborative Executive Leadership Team, with each person
            bringing their own expertise, ideas and leadership to the organisation.
          </p>
        </div>
      </section>

      <section className="section soft-band">
        <div className="container narrow">
          <Reveal>
            <h2 className="section-title">Quarterly Executive Strategy and Planning Meetings</h2>
            <p className="prose">{manifesto.quarterlyMeetings.intro}</p>
            <p className="list-label">Quarterly meetings would allow us to</p>
            <ul className="clean-list">
              {manifesto.quarterlyMeetings.purposes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
