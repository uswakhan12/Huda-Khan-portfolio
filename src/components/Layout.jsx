import React, { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import Marquee from './Marquee'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/vision', label: 'Vision' },
  { to: '/priorities', label: 'Priorities' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/newsletter', label: 'E-Newsletter' },
  { to: '/about', label: 'About' },
  { to: '/creative', label: 'Artwork' },
  { to: '/contact', label: 'Contact' }
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div className="site">
      <ScrollToTop />
      <header className="site-nav ally-nav">
        <div className="site-nav-inner">
          <Link to="/" className="brand">
            <span className="brand-name">Dr Huda Khan</span>
          </Link>
          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`site-links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <Marquee items={['Inclusion', 'Connection', 'Collaboration', 'Contribution']} />

      <div key={location.pathname} className="page-shell">
        <Outlet />
      </div>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand">Dr Huda Khan</p>
            <p className="footer-note">Inclusion · Connection · Collaboration · Contribution</p>
          </div>
          <p className="credit">
            Website made by{' '}
            <a
              href="https://www.linkedin.com/in/uswa-khan-070b85260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uswa Khan
              <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.06-2.065 2.064 2.064 0 112.06 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
