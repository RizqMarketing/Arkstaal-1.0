'use client'

import { BESTELLINGEN } from '@/lib/mock-data'

const STATUS_COLORS: Record<string, string> = {
  'In verwerking': 'badge-amber',
  'Verzonden': 'badge-blue',
  'Geleverd': 'badge-green',
}

export default function BestellingenPage() {
  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Bestellingen</h1>
          <p className="portal-page-sub">{BESTELLINGEN.length} bestellingen gevonden</p>
        </div>
      </div>

      <div className="portal-card">
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Bestelling #</th>
              <th>Datum</th>
              <th>Artikelen</th>
              <th>Totaal</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {BESTELLINGEN.map(b => (
              <tr key={b.id}>
                <td>
                  <div className="portal-table-primary">{b.id}</div>
                  {b.track && (
                    <div className="portal-table-secondary">Track: {b.track}</div>
                  )}
                </td>
                <td>{b.datum}</td>
                <td>
                  <div>{b.artikelen}</div>
                  <div className="portal-table-secondary">{b.aantalArtikelen} artikel{b.aantalArtikelen !== 1 ? 'en' : ''}</div>
                </td>
                <td className="portal-table-primary">{b.totaal}</td>
                <td><span className={`badge ${STATUS_COLORS[b.status]}`}>{b.status}</span></td>
                <td>
                  <button className="portal-action-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v8M3 5l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Herbestellen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
