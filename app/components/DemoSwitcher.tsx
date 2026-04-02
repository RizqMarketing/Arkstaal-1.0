'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function DemoSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const isAdmin = pathname.startsWith('/admin')
  const isPortal = pathname.startsWith('/portal')

  if (!isAdmin && !isPortal) return null

  return (
    <div className="demo-switcher">
      <div className="demo-switcher-label">Demo</div>
      <button
        className={`demo-switcher-btn${isPortal ? ' active' : ''}`}
        onClick={() => router.push('/portal/dashboard')}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="6.5" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M1.5 12C1.5 9.5 3.8 7.5 6.5 7.5C9.2 7.5 11.5 9.5 11.5 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Klantview
      </button>
      <button
        className={`demo-switcher-btn${isAdmin ? ' active' : ''}`}
        onClick={() => router.push('/admin/dashboard')}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="7" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="1" y="7" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="7" y="7" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        </svg>
        Eigenaarview
      </button>
    </div>
  )
}
