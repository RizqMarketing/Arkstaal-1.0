'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../components/LanguageContext'
import { blogPosts } from '@/lib/blogposts'

const CATEGORY_COLORS: Record<string, string> = {
  'Roestvrij Staal': '#1A2332',
  'Decoratief': '#7C4A0A',
  'Aluminium': '#2B5FA3',
  'Inkoop & Kwaliteit': '#1C6B3A',
  'Services': '#4A1A6B',
  'Koper': '#8B3A0A',
  'Messing': '#6B5A0A',
  'Non-ferro': '#1A4A4A',
  'Buizen & Fittingen': '#2A3A5A',
}

export default function BlogPage() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

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
            <a href="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
            <a href="/blog" className="nav-item" style={{ color: 'var(--navy)', borderBottom: '2px solid var(--navy)' }} onClick={() => setMobileMenuOpen(false)}>Blog</a>
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
          <div className="section-label" style={{ color: 'rgba(255,255,255,.45)' }}>Kennisbank</div>
          <h1 className="contact-page-title">Blog & Vakartikelen</h1>
          <p className="contact-page-sub">Praktische kennis over metalen, materialen en bewerkingstechnieken — voor inkopers, constructeurs en technici.</p>
        </div>
      </div>

      {/* BLOG GRID */}
      <div style={{ padding: '64px 0 80px', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px',
          }}>
            {blogPosts.map(post => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'box-shadow .2s, transform .2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,.10)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                {/* Colour bar */}
                <div style={{
                  height: '4px',
                  background: CATEGORY_COLORS[post.category] ?? 'var(--navy)',
                }} />
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '.06em',
                      textTransform: 'uppercase',
                      color: 'white',
                      background: CATEGORY_COLORS[post.category] ?? 'var(--navy)',
                      padding: '3px 9px',
                      borderRadius: '4px',
                    }}>{post.category}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>{post.readTime} min lezen</span>
                  </div>
                  <h2 style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: 'var(--text-1)', lineHeight: '1.35' }}>
                    {post.title}
                  </h2>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.6', flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>{post.date}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Lees meer
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M8 3.5L11 6.5L8 9.5" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '56px',
            padding: '40px',
            background: 'var(--navy)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>Vraag & Aanbod</div>
            <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: 'white' }}>Een specifieke vraag over materialen?</h3>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'rgba(255,255,255,.6)', maxWidth: '480px' }}>
              Onze specialisten helpen u bij de juiste materiaalkeuze, specificaties en offertes. Direct contact, korte lijnen.
            </p>
            <a href="/contact" className="btn btn-primary" style={{ marginTop: '8px' }}>Neem contact op</a>
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
                <span>Uw specialist in roestvrij staal</span><br />
                <span>& aluminium. Culemborg, NL.</span>
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
                <a href="/blog">Blog</a>
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
