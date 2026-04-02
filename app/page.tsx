'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from './components/LanguageContext'

const TABS = ['aluminium', 'steel', 'stainless', 'copper', 'brass', 'nonferrous', 'fittings'] as const
type Tab = typeof TABS[number]

const TAB_PHOTOS: Partial<Record<Tab, string>> = {
  aluminium: '/slider1.webp',
  steel: '/steel-banner.png',
  stainless: '/stainless-banner.webp',
  copper: '/copper-banner.png',
  brass: '/brass-banner.png',
  fittings: '/fittings-banner.png',
  nonferrous: '/nonferrous-banner.png',
}

const TAB_PRODUCT_IMAGES: Partial<Record<Tab, (string | undefined)[]>> = {
  aluminium: ['/al-sheets.png', '/al-tubes.png', '/al-bars.gif', '/al-sections.gif'],
  stainless: ['/al-sheets.png', '/ss-pipes.png', '/ss-flanges.webp', '/ss-bars.jpg'],
}

const TAB_ICON_COLORS: Record<Tab, string> = {
  aluminium: '#CBD5E1',
  steel: '#64748B',
  stainless: '#B0BEC5',
  copper: '#BF7F3A',
  brass: '#B8A030',
  nonferrous: '#94A3B8',
  fittings: '#94A3B8',
}

const DECORATIVE_FINISHES = [
  { name: 'Mirror', gradient: 'linear-gradient(135deg, #e8e8e8 0%, #ffffff 40%, #d0d0d0 60%, #f5f5f5 100%)' },
  { name: 'HL', gradient: 'linear-gradient(135deg, #b8b8b8 0%, #d8d8d8 50%, #a0a0a0 100%)' },
  { name: 'Gold', gradient: 'linear-gradient(135deg, #c8a84b 0%, #f0d060 40%, #b8902a 70%, #e0c050 100%)' },
  { name: 'Rose', gradient: 'linear-gradient(135deg, #b07060 0%, #d09080 40%, #a06050 70%, #c08070 100%)' },
  { name: 'Black', gradient: 'linear-gradient(135deg, #2a2a2a 0%, #484848 40%, #1a1a1a 70%, #383838 100%)' },
  { name: 'Gold HL', gradient: 'linear-gradient(160deg, #c0942a 0%, #e8c050 30%, #a07820 60%, #d4aa40 100%)' },
  { name: 'Rose HL', gradient: 'linear-gradient(160deg, #987060 0%, #c09080 30%, #886050 60%, #b08070 100%)' },
  { name: 'Bronze', gradient: 'linear-gradient(135deg, #8a7050 0%, #b09070 40%, #7a6040 70%, #a08060 100%)' },
  { name: 'Blue', gradient: 'linear-gradient(135deg, #3a70c0 0%, #5090e0 40%, #2a60b0 70%, #4080d0 100%)' },
  { name: 'Copper Antik', gradient: 'linear-gradient(135deg, #a0604a 0%, #c88060 40%, #905040 70%, #b87050 100%)' },
  { name: 'Gold Antik', gradient: 'linear-gradient(135deg, #c0b060 0%, #e0d080 40%, #b0a050 70%, #d0c070 100%)' },
  { name: 'Linen', gradient: 'repeating-linear-gradient(45deg, #d8d8d8 0px, #d8d8d8 2px, #e8e8e8 2px, #e8e8e8 8px)' },
]

function CountUp({ to, from = 0, suffix = '', duration = 1800, started }: { to: number, from?: number, suffix?: string, duration?: number, started: boolean }) {
  const [count, setCount] = useState(from)
  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const raf = (ts: number) => {
      const p = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(from + (to - from) * eased))
      if (p < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [started, to, from, duration])
  return <>{count}{suffix}</>
}

