'use client'

import { useEffect, useState } from 'react'

import {
  THEME_STORAGE_KEY,
  applyTheme,
  getSystemTheme,
  isAppTheme,
  type AppTheme,
  type ResolvedAppTheme,
} from '@/lib/utils/theme'

type UseThemeResult = {
  isDark: boolean
  resolvedTheme: ResolvedAppTheme
  setTheme: (nextTheme: AppTheme) => void
  theme: AppTheme
  toggleTheme: () => void
}

function getInitialTheme(): AppTheme {
  if (typeof window === 'undefined') {
    return 'system'
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return isAppTheme(storedTheme) ? storedTheme : 'system'
}

export function useTheme(): UseThemeResult {
  const [theme, setThemeState] = useState<AppTheme>(getInitialTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedAppTheme>(() =>
    theme === 'system' ? getSystemTheme() : theme
  )

  useEffect(() => {
    const nextResolvedTheme = applyTheme(theme)
    setResolvedTheme(nextResolvedTheme)

    window.localStorage.setItem(THEME_STORAGE_KEY, theme)

    if (theme !== 'system') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      setResolvedTheme(applyTheme('system'))
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  return {
    isDark: resolvedTheme === 'dark',
    theme,
    resolvedTheme,
    setTheme: setThemeState,
    toggleTheme: () => {
      setThemeState((currentTheme) => {
        const activeTheme = currentTheme === 'system' ? getSystemTheme() : currentTheme
        return activeTheme === 'dark' ? 'light' : 'dark'
      })
    },
  }
}
