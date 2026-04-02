'use client'

import { ADMIN_BESTELLINGEN } from '@/lib/mock-data'

const STATUS_COLORS: Record<string, string> = {
  'In verwerking': 'badge-amber',
  'Verzonden': 'badge-blue',
  'Geleverd': 'badge-green',
}

export default function AdminBestellingenPage() {
  const totaalOmzet = '€ 20.870,–'

  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Bestellingen</h1>
          <p className="portal-page-sub">{ADMIN_BESTELLINGEN.length} bestellingen · Totaal {totaalOmzet}</p>
        </div>
      </div>

      <div className="portal-card">
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Bestelling #</th>
              <th>Klant</th>
              <th>Artikelen</th>
              <th>Totaal</th>
              <th>Status</th>
              <th>Track & Trace</th>
            </tr>
          </thead>
          <tbody>
            {ADMIN_BESTELLINGEN.map(b => (
              <tr key={b.id}>
                <td>
                  <div className="portal-table-primary">{b.id}</div>
                  <div className="portal-table-secondary">{b.datum}</div>
                </td>
                <td>
                  <div style={{ fontWeight: 600 }}>{b.klantNaam}</div>
                  <div className="portal-table-secondary">{b.klantBedrijf}</div>
                </td>
                <td>
                  <div>{b.artikelen}</div>
                  <div className="portal-table-secondary">{b.aantalArtikelen} artikel{b.aantalArtikelen !== 1 ? 'en' : ''}</div>
                </td>
                <td className="portal-table-primary">{b.totaal}</td>
                <td><span className={`badge ${STATUS_COLORS[b.status]}`}>{b.status}</span></td>
                <td>
                  {b.track
                    ? <span className="portal-table-secondary" style={{ fontFamily: 'monospace', fontSize: '12px' }}>{b.track}</span>
                    : <span className="portal-table-secondary">—</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
