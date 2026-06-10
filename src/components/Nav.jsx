import React, { useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
  { id: 'courses', label: 'Courses' },
  { id: 'audits', label: 'Clinical Audits' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'contact', label: 'Contact' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  React.useEffect(() => {
    const onScroll = () => {
      const positions = links.map(l => {
        const el = document.getElementById(l.id)
        if (!el) return { id: l.id, top: Infinity }
        return { id: l.id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      positions.sort((a, b) => a.top - b.top)
      if (positions[0]) setActive(positions[0].id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="nav">
      <div className="nav-inner container">
        <a href="#home" className="brand">Dr Huda Khan</a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={active === l.id ? 'active' : ''}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
