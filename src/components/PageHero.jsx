import React from 'react'

export default function PageHero({ kicker, title, lead }) {
  return (
    <header className="page-hero ally-page-hero">
      <div className="container page-hero-inner">
        {kicker ? <p className="kicker animate-in">{kicker}</p> : null}
        <h1 className="page-title animate-in delay-a">{title}</h1>
        {lead ? <p className="page-lead animate-in delay-b">{lead}</p> : null}
      </div>
    </header>
  )
}
