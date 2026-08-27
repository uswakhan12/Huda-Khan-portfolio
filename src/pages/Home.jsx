import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data'
import { manifesto } from '../manifesto'
import Reveal from '../components/Reveal'
import PriorityIcon from '../components/PriorityIcon'

const tags = [
  'Psychiatry BST Trainee',
  'Candidate - Executive Lead, BPPA Irish Chapter',
  'Mental Health Advocate'
]

export default function Home() {
  return (
    <main className="ally-home">
      <section className="ally-hero">
        <div className="ally-hero-glow" aria-hidden="true" />

        <div className="container ally-hero-main">
          <p className="ally-kicker animate-in">Standing for {manifesto.roleSeeking}</p>
          <h1 className="ally-name animate-in delay-a">{data.name}</h1>
          <p className="ally-tagline animate-in delay-b">{manifesto.visionLine}</p>
          <p className="ally-intro animate-in delay-c">
            Building a vibrant, collaborative, academically active and culturally connected
            professional community of Pakistani psychiatrists in Ireland.
          </p>

          <ul className="ally-tags animate-in delay-d">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="ally-ctas animate-in delay-e">
            <Link className="btn soft" to="/vision">
              Read my vision
            </Link>
            <Link className="btn outline-dark" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section soft-band">
        <div className="container">
          <Reveal>
            <p className="kicker center">Core Priorities</p>
            <h2 className="section-title center display-lg">What I want to build</h2>
          </Reveal>
          <div className="ally-focus-grid">
            {manifesto.prioritySummaries.slice(0, 4).map((p, i) => (
              <Reveal key={p.title} delay={i * 80} as="div">
                <Link to="/priorities" className="ally-focus-card">
                  <PriorityIcon name={p.icon} />
                  <span className="focus-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-link-wrap">
            <Link className="text-link" to="/priorities">
              Explore all seven priorities →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container ally-story">
          <Reveal>
            <p className="kicker">The invitation</p>
            <h2 className="section-title display-lg">More than a network</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="ally-quote">{manifesto.personalStatement[1]}</p>
          </Reveal>
          <Reveal delay={180} className="ally-story-actions">
            <Link className="btn soft" to="/leadership">
              Executive team proposal
            </Link>
            <Link className="btn outline-dark" to="/about">
              About me
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section soft-band">
        <div className="container ally-now">
          <Reveal>
            <p className="kicker">Currently</p>
            <h2 className="section-title">{data.currentPosition.role}</h2>
            {data.currentPosition.organisation ? (
              <p className="prose">{data.currentPosition.organisation}</p>
            ) : null}
          </Reveal>
          <Reveal delay={120} className="ally-now-grid">
            <div>
              <h3>Vision</h3>
              <p>A collaborative, academically active and culturally connected chapter.</p>
              <Link to="/vision">Read my vision →</Link>
            </div>
            <div>
              <h3>Leadership</h3>
              <p>A collaborative executive structure for BPPA Irish Chapter.</p>
              <Link to="/leadership">See the plan →</Link>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Open to conversations about collaboration and community building.</p>
              <Link to="/contact">Say hello →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
