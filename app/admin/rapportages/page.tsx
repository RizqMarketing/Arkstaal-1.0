'use client'

import { ADMIN_STATS, RAPPORT_TOP_PRODUCTEN, RAPPORT_TOP_KLANTEN } from '@/lib/mock-data'

const maxWaarde = Math.max(...ADMIN_STATS.maandOmzet.map(m => m.waarde))

export default function AdminRapportagesPage() {
  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Rapportages</h1>
          <p className="portal-page-sub">Overzicht van omzet, producten en klanten</p>
        </div>
        <button className="portal-action-btn">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v8M3 5l3.5 4 3.5-4M1 12h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Exporteren als PDF
        </button>
      </div>

      {/* Omzet grafiek */}
      <div className="portal-card" style={{ marginBottom: '20px' }}>
        <div className="portal-card-header">
          <div className="portal-card-title">Maandelijkse omzet</div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Totaal YTD: <strong style={{ color: 'var(--navy)' }}>€ 74.930,–</strong></div>
          </div>
        </div>
        <div className="admin-chart" style={{ height: '180px' }}>
          {ADMIN_STATS.maandOmzet.map(m => (
            <div key={m.maand} className="admin-chart-col">
              <div className="admin-chart-val">€ {(m.waarde / 1000).toFixed(1)}k</div>
              <div className="admin-chart-bar-wrap">
                <div
                  className="admin-chart-bar"
                  style={{ height: `${Math.round((m.waarde / maxWaarde) * 100)}%` }}
                />
              </div>
              <div className="admin-chart-label">{m.maand}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="portal-two-col" style={{ marginBottom: '20px' }}>
        {/* Top producten */}
        <div className="portal-card">
          <div className="portal-card-header">
            <div className="portal-card-title">Top producten</div>
            <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Op omzet</div>
          </div>
          <div className="rapport-list">
            {RAPPORT_TOP_PRODUCTEN.map((p, i) => (
              <div key={i} className="rapport-item">
                <div className="rapport-rank">{i + 1}</div>
                <div className="rapport-info">
                  <div className="rapport-naam">{p.naam}</div>
                  <div className="rapport-bar-wrap">
                    <div className="rapport-bar" style={{ width: `${p.pct}%` }} />
                  </div>
                </div>
                <div className="rapport-waarde">{p.omzet}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top klanten */}
        <div className="portal-card">
          <div className="portal-card-header">
            <div className="portal-card-title">Top klanten</div>
            <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Op omzet</div>
          </div>
          <div className="rapport-list">
            {RAPPORT_TOP_KLANTEN.map((k, i) => (
              <div key={i} className="rapport-item">
                <div className="rapport-rank">{i + 1}</div>
                <div className="rapport-info">
                  <div className="rapport-naam">{k.naam}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="rapport-bar-wrap" style={{ flex: 1 }}>
                      <div className="rapport-bar" style={{ width: `${k.pct}%` }} />
                    </div>
                    <div className="portal-table-secondary" style={{ fontSize: '11.5px', whiteSpace: 'nowrap' }}>{k.bestellingen} orders</div>
                  </div>
                </div>
                <div className="rapport-waarde">{k.omzet}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Samenvatting tabel */}
      <div className="portal-card">
        <div className="portal-card-header">
          <div className="portal-card-title">Maandoverzicht</div>
        </div>
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Maand</th>
              <th>Omzet</th>
              <th>Bestellingen</th>
              <th>Gem. orderwaarde</th>
              <th>Groei</th>
            </tr>
          </thead>
          <tbody>
            {[
              { maand: 'Mrt 2025', omzet: '€ 18.890,–', orders: 3, gem: '€ 6.297,–', groei: '+32%', positief: true },
              { maand: 'Feb 2025', omzet: '€ 14.320,–', orders: 4, gem: '€ 3.580,–', groei: '+16%', positief: true },
              { maand: 'Jan 2025', omzet: '€ 12.300,–', orders: 5, gem: '€ 2.460,–', groei: '+41%', positief: true },
              { maand: 'Dec 2024', omzet: '€ 8.700,–', orders: 3, gem: '€ 2.900,–', groei: '-24%', positief: false },
              { maand: 'Nov 2024', omzet: '€ 11.400,–', orders: 6, gem: '€ 1.900,–', groei: '+24%', positief: true },
              { maand: 'Okt 2024', omzet: '€ 9.200,–', orders: 4, gem: '€ 2.300,–', groei: '—', positief: true },
            ].map(r => (
              <tr key={r.maand}>
                <td className="portal-table-primary">{r.maand}</td>
                <td style={{ fontWeight: 600 }}>{r.omzet}</td>
                <td>{r.orders}</td>
                <td>{r.gem}</td>
                <td style={{ fontWeight: 700, color: r.groei === '—' ? 'var(--text-3)' : r.positief ? '#2E7D32' : '#B91C1C' }}>{r.groei}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
