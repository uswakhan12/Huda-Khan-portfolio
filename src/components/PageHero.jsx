import React from 'react'

export default function PageHero({ kicker, title, lead, image, imageAlt = '' }) {
  return (
    <header className="page-hero ally-page-hero">
      <div className="container page-hero-inner">
        {kicker ? <p className="kicker animate-in">{kicker}</p> : null}
        {image ? (
          <div className="page-hero-photo animate-in delay-a">
            <img src={image} alt={imageAlt || title || ''} />
          </div>
        ) : null}
        <h1 className={`page-title animate-in ${image ? 'delay-b' : 'delay-a'}`}>{title}</h1>
        {lead ? (
          <p className={`page-lead animate-in ${image ? 'delay-c' : 'delay-b'}`}>{lead}</p>
        ) : null}
      </div>
    </header>
  )
}
