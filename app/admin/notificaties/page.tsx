'use client'

import { useState } from 'react'
import { NOTIFICATIES, NotificatieType } from '@/lib/mock-data'

const TYPE_ICON: Record<NotificatieType, React.ReactNode> = {
  offerte: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2h7l3 3v9H3V2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M10 2v3h3M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bestelling: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1 3h14M1 8h14M1 13h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  voorraad: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 4l6-2 6 2v6l-6 4-6-4V4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M8 2v12M2 4l6 3 6-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  klant: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="3" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M13 7v4M11 9h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
}

const TYPE_COLOR: Record<NotificatieType, string> = {
  offerte: '#1B3A6B',
  bestelling: '#2E7D32',
  voorraad: '#B45309',
  klant: '#6B21A8',
}

const TYPE_BG: Record<NotificatieType, string> = {
  offerte: '#EEF2FA',
  bestelling: '#E8F5E9',
  voorraad: '#FFF8E1',
  klant: '#F3E8FF',
}

export default function AdminNotificatiesPage() {
  const [items, setItems] = useState(NOTIFICATIES)
  const ongelezen = items.filter(n => !n.gelezen).length

  const markAllRead = () => setItems(prev => prev.map(n => ({ ...n, gelezen: true })))
  const markRead = (id: string) => setItems(prev => prev.map(n => n.id === id ? { ...n, gelezen: true } : n))

  return (
    <>
      <div className="portal-page-header">
        <div>
          <h1 className="portal-page-title">Notificaties</h1>
          <p className="portal-page-sub">{ongelezen} ongelezen berichten</p>
        </div>
        {ongelezen > 0 && (
          <button className="portal-action-btn" onClick={markAllRead}>Alles als gelezen markeren</button>
        )}
      </div>

      <div className="notif-list">
        {items.map(n => (
          <div
            key={n.id}
            className={`notif-item${n.gelezen ? ' gelezen' : ''}`}
            onClick={() => markRead(n.id)}
          >
            <div className="notif-icon" style={{ background: TYPE_BG[n.type], color: TYPE_COLOR[n.type] }}>
              {TYPE_ICON[n.type]}
            </div>
            <div className="notif-body">
              <div className="notif-titel">
                {!n.gelezen && <span className="notif-dot" />}
                {n.titel}
              </div>
              <div className="notif-omschrijving">{n.omschrijving}</div>
              <div className="notif-tijd">{n.tijdGeleden}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
