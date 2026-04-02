'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../components/LanguageContext'

export default function ContactPage() {
  const { lang, t, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'success'>('idle')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('success')
    setTimeout(() => setFormState('idle'), 4000)
  }

  return (
    <>
      {/* HEADER */}
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Arkstaal B.V." className="header-logo-img" style={{ height: '136px', width: 'auto', background: 'white', padding: '3px 8px', borderRadius: '4px', marginTop: '12px' }} />
          </a>

          <nav className={`nav${mobileMenuOpen ? ' mobile-open' : ''}`}>
            <div className="nav-item has-dropdown">
              {t.nav.products}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2.5 4L5.5 7L8.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div className="dropdown">
                <div className="dropdown-grid">
                  <div className="dropdown-col">
                    <div className="dropdown-label">{t.nav.stainlessSteel}</div>
                    <a href="#">{t.nav.sheetsCoils}</a>
                    <a href="#">{t.nav.pipesTubes}</a>
                    <a href="#">{t.nav.flangesFittings}</a>
                    <a href="#">{t.nav.barsFlatTypes}</a>
                    <a href="#">{t.nav.decorativeFinishes}</a>
                  </div>
                  <div className="dropdown-col">
                    <div className="dropdown-label">{t.nav.aluminium}</div>
                    <a href="#">{t.nav.sheetsPlates}</a>
                    <a href="#">{t.nav.tubesProfiles}</a>
                    <a href="#">{t.nav.barsRods}</a>
                    <a href="#">{t.nav.anodized}</a>
                  </div>
                  <div className="dropdown-col">
                    <div className="dropdown-label">{t.nav.otherMetals}</div>
                    <a href="#">{t.nav.copper}</a>
                    <a href="#">{t.nav.brass}</a>
                    <a href="#">{t.nav.nonFerrous}</a>
                  </div>
                  <div className="dropdown-col">
                    <div className="dropdown-label">{t.nav.services}</div>
                    <a href="#">{t.nav.foilingDecoiling}</a>
                    <a href="#">{t.nav.anodizing}</a>
                    <a href="#">{t.nav.customCutting}</a>
                    <a href="#">{t.nav.materialCerts}</a>
                  </div>
                </div>
                <div className="dropdown-footer">
                  <div className="dropdown-footer-text">
                    <div className="dropdown-footer-title">{t.quote.dropdownCta}</div>
                    <div className="dropdown-footer-sub">{t.quote.dropdownCtaSub}</div>
                  </div>
                  <a href="/contact" className="dropdown-footer-btn">
                    {t.quote.dropdownCta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <a href="/#downloads" className="nav-item" onClick={() => setMobileMenuOpen(false)}>{t.nav.downloads}</a>
            <a href="/#decorative" className="nav-item" onClick={() => setMobileMenuOpen(false)}>{t.nav.decorative}</a>
            <a href="/#about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="/contact" className="nav-item" style={{ color: 'var(--navy)', borderBottom: '2px solid var(--navy)' }} onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
            <div className="mobile-nav-cta">
              <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-cta-btn">
                {t.quote.dropdownCta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <div className="mobile-nav-contacts">
                <a href="tel:+31614266177" className="mobile-nav-contact-item">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M11.05 8.775l-1.625-.715a.65.65 0 00-.715.13l-.715.715a7.8 7.8 0 01-3.575-3.575l.715-.715a.65.65 0 00.13-.715L4.55 2.275A.65.65 0 003.9 1.95L2.275 2.275A.65.65 0 001.95 2.925C1.95 8.125 5.85 12.025 11.05 12.025a.65.65 0 00.65-.585l.325-1.625a.65.65 0 00-.325-.715z" fill="currentColor"/></svg>
                  +31 (0)6 14 26 61 77
                </a>
                <a href="mailto:info@arkstaal.nl" className="mobile-nav-contact-item">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="3" width="10" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.2"/><path d="M1.5 5l5 3.25L11.5 5" stroke="currentColor" strokeWidth="1.2"/></svg>
                  info@arkstaal.nl
                </a>
              </div>
            </div>
          </nav>

          <div className="header-actions">
            <button className="lang-toggle" onClick={toggle} aria-label="Taal wisselen">
              <span className={lang === 'nl' ? 'lang-active' : ''}>NL</span>
              <span className="lang-sep">|</span>
              <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
            </button>
            <a href="/contact" className="btn btn-primary">{t.nav.requestQuote}</a>
            <button className="hamburger" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
              <span style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={mobileMenuOpen ? { opacity: 0 } : {}} />
              <span style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>
      </header>

      {/* PAGE HEADER */}
      <div className="contact-page-header">
        <div className="container">
          <div className="section-label" style={{ color: 'rgba(255,255,255,.45)' }}>{t.contact.label}</div>
          <h1 className="contact-page-title">{t.contact.title}</h1>
          <p className="contact-page-sub">{t.contact.sub}</p>
        </div>
      </div>

      {/* CONTACT CONTENT */}
      <div className="contact-page-body">
        <div className="container">
          <div className="contact-page-grid">

            {/* LEFT: INFO */}
            <div className="contact-page-info">
              <div className="contact-page-info-block">
                <div className="contact-page-info-label">{t.contact.address}</div>
                <div className="contact-page-info-value">
                  Erasmusweg 15<br />4104AL Culemborg<br />Nederland
                </div>
              </div>
              <div className="contact-page-info-block">
                <div className="contact-page-info-label">{t.contact.phone}</div>
                <div className="contact-page-info-value">
                  <a href="tel:+31614266177">+31 (0)6 14 26 61 77</a>
                </div>
              </div>
              <div className="contact-page-info-block">
                <div className="contact-page-info-label">{t.contact.email}</div>
                <div className="contact-page-info-value">
                  <a href="mailto:info@arkstaal.nl">info@arkstaal.nl</a>
                </div>
              </div>
              <div className="contact-page-info-block">
                <div className="contact-page-info-label">{t.contact.responseTime}</div>
                <div className="contact-page-info-value">{t.contact.responseValue}</div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <form className="contact-page-form" onSubmit={handleSubmit}>
              <div className="contact-page-form-title">{t.contact.formTitle}</div>
              <div className="contact-row">
                <div className="contact-field">
                  <label>{t.contact.name}</label>
                  <input type="text" placeholder="Jan de Vries" required />
                </div>
                <div className="contact-field">
                  <label>{t.contact.company}</label>
                  <input type="text" placeholder="Bedrijfsnaam B.V." />
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-field">
                  <label>{t.contact.emailField}</label>
                  <input type="email" placeholder="jan@bedrijf.nl" required />
                </div>
                <div className="contact-field">
                  <label>{t.contact.phoneField} <span style={{ fontWeight: 400, opacity: .6 }}>{t.contact.phoneOptional}</span></label>
                  <input type="tel" placeholder="+31…" />
                </div>
              </div>
              <div className="contact-field">
                <label>{t.contact.subject}</label>
                <select>
                  <option value="">{t.contact.selectTopic}</option>
                  {t.contact.topics.map(topic => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </div>
              <div className="contact-field">
                <label>{t.contact.message}</label>
                <textarea placeholder={t.contact.messagePlaceholder} rows={5} />
              </div>
              <button type="submit" className="contact-submit">
                {formState === 'success' ? t.contact.sent : t.contact.send}
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-brand-name">Arkstaal B.V.</div>
              <p className="footer-tagline">
                {t.footer.tagline.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
              </p>
              <div className="footer-contact-list">
                <a href="https://maps.google.com/?q=Erasmusweg+15+Culemborg" target="_blank">Erasmusweg 15, 4104AL Culemborg</a>
                <a href="tel:+31614266177">+31 (0)6 14 26 61 77</a>
                <a href="mailto:info@arkstaal.nl">info@arkstaal.nl</a>
              </div>
            </div>
            <div className="footer-nav">
              <div className="footer-col">
                <h4>{t.footer.colProducts}</h4>
                <a href="#">{t.footer.stainlessSteel}</a>
                <a href="#">{t.footer.aluminium}</a>
                <a href="#">{t.footer.decorativeFinishes}</a>
                <a href="#">{t.footer.pipesFlanges}</a>
                <a href="#">{t.footer.fittings}</a>
              </div>
              <div className="footer-col">
                <h4>{t.footer.colServices}</h4>
                <a href="#">{t.footer.foilingDecoiling}</a>
                <a href="#">{t.footer.anodizing}</a>
                <a href="#">{t.footer.customCutting}</a>
                <a href="#">{t.footer.materialCerts}</a>
                <a href="/login">{t.footer.myArkstaal}</a>
              </div>
              <div className="footer-col">
                <h4>{t.footer.colCompany}</h4>
                <a href="/#about">{t.footer.aboutArkstaal}</a>
                <a href="/contact">{t.footer.contact}</a>
                <a href="/catalog.pdf" target="_blank">{t.footer.downloadCatalogue}</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t.footer.copyright}</span>
            <div className="footer-legal">
              <a href="#">{t.footer.privacy}</a>
              <a href="#">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
