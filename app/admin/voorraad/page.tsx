'use client'

import { useState } from 'react'
import { VOORRAAD, VoorraadItem, VoorraadStatus } from '@/lib/mock-data'

const STATUS_COLORS: Record<VoorraadStatus, string> = {
  'Op voorraad': 'badge-green',
  'Beperkt': 'badge-amber',
  'Niet op voorraad': 'badge-red',
}

export default function AdminVoorraadPage() {
  const [items, setItems] = useState<VoorraadItem[]>(VOORRAAD)
  const [zoek, setZoek] = useState('')

  const filtered = items.filter(v =>
    zoek === '' || `${v.artikel} ${v.kwaliteit} ${v.afmeting}`.toLowerCase().includes(zoek.toLowerCase())
  )

  const updateVoorraad = (id: string, val: number) => {
    setItems(prev => prev.map(v => {
      if (v.id !== id) return v
      const newVoorraad = Math.max(0, val)
      const status: VoorraadStatus = newVoorraad === 0 ? 'Niet op voorraad' : newVoorraad < v.minVoorraad ? 'Beperkt' : 'Op voorraad'
      return { ...v, voorraad: newVoorraad, status }
    }))
  }

  const opVoorraad = items.filter(v => v.status === 'Op voorraad').length
  const beperkt = items.filter(v => v.status === 'Beperkt').length
  const uitVoorraad = items.filter(v => v.status === 'Niet op voorraad').length

  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Voorraad beheren</h1>
          <p className="portal-page-sub">{items.length} materialen · bewerk voorraad direct</p>
        </div>
        <button className="btn btn-primary">+ Materiaal toevoegen</button>
      </div>

      <div className="portal-stats-row" style={{ gridTemplateColumns: 'repeat(3,1fr)', marginBottom: '20px' }}>
        <div className="portal-stat-card admin-stat-card" style={{ borderTopColor: '#2E7D32' }}>
          <div className="portal-stat-label">Op voorraad</div>
          <div className="portal-stat-value admin-stat-value" style={{ color: '#2E7D32' }}>{opVoorraad}</div>
        </div>
        <div className="portal-stat-card admin-stat-card" style={{ borderTopColor: '#B45309' }}>
          <div className="portal-stat-label">Beperkt</div>
          <div className="portal-stat-value admin-stat-value" style={{ color: '#B45309' }}>{beperkt}</div>
        </div>
        <div className="portal-stat-card admin-stat-card" style={{ borderTopColor: '#B91C1C' }}>
          <div className="portal-stat-label">Niet op voorraad</div>
          <div className="portal-stat-value admin-stat-value" style={{ color: '#B91C1C' }}>{uitVoorraad}</div>
        </div>
      </div>

      <div className="voorraad-filters" style={{ marginBottom: '16px' }}>
        <div className="voorraad-search-wrap">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4"/><path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          <input className="voorraad-search" type="text" placeholder="Zoek materiaal…" value={zoek} onChange={e => setZoek(e.target.value)} />
        </div>
      </div>

      <div className="portal-card">
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Artikel</th>
              <th>Kwaliteit</th>
              <th>Afmeting</th>
              <th>Voorraad</th>
              <th>Minimum</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(v => (
              <tr key={v.id}>
                <td className="portal-table-primary">{v.artikel}</td>
                <td>{v.kwaliteit}</td>
                <td>{v.afmeting}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="number"
                      className="admin-voorraad-input"
                      value={v.voorraad}
                      min={0}
                      onChange={e => updateVoorraad(v.id, parseInt(e.target.value) || 0)}
                    />
                    <span className="portal-table-secondary">{v.eenheid}</span>
                  </div>
                </td>
                <td className="portal-table-secondary">{v.minVoorraad} {v.eenheid}</td>
                <td><span className={`badge ${STATUS_COLORS[v.status]}`}>{v.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
