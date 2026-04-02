'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ADMIN_USER } from '@/lib/mock-data'
import DemoSwitcher from '@/app/components/DemoSwitcher'

const NAV_ITEMS = [
  {
    href: '/admin/dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    href: '/admin/offertes',
    label: 'Offertes',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 2h7l3 3v9H3V2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M10 2v3h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/admin/bestellingen',
    label: 'Bestellingen',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 3h14M1 8h14M1 13h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/admin/klanten',
    label: 'Klanten',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="6" cy="5" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M13 7v4M11 9h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/admin/voorraad',
    label: 'Voorraad',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4l6-2 6 2v6l-6 4-6-4V4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M8 2v12M2 4l6 3 6-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/admin/certificaten',
    label: 'Certificaten',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5.5 9.5L4 15l4-2 4 2-1.5-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/admin/facturen',
    label: 'Facturen',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 2h10v12l-2-1.5L9 14l-1-1.5L7 14l-2-1.5L3 14V2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M6 6h4M6 9h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/admin/notificaties',
    label: 'Notificaties',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2a5 5 0 00-5 5v3l-1 1.5h12L13 10V7a5 5 0 00-5-5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M6.5 13.5a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    badge: 3,
  },
  {
    href: '/admin/rapportages',
    label: 'Rapportages',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 12l3-4 3 2 3-5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 14h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="portal-shell">
      {sidebarOpen && (
        <div className="portal-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`portal-sidebar admin-sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="portal-sidebar-top">
          <Link href="/" className="portal-logo">
            <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" fill="#1A2332"/>
              <path d="M7 26L17 8L27 26H21L17 18L13 26H7Z" fill="white"/>
              <rect x="7" y="27" width="20" height="2.5" fill="#E8500A"/>
            </svg>
            <div>
              <div className="portal-logo-name">Arkstaal</div>
              <div className="portal-logo-sub admin-label">Eigenaarspanel</div>
            </div>
          </Link>
        </div>

        <nav className="portal-nav">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`portal-nav-item${pathname.startsWith(item.href) ? ' active admin-active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              {item.label}
              {'badge' in item && item.badge ? (
                <span className="nav-badge">{item.badge}</span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="portal-sidebar-bottom">
          <div className="portal-user">
            <div className="portal-avatar admin-avatar">{ADMIN_USER.initials}</div>
            <div className="portal-user-info">
              <div className="portal-user-name">{ADMIN_USER.name}</div>
              <div className="portal-user-company">{ADMIN_USER.role}</div>
            </div>
          </div>
          <Link href="/" className="portal-logout">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2H2a1 1 0 00-1 1v8a1 1 0 001 1h3M9 10l3-3-3-3M12 7H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Terug naar website
          </Link>
        </div>
      </aside>

      <div className="portal-main">
        <div className="portal-mobile-bar">
          <button className="portal-hamburger" onClick={() => setSidebarOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
          <div className="portal-mobile-logo">
            <svg width="22" height="22" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" fill="#1A2332"/>
              <path d="M7 26L17 8L27 26H21L17 18L13 26H7Z" fill="white"/>
              <rect x="7" y="27" width="20" height="2.5" fill="#E8500A"/>
            </svg>
            <span>Admin</span>
          </div>
        </div>

        <div className="portal-content">
          {children}
        </div>
      </div>

      <DemoSwitcher />
    </div>
  )
}
