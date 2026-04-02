'use client'

import { FACTUREN, FactuurStatus } from '@/lib/mock-data'

const STATUS_COLORS: Record<FactuurStatus, string> = {
  'Openstaand': 'badge-blue',
  'Betaald': 'badge-green',
  'Verlopen': 'badge-red',
}

export default function AdminFacturenPage() {
  const openstaand = FACTUREN.filter(f => f.status === 'Openstaand')
  const openstaandTotaal = '€ 7.970,–'
  const verlopen = FACTUREN.filter(f => f.status === 'Verlopen').length

  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Facturen</h1>
          <p className="portal-page-sub">{FACTUREN.length} facturen · {openstaand.length} openstaand</p>
        </div>
        <button className="btn btn-primary">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v12M1 6.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          Factuur aanmaken
        </button>
      </div>

      <div className="portal-stats-row" style={{ gridTemplateColumns: 'repeat(3,1fr)', marginBottom: '20px' }}>
        <div className="portal-stat-card admin-stat-card">
          <div className="portal-stat-label">Openstaand</div>
          <div className="portal-stat-value admin-stat-value">{openstaandTotaal}</div>
          <div className="portal-table-secondary" style={{ fontSize: '12px' }}>{openstaand.length} facturen</div>
        </div>
        <div className="portal-stat-card admin-stat-card" style={{ borderTopColor: '#B91C1C' }}>
          <div className="portal-stat-label">Verlopen</div>
          <div className="portal-stat-value admin-stat-value" style={{ color: verlopen > 0 ? '#B91C1C' : undefined }}>{verlopen}</div>
          <div className="portal-table-secondary" style={{ fontSize: '12px' }}>actie vereist</div>
        </div>
        <div className="portal-stat-card admin-stat-card" style={{ borderTopColor: '#2E7D32' }}>
          <div className="portal-stat-label">Betaald deze maand</div>
          <div className="portal-stat-value admin-stat-value" style={{ color: '#2E7D32' }}>€ 9.820,–</div>
          <div className="portal-table-secondary" style={{ fontSize: '12px' }}>3 facturen</div>
        </div>
      </div>

      <div className="portal-card">
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Factuur #</th>
              <th>Klant</th>
              <th>Bestelling</th>
              <th>Factuurdatum</th>
              <th>Vervaldatum</th>
              <th>Bedrag</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {FACTUREN.map(f => (
              <tr key={f.id}>
                <td className="portal-table-primary">{f.id}</td>
                <td>
                  <div style={{ fontWeight: 600 }}>{f.klantNaam}</div>
                  <div className="portal-table-secondary">{f.klantBedrijf}</div>
                </td>
                <td className="portal-table-secondary">{f.orderRef}</td>
                <td>{f.datum}</td>
                <td style={{ color: f.status === 'Verlopen' ? '#B91C1C' : undefined, fontWeight: f.status === 'Verlopen' ? 600 : undefined }}>
                  {f.vervalDatum}
                </td>
                <td className="portal-table-primary">{f.bedrag}</td>
                <td><span className={`badge ${STATUS_COLORS[f.status]}`}>{f.status}</span></td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="portal-action-btn">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v8M3 5l3.5 4 3.5-4M1 12h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      PDF
                    </button>
                    {f.status === 'Openstaand' && (
                      <button className="portal-action-btn portal-action-btn-primary">
                        Stuur herinnering
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
