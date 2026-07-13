import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Publications from './components/Publications'
import Audits from './components/Audits'
import Presentations from './components/Presentations'
import Awards from './components/Awards'
import Teaching from './components/Teaching'
import { data } from './data'

export default function App() {
  return (
    <div>
      <Nav />
      <main className="container">
        <Hero {...data} />

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="card">
            <div className="skills-list">
              {data.skills?.map((s, i) => <span key={i} className="skill">{s}</span>)}
            </div>
          </div>
        </section>

        <Awards items={data.awards} />

        <Courses items={data.courses} />
        <Publications items={data.publications} />
        <Audits items={data.clinicalAudits} />
        <Presentations items={data.presentations} />
        <Teaching items={data.teaching} />
        <Contact info={data.contact} />
      </main>
    </div>
  )
}
