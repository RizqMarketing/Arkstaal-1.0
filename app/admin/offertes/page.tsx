'use client'

import { useState } from 'react'
import { ADMIN_OFFERTES, OffertStatus } from '@/lib/mock-data'

const STATUS_COLORS: Record<string, string> = {
  'Nieuw': 'badge-blue',
  'In behandeling': 'badge-amber',
  'Verstuurd': 'badge-purple',
  'Geaccepteerd': 'badge-green',
}

const ALL_STATUSES: OffertStatus[] = ['Nieuw', 'In behandeling', 'Verstuurd', 'Geaccepteerd']

export default function AdminOffertesPage() {
  const [statussen, setStatussen] = useState<Record<string, OffertStatus>>(
    Object.fromEntries(ADMIN_OFFERTES.map(o => [o.id, o.status]))
  )
  const [filter, setFilter] = useState<OffertStatus | 'Alle'>('Alle')

  const offertes = ADMIN_OFFERTES.filter(o => filter === 'Alle' || statussen[o.id] === filter)

  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Offertes</h1>
          <p className="portal-page-sub">{ADMIN_OFFERTES.length} offertes totaal</p>
        </div>
        <button className="btn btn-primary">+ Nieuwe offerte aanmaken</button>
      </div>

      {/* Filter tabs */}
      <div className="admin-filter-tabs">
        {(['Alle', ...ALL_STATUSES] as const).map(s => (
          <button
            key={s}
            className={`admin-filter-tab${filter === s ? ' active' : ''}`}
            onClick={() => setFilter(s as OffertStatus | 'Alle')}
          >
            {s}
            <span className="admin-filter-count">
              {s === 'Alle' ? ADMIN_OFFERTES.length : ADMIN_OFFERTES.filter(o => statussen[o.id] === s).length}
            </span>
          </button>
        ))}
      </div>

      <div className="portal-card">
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Offerte #</th>
              <th>Klant</th>
              <th>Materiaal</th>
              <th>Bedrag</th>
              <th>Status</th>
              <th>Wijzig status</th>
            </tr>
          </thead>
          <tbody>
            {offertes.map(o => (
              <tr key={o.id}>
                <td>
                  <div className="portal-table-primary">{o.id}</div>
                  <div className="portal-table-secondary">{o.datum}</div>
                </td>
                <td>
                  <div style={{ fontWeight: 600 }}>{o.klantNaam}</div>
                  <div className="portal-table-secondary">{o.klantBedrijf}</div>
                </td>
                <td>
                  <div>{o.materiaal}</div>
                  <div className="portal-table-secondary">{o.hoeveelheid}</div>
                </td>
                <td className="portal-table-primary">{o.bedrag}</td>
                <td><span className={`badge ${STATUS_COLORS[statussen[o.id]]}`}>{statussen[o.id]}</span></td>
                <td>
                  <select
                    className="admin-status-select"
                    value={statussen[o.id]}
                    onChange={e => setStatussen(prev => ({ ...prev, [o.id]: e.target.value as OffertStatus }))}
                  >
                    {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
