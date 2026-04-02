'use client'

import { useState } from 'react'
import { CERTIFICATEN } from '@/lib/mock-data'

export default function AdminCertificatenPage() {
  const [showUpload, setShowUpload] = useState(false)
  const [uploading, setUploading] = useState<string | null>(null)

  const handleUpload = (id: string) => {
    setUploading(id)
    setTimeout(() => setUploading(null), 1800)
  }

  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Certificaten</h1>
          <p className="portal-page-sub">Upload & beheer materiaalcertificaten per bestelling</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowUpload(o => !o)}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 9V1M3 4l3.5-3.5L10 4M1 12h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Nieuw certificaat uploaden
        </button>
      </div>

      {showUpload && (
        <div className="admin-upload-zone">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 20V8M10 13l6-6 6 6M6 26h20" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div className="admin-upload-title">Sleep een PDF hier naartoe</div>
          <div className="admin-upload-sub">of klik om te bladeren — max. 10 MB</div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <button className="portal-action-btn portal-action-btn-primary">Bestand kiezen</button>
            <button className="portal-action-btn" onClick={() => setShowUpload(false)}>Annuleren</button>
          </div>
        </div>
      )}

      <div className="portal-card">
        <table className="portal-table portal-table-full">
          <thead>
            <tr>
              <th>Certificaat #</th>
              <th>Materiaal</th>
              <th>Kwaliteit</th>
              <th>Smelt #</th>
              <th>Norm</th>
              <th>Bestelling</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {CERTIFICATEN.map(c => (
              <tr key={c.id}>
                <td>
                  <div className="portal-table-primary">{c.id}</div>
                  <div className="portal-table-secondary">{c.datum}</div>
                </td>
                <td>{c.materiaal}</td>
                <td style={{ fontWeight: 600 }}>{c.kwaliteit}</td>
                <td className="portal-table-secondary" style={{ fontFamily: 'monospace', fontSize: '12.5px' }}>{c.smeltNummer}</td>
                <td>{c.norm}</td>
                <td className="portal-table-secondary">{c.orderRef}</td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      className="portal-action-btn"
                      onClick={() => handleUpload(c.id)}
                      disabled={uploading === c.id}
                    >
                      {uploading === c.id ? (
                        <>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ animation: 'spin 1s linear infinite' }}><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.4" strokeDasharray="20" strokeDashoffset="10"/></svg>
                          Uploading…
                        </>
                      ) : (
                        <>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 9V1M3 4l3.5-3.5L10 4M1 12h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          Vervangen
                        </>
                      )}
                    </button>
                    <button className="portal-action-btn portal-action-btn-primary">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v8M3 5l3.5 4 3.5-4M1 12h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Download
                    </button>
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