export default function Home() {
  const { lang, t, toggle } = useLanguage()
  const [activeTab, setActiveTab] = useState<Tab>('aluminium')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [statsStarted, setStatsStarted] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteSent, setQuoteSent] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = (mobileMenuOpen || quoteOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen, quoteOpen])

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setQuoteSent(true)
    setTimeout(() => { setQuoteSent(false); setQuoteOpen(false) }, 3000)
  }

  useEffect(() => {
    if (!statsRef.current) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsStarted(true); io.disconnect() }
    }, { threshold: 0.5 })
    io.observe(statsRef.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const tabItems = t.products.items[activeTab]
  const tabImages = TAB_PRODUCT_IMAGES[activeTab]

  return (
    <>
      {/* HEADER */}
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="logo">
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
                  <button type="button" onClick={() => setQuoteOpen(true)} className="dropdown-footer-btn">
                    {t.quote.dropdownCta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <a href="#downloads" className="nav-item" onClick={() => setMobileMenuOpen(false)}>{t.nav.downloads}</a>
            <a href="#decorative" className="nav-item" onClick={() => setMobileMenuOpen(false)}>{t.nav.decorative}</a>
            <a href="#about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
            <div className="mobile-nav-cta">
              <button type="button" onClick={() => { setMobileMenuOpen(false); setQuoteOpen(true) }} className="mobile-nav-cta-btn">
                {t.quote.dropdownCta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
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
            <button type="button" onClick={() => setQuoteOpen(true)} className="btn btn-primary">{t.nav.requestQuote}</button>
            <button className="hamburger" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
              <span style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={mobileMenuOpen ? { opacity: 0 } : {}} />
              <span style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>

      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-eyebrow-simple">{t.hero.eyebrow}</div>
            <h1 className="hero-title">
              {t.hero.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h1>
            <p className="hero-subtitle">{t.hero.sub}</p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-white btn-lg">{t.hero.cta1}</a>
              <a href="/contact" className="btn btn-outline-white btn-lg">{t.hero.cta2}</a>
            </div>
          </div>
        </div>
      </section>

      {/* USP TICKER */}
      <div className="usp-ticker">
        <div className="usp-track">
          {[...Array(2)].map((_, ri) => (
            <div className="usp-list" key={ri} aria-hidden={ri === 1}>
              {[
                { icon: '✦', text: lang === 'nl' ? 'Volgende dag levering' : 'Next day delivery' },
                { icon: '✦', text: lang === 'nl' ? 'ISO 9001 gecertificeerd' : 'ISO 9001 certified' },
                { icon: '✦', text: lang === 'nl' ? 'Breed assortiment metalen' : 'Wide range of metals' },
                { icon: '✦', text: lang === 'nl' ? 'Maatwerk op aanvraag' : 'Custom orders available' },
                { icon: '✦', text: lang === 'nl' ? 'Eigen magazijn & voorraad' : 'In-house stock & warehouse' },
                { icon: '✦', text: lang === 'nl' ? 'Snelle offerte binnen 24u' : 'Fast quote within 24h' },
                { icon: '✦', text: lang === 'nl' ? 'Persoonlijk advies' : 'Personal advice' },
                { icon: '✦', text: lang === 'nl' ? 'Betrouwbare kwaliteitscontrole' : 'Reliable quality control' },
              ].map((usp, i) => (
                <span className="usp-item" key={i}>
                  <span className="usp-dot">{usp.icon}</span>
                  {usp.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <section className="products-section fade-in" id="products">
        <div className="container">
          <div className="section-header">
            <div className="section-label">{t.products.label}</div>
            <h2 className="section-title">{t.products.title}</h2>
            <p className="section-sub">{t.products.sub}</p>
          </div>

          <div className="material-tabs">
            {TABS.map(tab => (
              <button key={tab} className={`tab-btn${activeTab === tab ? ' active' : ''}`} onClick={() => setActiveTab(tab)}>
                {t.products.tabLabels[tab]}
              </button>
            ))}
          </div>

          <div className="tab-panels">
            {TABS.map(tab => (
              <div key={tab} className={`tab-panel${activeTab === tab ? ' active' : ''}`}>
                {TAB_PHOTOS[tab] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="tab-photo" src={TAB_PHOTOS[tab]} alt={t.products.tabLabels[tab]} />
                )}
                <div className="products-grid">
                  {t.products.items[tab].map((p, i) => {
                    const img = TAB_PRODUCT_IMAGES[tab]?.[i]
                    return (
                      <a key={p.title} href="#" className="product-card">
                        {img && <div className="product-img"><img src={img} alt={p.title} /></div>}
                        <div className="product-top">
                          {!img && <div className="product-icon">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                              <rect x="3" y="10" width="22" height="8" rx="1" fill={TAB_ICON_COLORS[tab]}/>
                            </svg>
                          </div>}
                          {('badge' in p) && <span className="product-badge">{(p as { badge: string }).badge}</span>}
                        </div>
                        <div className="product-info">
                          <h3>{p.title}</h3>
                          <p>{p.desc}</p>
                        </div>
                        <span className="product-link">
                          {t.products.viewProducts}{' '}
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="products-footer">
            <p style={{ fontSize: '13.5px', color: 'var(--text-3)' }}>{t.products.notFound}</p>
            <button type="button" onClick={() => setQuoteOpen(true)} className="btn btn-outline">{t.products.requestQuote}</button>
          </div>
        </div>
      </section>

      {/* DECORATIVE STAINLESS STEEL SECTION */}
      <section id="decorative" className="fade-in" style={{ padding: '72px 0', background: '#0D1520', borderTop: '3px solid var(--orange)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ color: 'rgba(255,255,255,.5)' }}>{t.decorative.label}</div>
            <h2 className="section-title" style={{ color: 'white' }}>{t.decorative.title}</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,.55)' }}>{t.decorative.sub}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,.08)',
            border: '1px solid rgba(255,255,255,.08)',
            marginBottom: '32px',
          }}>
            {DECORATIVE_FINISHES.map(finish => (
              <div key={finish.name} style={{ background: 'var(--navy)', padding: '0', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <div style={{ height: '120px', background: finish.gradient, transition: 'transform .2s' }} />
                <div style={{ padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.75)', letterSpacing: '.03em' }}>{finish.name}</div>
                </div>
              </div>
            ))}
            <div style={{ background: 'rgba(255,255,255,.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center', minHeight: '160px' }}>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)', marginBottom: '12px' }}>{t.decorative.moreFinishes}</div>
              <a href="/catalog.pdf" target="_blank" className="btn btn-outline-white" style={{ fontSize: '12.5px' }}>
                {t.decorative.downloadCatalogue}
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {t.decorative.cards.map(card => (
              <div key={card.title} style={{ flex: 1, minWidth: '200px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', padding: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>{card.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)' }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS SECTION */}
      <section className="knowledge-section fade-in" id="downloads">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">{t.knowledge.label}</div>
            <h2 className="section-title">{t.knowledge.title}</h2>
          </div>
          <div className="knowledge-grid">
            <div className="knowledge-card blue">
              <div className="knowledge-icon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 22V4H17L21 8V22H5Z" stroke="white" strokeWidth="1.7" strokeLinejoin="round"/><path d="M17 4V8H21" stroke="white" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12H17M9 16H14" stroke="white" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </div>
              <h3>{t.knowledge.cards[0].title}</h3>
              <p>{t.knowledge.cards[0].desc}</p>
              <a href="/catalog.pdf" target="_blank" className="knowledge-link">
                {t.knowledge.cards[0].link} <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M8 3.5L11 6.5L8 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="knowledge-card dark">
              <div className="knowledge-icon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 22V4H17L21 8V22H5Z" stroke="white" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12H17M9 16H14" stroke="white" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </div>
              <h3>{t.knowledge.cards[1].title}</h3>
              <p>{t.knowledge.cards[1].desc}</p>
              <a href="/contact" className="knowledge-link">
                {t.knowledge.cards[1].link} <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M8 3.5L11 6.5L8 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="knowledge-card light">
              <div className="knowledge-icon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="9" r="4" stroke="#1A2332" strokeWidth="1.7"/><path d="M5 22C5 18.7 8.6 16 13 16C17.4 16 21 18.7 21 22" stroke="#1A2332" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </div>
              <h3>{t.knowledge.cards[2].title}</h3>
              <p>{t.knowledge.cards[2].desc}</p>
              <a href="/contact" className="knowledge-link orange">
                {t.knowledge.cards[2].link} <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M8 3.5L11 6.5L8 9.5" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section fade-in" id="about">
        <div className="container">
          <div className="about-top">
            <div className="about-left">
              <div className="section-label">{t.about.label}</div>
              <h2 className="about-headline">{t.about.headline}</h2>
            </div>
            <div className="about-right">
              <p className="about-text">{t.about.text}</p>
              <a href="/contact" className="btn btn-outline">{t.about.cta}</a>
            </div>
          </div>
          <div className="about-stats-row" ref={statsRef}>
            <div className="about-stat-item">
              <div className="about-stat-num"><CountUp to={2014} from={1990} duration={1600} started={statsStarted} /></div>
              <div className="about-stat-label">{t.about.stats[0].label}</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num"><CountUp to={1000} suffix="s" duration={1800} started={statsStarted} /></div>
              <div className="about-stat-label">{t.about.stats[1].label}</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num"><CountUp to={20} suffix="+" duration={1400} started={statsStarted} /></div>
              <div className="about-stat-label">{t.about.stats[2].label}</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num"><CountUp to={100} suffix="%" duration={1600} started={statsStarted} /></div>
              <div className="about-stat-label">{t.about.stats[3].label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="about-section fade-in" id="faq" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-header center">
            <div className="section-label">{t.faq.label}</div>
            <h2 className="section-title">{t.faq.title}</h2>
          </div>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '18px 0', background: 'none',
                    border: 'none', cursor: 'pointer', textAlign: 'left',
                    color: 'var(--text-1)', fontSize: '15px', fontWeight: 600, gap: '16px',
                  }}
                >
                  <span>{item.q}</span>
                  <span style={{ fontSize: '22px', fontWeight: 300, color: 'var(--orange)', flexShrink: 0, lineHeight: 1 }}>
                    {faqOpen === i ? '−' : '+'}
                  </span>
                </button>
                {faqOpen === i && (
                  <p style={{ margin: '0 0 18px', color: 'var(--text-2)', fontSize: '14.5px', lineHeight: '1.65' }}>
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* QUOTE MODAL */}
      {quoteOpen && (
        <div className="qmodal-overlay" onClick={() => setQuoteOpen(false)}>
          <div className="qmodal" onClick={e => e.stopPropagation()}>
            <div className="qmodal-header">
              <div>
                <div className="qmodal-label">Arkstaal B.V.</div>
                <h2 className="qmodal-title">{t.nav.requestQuote}</h2>
              </div>
              <button className="qmodal-close" onClick={() => setQuoteOpen(false)} aria-label="Sluiten">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            {quoteSent ? (
              <div className="qmodal-success">
                <div className="qmodal-success-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#1A2332"/><path d="M8 16l5.5 5.5L24 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>{t.contact.sent}</h3>
                <p>{lang === 'nl' ? 'We nemen zo snel mogelijk contact met u op.' : 'We will get back to you as soon as possible.'}</p>
              </div>
            ) : (
              <form className="qmodal-form" onSubmit={handleQuoteSubmit}>
                <div className="qmodal-row">
                  <div className="qmodal-field">
                    <label>{t.contact.name}</label>
                    <input type="text" placeholder="Jan de Vries" required />
                  </div>
                  <div className="qmodal-field">
                    <label>{t.contact.company}</label>
                    <input type="text" placeholder="Bedrijfsnaam B.V." />
                  </div>
                </div>
                <div className="qmodal-row">
                  <div className="qmodal-field">
                    <label>{t.contact.emailField}</label>
                    <input type="email" placeholder="jan@bedrijf.nl" required />
                  </div>
                  <div className="qmodal-field">
                    <label>{t.contact.phoneField}</label>
                    <input type="tel" placeholder="+31…" />
                  </div>
                </div>
                <div className="qmodal-field">
                  <label>{t.contact.subject}</label>
                  <select>
                    <option value="">{t.contact.selectTopic}</option>
                    {t.contact.topics.map(topic => <option key={topic}>{topic}</option>)}
                  </select>
                </div>
                <div className="qmodal-field">
                  <label>{t.contact.message}</label>
                  <textarea placeholder={t.contact.messagePlaceholder} rows={4} />
                </div>
                <button type="submit" className="qmodal-submit">{t.contact.send}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8H14M9 3L14 8L9 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </>
  )
}
