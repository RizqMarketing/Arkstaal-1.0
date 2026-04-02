'use client'

import { useState } from 'react'
import { VOORRAAD, VoorraadStatus } from '@/lib/mock-data'

const STATUS_COLORS: Record<VoorraadStatus, string> = {
  'Op voorraad': 'badge-green',
  'Beperkt': 'badge-amber',
  'Niet op voorraad': 'badge-red',
}

const STATUS_DOT: Record<VoorraadStatus, string> = {
  'Op voorraad': '#2E7D32',
  'Beperkt': '#B45309',
  'Niet op voorraad': '#B91C1C',
}

export default function VoorraadPage() {
  const [zoek, setZoek] = useState('')
  const [filter, setFilter] = useState<VoorraadStatus | 'Alle'>('Alle')

  const items = VOORRAAD.filter(v => {
    const matchZoek = zoek === '' || `${v.artikel} ${v.kwaliteit} ${v.afmeting}`.toLowerCase().includes(zoek.toLowerCase())
    const matchFilter = filter === 'Alle' || v.status === filter
    return matchZoek && matchFilter
  })

  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Voorraadcheck</h1>
          <p className="portal-page-sub">Directe beschikbaarheid van onze materialen</p>
        </div>
        <a href="/contact" className="btn btn-primary">Offerte aanvragen</a>
      </div>

      <div className="voorraad-filters">
        <div className="voorraad-search-wrap">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4"/><path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          <input
            className="voorraad-search"
            type="text"
            placeholder="Zoek op artikel, kwaliteit of afmeting…"
            value={zoek}
            onChange={e => setZoek(e.target.value)}
          />
        </div>
        <div className="admin-filter-tabs">
          {(['Alle', 'Op voorraad', 'Beperkt', 'Niet op voorraad'] as const).map(s => (
            <button
              key={s}
              className={`admin-filter-tab${filter === s ? ' active' : ''}`}
              onClick={() => setFilter(s)}
            >
              {s !== 'Alle' && (
                <span className="voorraad-dot" style={{ background: STATUS_DOT[s as VoorraadStatus] }} />
              )}
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="portal-card">
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Artikel</th>
              <th>Kwaliteit</th>
              <th>Afmeting</th>
              <th>Beschikbaar</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(v => (
              <tr key={v.id}>
                <td className="portal-table-primary">{v.artikel}</td>
                <td>{v.kwaliteit}</td>
                <td>{v.afmeting}</td>
                <td>
                  {v.voorraad > 0
                    ? <span style={{ fontWeight: 600 }}>{v.voorraad} {v.eenheid}</span>
                    : <span className="portal-table-secondary">Niet beschikbaar</span>
                  }
                </td>
                <td><span className={`badge ${STATUS_COLORS[v.status]}`}>{v.status}</span></td>
                <td>
                  <a href="/contact" className="portal-action-btn">
                    {v.status === 'Niet op voorraad' ? 'Backorder aanvragen' : 'Offerte aanvragen'}
                  </a>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-3)' }}>
                  Geen materialen gevonden voor "{zoek}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
