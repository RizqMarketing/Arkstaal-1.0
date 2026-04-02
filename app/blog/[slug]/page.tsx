'use client'

import { use, useState, useEffect } from 'react'
import { useLanguage } from '../../components/LanguageContext'
import { getBlogPost, blogPosts, BlogSection } from '@/lib/blogposts'
import { notFound } from 'next/navigation'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const post = getBlogPost(slug)
  if (!post) notFound()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const related = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2)

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

      {/* ARTICLE HERO */}
      <div style={{ background: 'var(--navy)', padding: '64px 0 48px', borderBottom: '3px solid var(--orange)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,.5)', textDecoration: 'none', marginBottom: '20px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 3L2 7L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Terug naar blog
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '.06em',
              textTransform: 'uppercase', color: 'white',
              background: 'rgba(255,255,255,.15)', padding: '4px 10px', borderRadius: '4px',
            }}>{post.category}</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)' }}>{post.date}</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)' }}>{post.readTime} min lezen</span>
          </div>
          <h1 style={{ margin: 0, fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 800, color: 'white', lineHeight: '1.2' }}>
            {post.title}
          </h1>
          <p style={{ margin: '16px 0 0', fontSize: '16px', color: 'rgba(255,255,255,.65)', lineHeight: '1.6' }}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div style={{ padding: '56px 0 80px', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <article style={{ fontSize: '15.5px', lineHeight: '1.75', color: 'var(--text-1)' }}>
            {post.content.map((section: BlogSection, i: number) => {
              if (section.type === 'paragraph') {
                return <p key={i} style={{ margin: '0 0 20px', color: 'var(--text-2)' }}>{section.text}</p>
              }
              if (section.type === 'heading') {
                return (
                  <h2 key={i} style={{ margin: '36px 0 14px', fontSize: '20px', fontWeight: 700, color: 'var(--text-1)', borderLeft: '3px solid var(--orange)', paddingLeft: '14px' }}>
                    {section.text}
                  </h2>
                )
              }
              if (section.type === 'list') {
                return (
                  <ul key={i} style={{ margin: '0 0 20px', paddingLeft: '0', listStyle: 'none' }}>
                    {section.items?.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border)', color: 'var(--text-2)', fontSize: '14.5px' }}>
                        <span style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '3px', fontWeight: 700 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (section.type === 'tip') {
                return (
                  <div key={i} style={{
                    margin: '28px 0',
                    padding: '18px 20px',
                    background: 'rgba(232,80,10,.06)',
                    border: '1px solid rgba(232,80,10,.2)',
                    borderLeft: '4px solid var(--orange)',
                    borderRadius: '0 6px 6px 0',
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '6px' }}>Praktijktip</div>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.65' }}>{section.text}</p>
                  </div>
                )
              }
              return null
            })}
          </article>

          {/* CTA BLOCK */}
          <div style={{
            marginTop: '48px',
            padding: '32px 36px',
            background: 'var(--navy)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>Arkstaal B.V.</div>
            <h3 style={{ margin: 0, fontSize: '19px', fontWeight: 700, color: 'white' }}>Interesse in dit materiaal?</h3>
            <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,.6)', lineHeight: '1.6' }}>
              Vraag vrijblijvend een offerte aan of neem contact op met onze specialisten voor advies.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <a href="/contact" className="btn btn-primary">Offerte aanvragen</a>
              <a href="tel:+31614266177" className="btn btn-outline-white" style={{ fontSize: '13.5px' }}>+31 (0)6 14 26 61 77</a>
            </div>
          </div>

          {/* RELATED POSTS */}
          {related.length > 0 && (
            <div style={{ marginTop: '56px' }}>
              <h3 style={{ margin: '0 0 20px', fontSize: '17px', fontWeight: 700, color: 'var(--text-1)' }}>Gerelateerde artikelen</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {related.map(rel => (
                  <a key={rel.slug} href={`/blog/${rel.slug}`} style={{
                    display: 'block',
                    padding: '20px',
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'box-shadow .2s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,.08)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
                  >
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '8px' }}>{rel.category}</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-1)', lineHeight: '1.3', marginBottom: '8px' }}>{rel.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>{rel.readTime} min lezen</div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '40px' }}>
            <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 600, color: 'var(--orange)', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 3L2 7L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Alle artikelen bekijken
            </a>
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
