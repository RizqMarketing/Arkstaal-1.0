'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-soft)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'var(--font)',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', textDecoration: 'none' }}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <rect width="34" height="34" fill="#1A2332"/>
          <path d="M7 26L17 8L27 26H21L17 18L13 26H7Z" fill="white"/>
          <rect x="7" y="27" width="20" height="2.5" fill="#E8500A"/>
        </svg>
        <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.5px', textTransform: 'uppercase' }}>
          Arkstaal
        </span>
      </Link>

      <div style={{
        background: 'white',
        border: '1px solid var(--border)',
        borderTop: '3px solid var(--orange)',
        padding: '40px',
        width: '100%',
        maxWidth: '420px',
      }}>
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '11.5px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--orange)', marginBottom: '8px' }}>
            My Arkstaal
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--navy)', marginBottom: '6px' }}>
            Log in to your account
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>
            Access your orders, invoices and quotes.
          </p>
        </div>

        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '6px' }}>
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@company.com"
              style={{
                width: '100%',
                padding: '10px 14px',
                fontSize: '14px',
                border: '1.5px solid var(--border)',
                outline: 'none',
                fontFamily: 'var(--font)',
                color: 'var(--text)',
                background: 'white',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '6px' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '10px 14px',
                fontSize: '14px',
                border: '1.5px solid var(--border)',
                outline: 'none',
                fontFamily: 'var(--font)',
                color: 'var(--text)',
                background: 'white',
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14px', marginTop: '4px' }}
          >
            Log in
          </button>
        </form>

        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <a href="#" style={{ fontSize: '13px', color: 'var(--orange)', fontWeight: 600 }}>
            Forgot your password?
          </a>
        </div>
      </div>

      <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--text-3)' }}>
        No account yet?{' '}
        <a href="#" style={{ color: 'var(--orange)', fontWeight: 600 }}>Contact us to get access</a>
      </p>
    </div>
  )
}
