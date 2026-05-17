export type AppTheme = 'light' | 'dark' | 'system'
export type ResolvedAppTheme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'giftvibelk-theme'
export const THEME_ATTRIBUTE = 'data-theme'

export function isAppTheme(value: string | null | undefined): value is AppTheme {
  return value === 'light' || value === 'dark' || value === 'system'
}

export function getSystemTheme(): ResolvedAppTheme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function resolveTheme(theme: AppTheme): ResolvedAppTheme {
  if (theme === 'system') {
    return getSystemTheme()
  }

  return theme
}

export function applyTheme(theme: AppTheme): ResolvedAppTheme {
  const resolvedTheme = resolveTheme(theme)

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, resolvedTheme)
  }

  return resolvedTheme
}
