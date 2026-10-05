export function getPreferredTheme() {
  const saved = localStorage.getItem('nexus-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('nexus-theme', theme)
}
