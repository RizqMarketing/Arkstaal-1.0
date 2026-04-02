'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations, Lang, Translations } from '@/lib/translations'

interface LanguageContextValue {
  lang: Lang
  t: Translations
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'nl',
  t: translations.nl,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('nl')

  useEffect(() => {
    const saved = localStorage.getItem('arkstaal-lang') as Lang | null
    if (saved === 'en') setLang('en')
  }, [])

  const toggle = () => {
    setLang(prev => {
      const next: Lang = prev === 'nl' ? 'en' : 'nl'
      localStorage.setItem('arkstaal-lang', next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] as Translations, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
