import React, { useState } from 'react'
import PageHero from '../components/PageHero'
import { data } from '../data'

const initial = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${data.contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio contact — Dr Huda Khan',
          message: form.message,
          _template: 'table'
        })
      })

      const result = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(result.message || 'Unable to send message right now.')
      }

      setStatus('success')
      setForm(initial)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please email directly instead.')
    }
  }

  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Get in touch"
        lead="Send a message below - it goes straight to my inbox. I welcome conversations about collaboration, mentorship, academic work and the BPPA Irish Chapter."
      />
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <h2 className="panel-title">Direct details</h2>
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span>{data.contact.location}</span>
            </div>
            <p className="contact-hint">
              Prefer email? You can also write directly to{' '}
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>.
            </p>
          </aside>

          <div className="contact-panel contact-form-panel">
            {status === 'success' ? (
              <div className="form-success" role="status">
                <h2>Message sent</h2>
                <p>Thank you for getting in touch. I’ll reply as soon as I can.</p>
                <button type="button" className="btn soft" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <h2 className="panel-title">Send a message</h2>

                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="field">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="What is this about?"
                  />
                </label>

                <label className="field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={6}
                    placeholder="Write your message here..."
                  />
                </label>

                {status === 'error' ? (
                  <p className="form-error" role="alert">
                    {errorMsg}{' '}
                    <a href={`mailto:${data.contact.email}?subject=${encodeURIComponent(form.subject || 'Portfolio contact')}`}>
                      Email me directly
                    </a>
                    .
                  </p>
                ) : null}

                <button className="btn soft" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
