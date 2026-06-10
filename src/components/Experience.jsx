import React from 'react'

export default function Experience({ items = [] }) {
  const visible = (it) => {
    if (!it) return false
    const keys = ['role','clinicalSite','grade','specialty','supervisingConsultant','fromTo','details','company','period']
    return keys.some(k => {
      const v = it[k]
      if (!v) return false
      if (Array.isArray(v)) return v.length > 0
      return String(v).trim().length > 0
    })
  }

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {items.filter(visible).map((it, idx) => {
        const title = it.role || (it.grade ? `${it.grade} — ${it.clinicalSite || ''}` : it.clinicalSite)
        const subtitleParts = []
        if (it.specialty) subtitleParts.push(it.specialty)
        if (it.supervisingConsultant) subtitleParts.push(`Supervisor: ${it.supervisingConsultant}`)
        if (it.fromTo) subtitleParts.push(it.fromTo)
        if (it.monthsInPost) subtitleParts.push(`${it.monthsInPost} months`)
        return (
          <div key={idx} className="card">
            <div className="card-head">
              <h3>{title}</h3>
              <span className="muted">{subtitleParts.join(' • ')}</span>
            </div>
            {it.details && it.details.length > 0 ? (
              <ul>
                {it.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            ) : null}
          </div>
        )
      })}
    </section>
  )
}
