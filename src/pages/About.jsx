import React from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { manifesto } from '../manifesto'
import { data } from '../data'

export default function About() {
  return (
    <main>
      <PageHero
        kicker="About Me"
        image="/huda-portrait.jpg"
        imageAlt="Dr Huda Khan"
        title={data.name}
        lead="Leadership, service and academic commitment - with a clear ambition to build lasting value for our professional community."
      />

      <section className="section">
        <div className="container narrow">
          {manifesto.aboutClosing.map((para, i) => (
            <p key={i} className="prose statement-block">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="section soft-band">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Leadership, Voluntary & Management Experience</h2>
            <div className="two-col-panels">
              <div>
                <h3 className="panel-title">Undergraduate Leadership and Engagement</h3>
                <ul className="clean-list">
                  {manifesto.undergraduateLeadership.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3 className="panel-title about-subpanel">Academic Achievements</h3>
                <ul className="clean-list">
                  {manifesto.academicAchievements.map((item, i) => (
                    <li key={i}>
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <>
                          {item.text}
                          <ul className="clean-list nested-list">
                            {item.subpoints.map((sub, j) => (
                              <li key={j}>{sub}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="panel-title">Postgraduate Leadership, Advocacy & Professional Engagement</h3>
                <ul className="clean-list">
                  {manifesto.postgraduateLeadership.map((item, i) => (
                    <li key={i}>
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <>
                          {item.text}
                          <ul className="clean-list nested-list">
                            {item.subpoints.map((sub, j) => (
                              <li key={j}>{sub}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
