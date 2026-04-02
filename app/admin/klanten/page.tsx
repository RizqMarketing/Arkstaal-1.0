'use client'

import { KLANTEN } from '@/lib/mock-data'

export default function AdminKlantenPage() {
  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Klanten</h1>
          <p className="portal-page-sub">{KLANTEN.length} actieve klanten</p>
        </div>
        <button className="btn btn-primary">+ Klant uitnodigen</button>
      </div>

      <div className="admin-klant-grid">
        {KLANTEN.map(k => (
          <div key={k.id} className="admin-klant-card">
            <div className="admin-klant-card-top">
              <div className="admin-klant-avatar">
                {k.naam.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <div className="admin-klant-naam">{k.naam}</div>
                <div className="admin-klant-bedrijf">{k.bedrijf}</div>
              </div>
              <span className={`badge ${k.status === 'Actief' ? 'badge-green' : 'badge-amber'}`} style={{ marginLeft: 'auto' }}>
                {k.status}
              </span>
            </div>

            <div className="admin-klant-meta">
              <div className="admin-klant-meta-item">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 3.5h11M1 6.5h11M1 9.5h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                {k.email}
              </div>
              <div className="admin-klant-meta-item">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 2h2.5l1 2.5L4 6a7 7 0 003 3l1.5-1.5L11 8.5V11A1 1 0 0110 12C4.5 12 1 8.5 1 3A1 1 0 012 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                {k.telefoon}
              </div>
              <div className="admin-klant-meta-item">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1C4.3 1 2.5 2.8 2.5 5c0 3.2 4 7 4 7s4-3.8 4-7c0-2.2-1.8-4-4-4Z" stroke="currentColor" strokeWidth="1.3"/><circle cx="6.5" cy="5" r="1.2" stroke="currentColor" strokeWidth="1.2"/></svg>
                {k.plaats}
              </div>
            </div>

            <div className="admin-klant-stats">
              <div className="admin-klant-stat">
                <div className="admin-klant-stat-value">{k.aantalBestellingen}</div>
                <div className="admin-klant-stat-label">Bestellingen</div>
              </div>
              <div className="admin-klant-stat">
                <div className="admin-klant-stat-value">{k.omzetTotaal}</div>
                <div className="admin-klant-stat-label">Totale omzet</div>
              </div>
              <div className="admin-klant-stat">
                <div className="admin-klant-stat-value">{k.sindsJaar}</div>
                <div className="admin-klant-stat-label">Klant sinds</div>
              </div>
            </div>

            <div className="admin-klant-actions">
              <button className="portal-action-btn" style={{ flex: 1, justifyContent: 'center' }}>Bestellingen</button>
              <button className="portal-action-btn portal-action-btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Offerte maken</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
