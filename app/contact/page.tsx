'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'success'>('idle')
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 200)
  }, [searchOpen])

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
            <a href="/#services" className="nav-item">Services</a>
            <a href="/#decorative" className="nav-item">Decorative</a>
            <a href="/#about" className="nav-item">About</a>
            <a href="/contact" className="nav-item" style={{ color: 'var(--navy)', borderBottom: '2px solid var(--navy)' }}>Contact</a>
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

      {/* PAGE HEADER */}
      <div className="contact-page-header">
        <div className="container">
          <div className="section-label" style={{ color: 'rgba(255,255,255,.45)' }}>Contact</div>
          <h1 className="contact-page-title">Get in touch</h1>
          <p className="contact-page-sub">Direct contact with our specialists — quick response, direct from stock.</p>
        </div>
      </div>

      {/* CONTACT CONTENT */}
      <div className="contact-page-body">
        <div className="container">
          <div className="contact-page-grid">

            {/* LEFT: INFO */}
            <div className="contact-page-info">
              <div className="contact-page-info-block">
                <div className="contact-page-info-label">Address</div>
                <div className="contact-page-info-value">
                  Erasmusweg 15<br />4104AL Culemborg<br />Netherlands
                </div>
              </div>
              <div className="contact-page-info-block">
                <div className="contact-page-info-label">Phone</div>
                <div className="contact-page-info-value">
                  <a href="tel:+31614266177">+31 (0)6 14 26 61 77</a>
                </div>
              </div>
              <div className="contact-page-info-block">
                <div className="contact-page-info-label">Email</div>
                <div className="contact-page-info-value">
                  <a href="mailto:info@arkstaal.nl">info@arkstaal.nl</a>
                </div>
              </div>
              <div className="contact-page-info-block">
                <div className="contact-page-info-label">Response time</div>
                <div className="contact-page-info-value">Same business day</div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <form className="contact-page-form" onSubmit={handleSubmit}>
              <div className="contact-page-form-title">Send us a message</div>
              <div className="contact-row">
                <div className="contact-field">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="contact-field">
                  <label>Company</label>
                  <input type="text" placeholder="Your company" />
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-field">
                  <label>Email</label>
                  <input type="email" placeholder="you@company.com" required />
                </div>
                <div className="contact-field">
                  <label>Phone <span style={{ fontWeight: 400, opacity: .6 }}>(optional)</span></label>
                  <input type="tel" placeholder="+31…" />
                </div>
              </div>
              <div className="contact-field">
                <label>Subject</label>
                <select>
                  <option value="">Select a topic</option>
                  <option>Request a quote</option>
                  <option>Product information</option>
                  <option>Material certificates</option>
                  <option>Order status</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="contact-field">
                <label>Message</label>
                <textarea placeholder="What are you looking for? Include material, dimensions, quantity if applicable." rows={5} />
              </div>
              <button type="submit" className="contact-submit">
                {formState === 'success' ? '✓ Message sent — we\'ll be in touch shortly' : 'Send message'}
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="logo">
                <svg width="30" height="30" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" fill="#1E293B"/><path d="M7 26L17 8L27 26H21L17 18L13 26H7Z" fill="white"/><rect x="7" y="27" width="20" height="2.5" fill="#E8500A"/></svg>
                <span className="logo-text">Arkstaal</span>
              </a>
              <p className="footer-tagline">Stainless steel & aluminium specialist.<br />Culemborg, Netherlands — since 2014.</p>
              <div className="footer-socials">
                <a href="#" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M5.5 7V11M5.5 5.5V5.8M8 11V9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9V11M8 7V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9 8.5H11.5L12 6.5H9V5.5C9 4.9 9.3 4.5 10 4.5H12V2.5C11.5 2.3 10.5 2 9.5 2C7.6 2 6.5 3.1 6.5 5V6.5H4.5V8.5H6.5V15H9V8.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/></svg>
                </a>
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
              <div className="footer-col">
                <h4>Contact</h4>
                <a href="#">Erasmusweg 15</a>
                <a href="#">4104AL Culemborg</a>
                <a href="tel:+31614266177">+31 (0)6 14 26 61 77</a>
                <a href="mailto:info@arkstaal.nl">info@arkstaal.nl</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Arkstaal B.V. — Culemborg, Netherlands — All rights reserved.</span>
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
