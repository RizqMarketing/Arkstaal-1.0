'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CURRENT_USER } from '@/lib/mock-data'
import DemoSwitcher from '@/app/components/DemoSwitcher'

const NAV_ITEMS = [
  {
    href: '/portal/dashboard',
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
    href: '/portal/offertes',
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
    href: '/portal/bestellingen',
    label: 'Bestellingen',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 3h14M1 8h14M1 13h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/portal/certificaten',
    label: 'Certificaten',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5.5 9.5L4 15l4-2 4 2-1.5-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/portal/lijsten',
    label: 'Mijn lijsten',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12M2 8h12M2 12h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="13" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M12 12l.8.8 1.5-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/portal/voorraad',
    label: 'Voorraadcheck',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4l6-2 6 2v6l-6 4-6-4V4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M8 2v12M2 4l6 3 6-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="portal-shell">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="portal-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`portal-sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="portal-sidebar-top">
          <Link href="/" className="portal-logo">
            <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" fill="#1A2332"/>
              <path d="M7 26L17 8L27 26H21L17 18L13 26H7Z" fill="white"/>
              <rect x="7" y="27" width="20" height="2.5" fill="#E8500A"/>
            </svg>
            <div>
              <div className="portal-logo-name">Arkstaal</div>
              <div className="portal-logo-sub">My Arkstaal</div>
            </div>
          </Link>
        </div>

        <nav className="portal-nav">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`portal-nav-item${pathname.startsWith(item.href) ? ' active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="portal-sidebar-bottom">
          <div className="portal-user">
            <div className="portal-avatar">{CURRENT_USER.initials}</div>
            <div className="portal-user-info">
              <div className="portal-user-name">{CURRENT_USER.name}</div>
              <div className="portal-user-company">{CURRENT_USER.company}</div>
            </div>
          </div>
          <Link href="/login" className="portal-logout">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2H2a1 1 0 00-1 1v8a1 1 0 001 1h3M9 10l3-3-3-3M12 7H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Uitloggen
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="portal-main">
        {/* Mobile topbar */}
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
            <span>Arkstaal</span>
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
