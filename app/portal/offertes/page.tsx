'use client'

import { OFFERTES } from '@/lib/mock-data'

const STATUS_COLORS: Record<string, string> = {
  'Nieuw': 'badge-blue',
  'In behandeling': 'badge-amber',
  'Verstuurd': 'badge-purple',
  'Geaccepteerd': 'badge-green',
}

export default function OffertesPage() {
  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Offertes</h1>
          <p className="portal-page-sub">{OFFERTES.length} offertes gevonden</p>
        </div>
        <a href="/contact" className="btn btn-primary">Nieuwe offerte aanvragen</a>
      </div>

      <div className="portal-card">
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Offerte #</th>
              <th>Datum</th>
              <th>Materiaal</th>
              <th>Hoeveelheid</th>
              <th>Bedrag</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {OFFERTES.map(o => (
              <tr key={o.id}>
                <td>
                  <div className="portal-table-primary">{o.id}</div>
                  <div className="portal-table-secondary">Ref: {o.referentie}</div>
                </td>
                <td>{o.datum}</td>
                <td>{o.materiaal}</td>
                <td>{o.hoeveelheid}</td>
                <td className="portal-table-primary">{o.bedrag}</td>
                <td><span className={`badge ${STATUS_COLORS[o.status]}`}>{o.status}</span></td>
                <td>
                  <button className="portal-action-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Download PDF
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
