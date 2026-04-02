'use client'

import Link from 'next/link'
import { ADMIN_STATS, ADMIN_OFFERTES, ADMIN_BESTELLINGEN } from '@/lib/mock-data'

const STATUS_COLORS: Record<string, string> = {
  'Nieuw': 'badge-blue',
  'In behandeling': 'badge-amber',
  'Verstuurd': 'badge-purple',
  'Geaccepteerd': 'badge-green',
  'In verwerking': 'badge-amber',
  'Verzonden': 'badge-blue',
  'Geleverd': 'badge-green',
}

const maxWaarde = Math.max(...ADMIN_STATS.maandOmzet.map(m => m.waarde))

export default function AdminDashboardPage() {
  const recentOffertes = ADMIN_OFFERTES.slice(0, 4)
  const recentBestellingen = ADMIN_BESTELLINGEN.slice(0, 4)

  return (
    <>
      <div className="portal-page-header">
        <div>
          <div className="portal-page-greeting">Overzicht</div>
          <h1 className="portal-page-title">Dashboard</h1>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="/admin/klanten" className="btn btn-outline" style={{ fontSize: '13px', padding: '9px 18px' }}>Klantenbeheer</Link>
          <Link href="/admin/offertes" className="btn btn-primary">Nieuwe offerte</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="portal-stats-row" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
        <div className="portal-stat-card admin-stat-card">
          <div className="portal-stat-label">Omzet deze maand</div>
          <div className="portal-stat-value admin-stat-value">{ADMIN_STATS.omzetDezeMaand}</div>
          <div className="admin-stat-growth">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 8L5.5 4L9 8" stroke="#1B6B2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            +32% t.o.v. vorige maand
          </div>
        </div>
        <div className="portal-stat-card admin-stat-card">
          <div className="portal-stat-label">Open offertes</div>
          <div className="portal-stat-value admin-stat-value">{ADMIN_STATS.openOffertes}</div>
          <Link href="/admin/offertes" className="portal-stat-link">Behandelen →</Link>
        </div>
        <div className="portal-stat-card admin-stat-card">
          <div className="portal-stat-label">Lopende bestellingen</div>
          <div className="portal-stat-value admin-stat-value">{ADMIN_STATS.lopendeBestellingen}</div>
          <Link href="/admin/bestellingen" className="portal-stat-link">Bekijken →</Link>
        </div>
        <div className="portal-stat-card admin-stat-card">
          <div className="portal-stat-label">Actieve klanten</div>
          <div className="portal-stat-value admin-stat-value">{ADMIN_STATS.actieveKlanten}</div>
          <Link href="/admin/klanten" className="portal-stat-link">Bekijken →</Link>
        </div>
      </div>

      {/* Omzet chart */}
      <div className="portal-card" style={{ marginBottom: '20px' }}>
        <div className="portal-card-header">
          <div className="portal-card-title">Omzet per maand</div>
          <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Laatste 6 maanden</div>
        </div>
        <div className="admin-chart">
          {ADMIN_STATS.maandOmzet.map(m => (
            <div key={m.maand} className="admin-chart-col">
              <div className="admin-chart-bar-wrap">
                <div
                  className="admin-chart-bar"
                  style={{ height: `${Math.round((m.waarde / maxWaarde) * 100)}%` }}
                  title={`€ ${m.waarde.toLocaleString('nl-NL')}`}
                />
              </div>
              <div className="admin-chart-label">{m.maand}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="portal-two-col">
        {/* Recent offertes */}
        <div className="portal-card">
          <div className="portal-card-header">
            <div className="portal-card-title">Recente offertes</div>
            <Link href="/admin/offertes" className="portal-card-link">Alle offertes →</Link>
          </div>
          <table className="portal-table">
            <thead>
              <tr>
                <th>Offerte</th>
                <th>Klant</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOffertes.map(o => (
                <tr key={o.id}>
                  <td>
                    <div className="portal-table-primary">{o.id}</div>
                    <div className="portal-table-secondary">{o.bedrag}</div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 500 }}>{o.klantNaam}</div>
                    <div className="portal-table-secondary">{o.datum}</div>
                  </td>
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
            <Link href="/admin/bestellingen" className="portal-card-link">Alle bestellingen →</Link>
          </div>
          <table className="portal-table">
            <thead>
              <tr>
                <th>Bestelling</th>
                <th>Klant</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBestellingen.map(b => (
                <tr key={b.id}>
                  <td>
                    <div className="portal-table-primary">{b.id}</div>
                    <div className="portal-table-secondary">{b.totaal}</div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 500 }}>{b.klantNaam}</div>
                    <div className="portal-table-secondary">{b.datum}</div>
                  </td>
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
