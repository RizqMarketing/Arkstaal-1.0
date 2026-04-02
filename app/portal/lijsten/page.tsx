'use client'

import { useState } from 'react'
import { LIJSTEN } from '@/lib/mock-data'

export default function LijstenPage() {
  const [expanded, setExpanded] = useState<string | null>(LIJSTEN[0]?.id ?? null)

  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Mijn lijsten</h1>
          <p className="portal-page-sub">{LIJSTEN.length} opgeslagen lijsten</p>
        </div>
        <button className="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Nieuwe lijst aanmaken
        </button>
      </div>

      <div className="portal-lijsten">
        {LIJSTEN.map(lijst => {
          const isOpen = expanded === lijst.id
          return (
            <div key={lijst.id} className="portal-lijst-card">
              <div className="portal-lijst-header" onClick={() => setExpanded(isOpen ? null : lijst.id)}>
                <div className="portal-lijst-info">
                  <div className="portal-lijst-name">{lijst.naam}</div>
                  <div className="portal-lijst-meta">{lijst.items.length} artikelen · Aangemaakt {lijst.aangemaakt}</div>
                </div>
                <div className="portal-lijst-actions" onClick={e => e.stopPropagation()}>
                  <button className="portal-action-btn portal-action-btn-primary">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M1 12h11M6.5 9V1M3 4.5l3.5-3.5 3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Bestelling plaatsen
                  </button>
                </div>
                <div className={`portal-lijst-chevron${isOpen ? ' open' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {isOpen && (
                <div className="portal-lijst-items">
                  <table className="portal-table portal-table-full">
                    <thead>
                      <tr>
                        <th>Artikel</th>
                        <th>Specificatie</th>
                        <th>Hoeveelheid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lijst.items.map((item, i) => (
                        <tr key={i}>
                          <td className="portal-table-primary">{item.artikel}</td>
                          <td>{item.specificatie}</td>
                          <td>{item.hoeveelheid}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
