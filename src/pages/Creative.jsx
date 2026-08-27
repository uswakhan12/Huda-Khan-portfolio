import React from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { manifesto } from '../manifesto'

const artworks = [
  {
    src: '/artwork/daffodil.png',
    title: 'Daffodil',
    alt: 'Artwork of a yellow daffodil held beside a real daffodil in a spring field'
  },
  {
    src: '/artwork/autumn-leaf.png',
    title: 'Autumn Leaf',
    alt: 'Watercolour painting of an autumn oak leaf in warm brown and orange tones'
  }
]

export default function Creative() {
  return (
    <main>
      <PageHero
        kicker="Creative & Other Achievements"
        title="Arts and creative expression"
        lead="Alongside medicine and psychiatry, I have maintained a longstanding interest in the arts and creative expression."
      />

      <section className="section">
        <div className="container narrow">
          <Reveal>
            <ul className="clean-list">
              {manifesto.creativeAchievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section soft-band">
        <div className="container">
          <Reveal>
            <p className="kicker center">Gallery</p>
            <h2 className="section-title center">Artwork</h2>
          </Reveal>
          <div className="artwork-grid">
            {artworks.map((art, i) => (
              <Reveal key={art.src} delay={i * 100}>
                <figure className="artwork-card">
                  <img src={art.src} alt={art.alt} loading="lazy" />
                  <figcaption>{art.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
