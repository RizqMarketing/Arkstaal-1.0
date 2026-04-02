'use client'

import Link from 'next/link'
import { CURRENT_USER, OFFERTES, BESTELLINGEN, CERTIFICATEN, LIJSTEN } from '@/lib/mock-data'

const STATUS_COLORS: Record<string, string> = {
  'Nieuw': 'badge-blue',
  'In behandeling': 'badge-amber',
  'Verstuurd': 'badge-purple',
  'Geaccepteerd': 'badge-green',
  'In verwerking': 'badge-amber',
  'Verzonden': 'badge-blue',
  'Geleverd': 'badge-green',
}

export default function DashboardPage() {
  const openOffertes = OFFERTES.filter(o => o.status !== 'Geaccepteerd').length
  const lopendeBestellingen = BESTELLINGEN.filter(b => b.status !== 'Geleverd').length
  const recentOffertes = OFFERTES.slice(0, 3)
  const recentBestellingen = BESTELLINGEN.slice(0, 3)

  return (
    <>
      <div className="portal-page-header">
        <div>
          <div className="portal-page-greeting">Goedemiddag, {CURRENT_USER.name.split(' ')[0]}</div>
          <h1 className="portal-page-title">Dashboard</h1>
        </div>
        <Link href="/portal/offertes" className="btn btn-primary">Nieuwe offerte aanvragen</Link>
      </div>

      {/* Stats */}
      <div className="portal-stats-row">
        <div className="portal-stat-card">
          <div className="portal-stat-label">Open offertes</div>
          <div className="portal-stat-value">{openOffertes}</div>
          <Link href="/portal/offertes" className="portal-stat-link">Bekijk alle →</Link>
        </div>
        <div className="portal-stat-card">
          <div className="portal-stat-label">Lopende bestellingen</div>
          <div className="portal-stat-value">{lopendeBestellingen}</div>
          <Link href="/portal/bestellingen" className="portal-stat-link">Bekijk alle →</Link>
        </div>
        <div className="portal-stat-card">
          <div className="portal-stat-label">Certificaten</div>
          <div className="portal-stat-value">{CERTIFICATEN.length}</div>
          <Link href="/portal/certificaten" className="portal-stat-link">Bekijk alle →</Link>
        </div>
        <div className="portal-stat-card">
          <div className="portal-stat-label">Opgeslagen lijsten</div>
          <div className="portal-stat-value">{LIJSTEN.length}</div>
          <Link href="/portal/lijsten" className="portal-stat-link">Bekijk alle →</Link>
        </div>
      </div>

      <div className="portal-two-col">
        {/* Recent offertes */}
        <div className="portal-card">
          <div className="portal-card-header">
            <div className="portal-card-title">Recente offertes</div>
            <Link href="/portal/offertes" className="portal-card-link">Alle offertes →</Link>
          </div>
          <table className="portal-table">
            <thead>
              <tr>
                <th>Offerte</th>
                <th>Materiaal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOffertes.map(o => (
                <tr key={o.id}>
                  <td>
                    <div className="portal-table-primary">{o.id}</div>
                    <div className="portal-table-secondary">{o.datum}</div>
                  </td>
                  <td>{o.materiaal}</td>
                  <td><span className={`badge ${STATUS_COLORS[o.status]}`}>{o.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent bestellingen */}
        <div className="portal-card">
          <div className="portal-card-header">
            <div className="portal-card-title">Recente bestellingen</div>
            <Link href="/portal/bestellingen" className="portal-card-link">Alle bestellingen →</Link>
          </div>
          <table className="portal-table">
            <thead>
              <tr>
                <th>Bestelling</th>
                <th>Totaal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBestellingen.map(b => (
                <tr key={b.id}>
                  <td>
                    <div className="portal-table-primary">{b.id}</div>
                    <div className="portal-table-secondary">{b.datum}</div>
                  </td>
                  <td>{b.totaal}</td>
                  <td><span className={`badge ${STATUS_COLORS[b.status]}`}>{b.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
