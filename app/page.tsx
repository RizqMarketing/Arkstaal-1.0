'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const TABS = ['aluminium', 'steel', 'stainless', 'copper', 'brass', 'nonferrous', 'fittings'] as const
type Tab = typeof TABS[number]

const TAB_LABELS: Record<Tab, string> = {
  aluminium: 'Aluminium',
  steel: 'Steel',
  stainless: 'Stainless Steel',
  copper: 'Copper',
  brass: 'Brass',
  nonferrous: 'Non-ferrous',
  fittings: 'Fittings',
}

const TAB_PHOTOS: Partial<Record<Tab, string>> = {
  aluminium: '/slider1.webp',
  steel: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&h=200&q=75',
  stainless: '/stainless-banner.webp',
  copper: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&h=200&q=75',
}

const TAB_PRODUCTS: Record<Tab, { title: string; desc: string; badge?: string; iconColor: string; img?: string }[]> = {
  aluminium: [
    { title: 'Sheets & Plates', desc: 'High-quality, low-tension flat aluminium. Optimally processable in laser cutters and other machines without loss of quality.', badge: 'Popular', iconColor: '#CBD5E1', img: '/al-sheets.png' },
    { title: 'Tubes & Profiles', desc: 'Round, square and rectangular aluminium tubes. Extruded profiles in standard and custom dimensions.', iconColor: '#CBD5E1', img: '/al-tubes.png' },
    { title: 'Bars & Rods', desc: 'Solid and hollow bars for machining, construction and engineering applications.', iconColor: '#CBD5E1', img: '/al-bars.gif' },
    { title: 'Open Sections', desc: 'Angles, channels, I-beams and T-sections in aluminium alloys for structural applications.', iconColor: '#94A3B8', img: '/al-sections.gif' },
  ],
  steel: [
    { title: 'Sheets & Plates', desc: 'Hot and cold rolled steel sheets in various grades and thicknesses for structural and industrial applications.', badge: 'Popular', iconColor: '#64748B' },
    { title: 'Structural Steel', desc: 'HEA, HEB, IPE, UNP beams and columns for construction and civil engineering.', iconColor: '#64748B' },
    { title: 'Bars & Rods', desc: 'Round, square and flat bars in various steel grades for machining and construction.', iconColor: '#64748B' },
    { title: 'Steel Tubes', desc: 'Seamless and welded steel tubes for mechanical and structural applications.', iconColor: '#64748B' },
  ],
  stainless: [
    { title: 'Sheets & Coils', desc: 'Standard and decorative stainless steel sheets. Hot rolled, cold rolled and coil/strip in various grades.', badge: 'Specialty', iconColor: '#B0BEC5', img: '/al-sheets.png' },
    { title: 'Pipes & Tubes', desc: 'Stainless steel pipes, square and rectangular tubes for mechanical and visual projects.', iconColor: '#B0BEC5', img: '/ss-pipes.png' },
    { title: 'Flanges & Fittings', desc: 'Pipes, flanges and fittings in stainless steel and special alloys. Material certificates provided.', iconColor: '#B0BEC5', img: '/ss-flanges.webp' },
    { title: 'Bars & Flat Types', desc: 'Stainless angle bars, flat bars, rods and profiles for a wide range of industrial applications.', iconColor: '#B0BEC5', img: '/ss-bars.jpg' },
  ],
  copper: [
    { title: 'Copper Sheets', desc: 'High-purity copper sheets for electrical and architectural applications.', iconColor: '#BF7F3A' },
    { title: 'Copper Tubes', desc: 'Copper tube in straight lengths and coils for various applications.', iconColor: '#BF7F3A' },
    { title: 'Copper Bars', desc: 'Flat and round bars for electrical and industrial use.', iconColor: '#BF7F3A' },
  ],
  brass: [
    { title: 'Brass Sheets', desc: 'CuZn alloys for decorative, architectural and functional applications.', iconColor: '#B8A030' },
    { title: 'Brass Bars & Rods', desc: 'Free-machining brass for automatic lathes and precision components.', iconColor: '#B8A030' },
    { title: 'Brass Tubes', desc: 'Drawn brass tubes in round profiles for hydraulic and decorative applications.', iconColor: '#B8A030' },
  ],
  nonferrous: [
    { title: 'Titanium', desc: 'Grade 2 and Grade 5 titanium for aerospace, medical and chemical applications.', iconColor: '#94A3B8' },
    { title: 'Zinc', desc: 'Pure zinc and alloys for die casting, galvanising and corrosion protection applications.', iconColor: '#94A3B8' },
  ],
  fittings: [
    { title: 'Pipe Fittings', desc: 'Elbows, tees, reducers and caps in stainless steel and special alloys. DIN/ANSI standards.', iconColor: '#94A3B8' },
    { title: 'Flanges', desc: 'Slip-on, weld-neck and blind flanges to DIN and ANSI standards.', iconColor: '#94A3B8' },
  ],
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
  const [activeTab, setActiveTab] = useState<Tab>('aluminium')
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterState, setNewsletterState] = useState<'idle' | 'success'>('idle')
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 200)
  }, [searchOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(o => !o)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.includes('@')) return
    setNewsletterState('success')
    setNewsletterEmail('')
    setTimeout(() => setNewsletterState('idle'), 4000)
  }

  return (
    <>
      {/* HEADER */}
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="logo">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" fill="#1A2332"/>
              <path d="M7 26L17 8L27 26H21L17 18L13 26H7Z" fill="white"/>
              <rect x="7" y="27" width="20" height="2.5" fill="#E8500A"/>
            </svg>
            <span className="logo-text">Arkstaal</span>
          </a>

          <nav className={`nav${mobileMenuOpen ? ' mobile-open' : ''}`}>
            <div className="nav-item has-dropdown">
              Products
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2.5 4L5.5 7L8.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div className="dropdown">
                <div className="dropdown-grid">
                  <div className="dropdown-col">
                    <div className="dropdown-label">Stainless Steel</div>
                    <a href="#">Sheets & Coils</a>
                    <a href="#">Pipes & Tubes</a>
                    <a href="#">Flanges & Fittings</a>
                    <a href="#">Bars & Flat Types</a>
                    <a href="#">Decorative Finishes</a>
                  </div>
                  <div className="dropdown-col">
                    <div className="dropdown-label">Aluminium</div>
                    <a href="#">Sheets & Plates</a>
                    <a href="#">Tubes & Profiles</a>
                    <a href="#">Bars & Rods</a>
                    <a href="#">Anodized</a>
                  </div>
                  <div className="dropdown-col">
                    <div className="dropdown-label">Other Metals</div>
                    <a href="#">Copper</a>
                    <a href="#">Brass</a>
                    <a href="#">Non-ferrous</a>
                  </div>
                  <div className="dropdown-col">
                    <div className="dropdown-label">Services</div>
                    <a href="#">Foiling & Decoiling</a>
                    <a href="#">Anodizing</a>
                    <a href="#">Custom cutting</a>
                    <a href="#">Material certificates</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#services" className="nav-item">Services</a>
            <a href="#decorative" className="nav-item">Decorative</a>
            <a href="#about" className="nav-item">About</a>
            <a href="/contact" className="nav-item">Contact</a>
          </nav>

          <div className="header-actions">
            <button className="search-btn" onClick={() => setSearchOpen(o => !o)} aria-label="Search">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6"/><path d="M11 11L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
            <Link href="/login" className="my-account-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="white" strokeWidth="1.4"/><path d="M2 14C2 11.2 4.7 9 8 9C11.3 9 14 11.2 14 14" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
              My Arkstaal
            </Link>
            <a href="/contact" className="btn btn-primary">Request quote</a>
            <button className="hamburger" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
              <span style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={mobileMenuOpen ? { opacity: 0 } : {}} />
              <span style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>

        <div className={`search-bar${searchOpen ? ' open' : ''}`}>
          <div className="search-bar-inner">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6"/><path d="M11 11L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <input ref={searchInputRef} type="text" placeholder="Search products, materials, finishes…" />
            <kbd>ESC</kbd>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-eyebrow-simple">Culemborg, Netherlands — Since 2014</div>
            <h1 className="hero-title">
              Your specialist in<br />stainless steel & aluminium
            </h1>
            <p className="hero-subtitle">
              Pipes, flanges and fittings from stock. Wide range, immediate delivery, material certificates included.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-white btn-lg">View assortment</a>
              <a href="/contact" className="btn btn-outline-white btn-lg">Request a quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section fade-in" id="products">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our assortment</div>
            <h2 className="section-title">Metals for every application</h2>
            <p className="section-sub">From raw stock to precision-cut parts. Select a material to explore our full range.</p>
          </div>

          <div className="material-tabs">
            {TABS.map(tab => (
              <button key={tab} className={`tab-btn${activeTab === tab ? ' active' : ''}`} onClick={() => setActiveTab(tab)}>
                {TAB_LABELS[tab]}
              </button>
            ))}
          </div>

          <div className="tab-panels">
            {TABS.map(tab => (
              <div key={tab} className={`tab-panel${activeTab === tab ? ' active' : ''}`}>
                {TAB_PHOTOS[tab] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="tab-photo" src={TAB_PHOTOS[tab]} alt={TAB_LABELS[tab]} />
                )}
                <div className="products-grid">
                  {TAB_PRODUCTS[tab].map(p => (
                    <a key={p.title} href="#" className="product-card">
                      {p.img && <div className="product-img"><img src={p.img} alt={p.title} /></div>}
                      <div className="product-top">
                        {!p.img && <div className="product-icon">
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <rect x="3" y="10" width="22" height="8" rx="1" fill={p.iconColor}/>
                          </svg>
                        </div>}
                        {p.badge && <span className="product-badge">{p.badge}</span>}
                      </div>
                      <div className="product-info">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                      </div>
                      <span className="product-link">
                        View products{' '}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="products-footer">
            <p style={{ fontSize: '13.5px', color: 'var(--text-3)' }}>Can&apos;t find what you need? Contact our specialists.</p>
            <a href="/contact" className="btn btn-outline">Request a quote</a>
          </div>
        </div>
      </section>

      {/* DECORATIVE STAINLESS STEEL SECTION */}
      <section id="decorative" className="fade-in" style={{ padding: '72px 0', background: '#0D1520', borderTop: '3px solid var(--orange)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ color: 'rgba(255,255,255,.5)' }}>Specialty</div>
            <h2 className="section-title" style={{ color: 'white' }}>Decorative Stainless Steel</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,.55)' }}>
              Our specialty — stainless steel in 20+ unique finishes. From classic Mirror and HL to Gold, Rose, Black and custom etched patterns. Perfect for architectural, interior and decorative projects.
            </p>
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
                <div style={{
                  height: '120px',
                  background: finish.gradient,
                  transition: 'transform .2s',
                }} />
                <div style={{ padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.75)', letterSpacing: '.03em' }}>{finish.name}</div>
                </div>
              </div>
            ))}
            <div style={{ background: 'rgba(255,255,255,.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center', minHeight: '160px' }}>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)', marginBottom: '12px' }}>+ many more finishes</div>
              <a href="/catalog.pdf" target="_blank" className="btn btn-outline-white" style={{ fontSize: '12.5px' }}>
                Download catalogue
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', padding: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>Mirror &amp; HL finishes</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)' }}>Classic reflective and hairline finishes for professional and architectural use.</div>
            </div>
            <div style={{ flex: 1, minWidth: '200px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', padding: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>Colored finishes</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)' }}>Gold, Rose, Black, Blue, Bronze, Green and more — in both mirror and HL finish.</div>
            </div>
            <div style={{ flex: 1, minWidth: '200px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', padding: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>Etched patterns</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)' }}>Geometric and decorative etched designs — available in gold and mirror finishes.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Services</div>
            <h2 className="section-title">More than just supply</h2>
            <p className="section-sub">From our service center in Culemborg we offer processing, finishing and fast delivery.</p>
          </div>

          <div className="services-grid">
            {[
              {
                title: 'Foiling & Decoiling',
                desc: 'We foil aluminium sheets and decoil rolls according to your exact wishes. Processed in our modern service center.',
                link: 'Request service',
              },
              {
                title: 'Anodizing',
                desc: 'Anodizing creates a durable oxide layer on aluminium — available in all kinds of colors for decorative and protective purposes.',
                link: 'Learn more',
              },
              {
                title: 'Custom Cutting',
                desc: 'We produce plates and sheets to your exact dimensions. High-quality, low-tension flat material ready for laser cutters and processing machines.',
                link: 'Configure',
              },
              {
                title: 'Material Certificates',
                desc: 'Material certificates are sent by email before every delivery. Full traceability on every order.',
                link: 'More info',
              },
              {
                title: 'My Arkstaal Portal',
                desc: 'Log in to your personal account to manage orders, view invoices and download your material certificates anytime.',
                link: 'Log in',
                href: '/login',
              },
              {
                title: 'Direct Contact',
                desc: 'Thanks to short lines of communication in our organization, we serve clients efficiently and quickly. Reach us directly.',
                link: 'Contact us',
                href: '#contact',
              },
            ].map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="2" y="4" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M2 10H24" stroke="currentColor" strokeWidth="1.7"/></svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href={s.href ?? '#'} className="service-link">
                  {s.link}{' '}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M8 3.5L11 6.5L8 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section fade-in" id="about">
        <div className="container">
          <div className="about-top">
            <div className="about-left">
              <div className="section-label">About Arkstaal</div>
              <h2 className="about-headline">Your specialist in stainless steel & aluminium</h2>
            </div>
            <div className="about-right">
              <p className="about-text">Since 2014, Arkstaal B.V. supplies pipes, flanges and fittings in stainless steel from our service center in Culemborg. Thousands of articles in stock — ready to ship, with full material traceability.</p>
              <a href="/contact" className="btn btn-outline">Get in touch</a>
            </div>
          </div>
          <div className="about-stats-row" ref={statsRef}>
            <div className="about-stat-item">
              <div className="about-stat-num"><CountUp to={2014} from={1990} duration={1600} started={statsStarted} /></div>
              <div className="about-stat-label">Year founded</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num"><CountUp to={1000} suffix="s" duration={1800} started={statsStarted} /></div>
              <div className="about-stat-label">Articles in stock</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num"><CountUp to={20} suffix="+" duration={1400} started={statsStarted} /></div>
              <div className="about-stat-label">Decorative finishes</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num"><CountUp to={100} suffix="%" duration={1600} started={statsStarted} /></div>
              <div className="about-stat-label">Certs by email</div>
            </div>
          </div>
        </div>
      </section>


      {/* KNOWLEDGE SECTION */}
      <section className="knowledge-section fade-in">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Resources</div>
            <h2 className="section-title">Everything you need</h2>
          </div>
          <div className="knowledge-grid">
            <div className="knowledge-card blue">
              <div className="knowledge-icon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 22V4H17L21 8V22H5Z" stroke="white" strokeWidth="1.7" strokeLinejoin="round"/><path d="M17 4V8H21" stroke="white" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12H17M9 16H14" stroke="white" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </div>
              <h3>Decorative Catalogue</h3>
              <p>Download our full decorative stainless steel catalogue — all finishes, patterns and specifications.</p>
              <a href="/catalog.pdf" target="_blank" className="knowledge-link">Download PDF <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M8 3.5L11 6.5L8 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
            <div className="knowledge-card dark">
              <div className="knowledge-icon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 22V4H17L21 8V22H5Z" stroke="white" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12H17M9 16H14" stroke="white" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </div>
              <h3>Material Certificates</h3>
              <p>All our products come with material certificates, sent by email before delivery. Full traceability guaranteed.</p>
              <a href="/contact" className="knowledge-link">Request info <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M8 3.5L11 6.5L8 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
            <div className="knowledge-card light">
              <div className="knowledge-icon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="9" r="4" stroke="#1A2332" strokeWidth="1.7"/><path d="M5 22C5 18.7 8.6 16 13 16C17.4 16 21 18.7 21 22" stroke="#1A2332" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </div>
              <h3>Talk to a specialist</h3>
              <p>Short lines of communication — reach us directly for product advice, quotes and custom orders.</p>
              <a href="/contact" className="knowledge-link orange">Contact us <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M8 3.5L11 6.5L8 9.5" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      {/* FOOTER */}
      <footer className="footer">

        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="/" className="logo" style={{ marginBottom: '16px' }}>
                <svg width="30" height="30" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" fill="#1E293B"/><path d="M7 26L17 8L27 26H21L17 18L13 26H7Z" fill="white"/><rect x="7" y="27" width="20" height="2.5" fill="#E8500A"/></svg>
                <span className="logo-text">Arkstaal</span>
              </a>
              <p className="footer-tagline">Stainless steel & aluminium specialist.<br />Service center in Culemborg — since 2014.</p>
              <div className="footer-contact-list">
                <a href="https://maps.google.com/?q=Erasmusweg+15+Culemborg" target="_blank">Erasmusweg 15, 4104AL Culemborg</a>
                <a href="tel:+31614266177">+31 (0)6 14 26 61 77</a>
                <a href="mailto:info@arkstaal.nl">info@arkstaal.nl</a>
              </div>
            </div>

            <div className="footer-nav">
              <div className="footer-col">
                <h4>Products</h4>
                <a href="#">Stainless Steel</a>
                <a href="#">Aluminium</a>
                <a href="#">Decorative Finishes</a>
                <a href="#">Pipes & Flanges</a>
                <a href="#">Fittings</a>
              </div>
              <div className="footer-col">
                <h4>Services</h4>
                <a href="#">Foiling & Decoiling</a>
                <a href="#">Anodizing</a>
                <a href="#">Custom cutting</a>
                <a href="#">Material certificates</a>
                <a href="/login">My Arkstaal</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="/#about">About Arkstaal</a>
                <a href="/contact">Contact</a>
                <a href="/catalog.pdf" target="_blank">Download catalogue</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2025 Arkstaal B.V. — All rights reserved.</span>
            <div className="footer-legal">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
