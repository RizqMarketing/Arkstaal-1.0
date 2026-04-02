import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './components/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arkstaal — Staal & Metaal Distributie',
  description: 'Breed assortiment aluminium, staal, roestvrij staal, koper en messing. Op maat verwerkt, volgende dag geleverd.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
<LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
