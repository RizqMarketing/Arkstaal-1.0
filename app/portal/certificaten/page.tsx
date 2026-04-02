'use client'

import { CERTIFICATEN } from '@/lib/mock-data'

export default function CertificatenPage() {
  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Materiaalcertificaten</h1>
          <p className="portal-page-sub">{CERTIFICATEN.length} certificaten beschikbaar</p>
        </div>
      </div>

      <div className="portal-cert-grid">
        {CERTIFICATEN.map(c => (
          <div key={c.id} className="portal-cert-card">
            <div className="portal-cert-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6.5 12.5L5 19l5-2.5 5 2.5-1.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="portal-cert-body">
              <div className="portal-cert-id">{c.id}</div>
              <div className="portal-cert-material">{c.materiaal}</div>
              <div className="portal-cert-quality">{c.kwaliteit}</div>
              <div className="portal-cert-meta">
                <span>Smelt: <strong>{c.smeltNummer}</strong></span>
                <span>{c.norm}</span>
              </div>
              <div className="portal-cert-meta">
                <span>{c.datum}</span>
                <span className="portal-table-secondary">Ref: {c.orderRef}</span>
              </div>
            </div>
            <button className="portal-cert-download">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M3 5l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
