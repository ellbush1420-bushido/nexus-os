import { useEffect, useState } from 'react'
import { applyTheme, getPreferredTheme } from '../lib/theme'

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const t = getPreferredTheme()
    setTheme(t)
    applyTheme(t)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`fixed top-4 right-4 z-50 w-[42px] h-[42px] rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text)] text-lg cursor-pointer hover:scale-105 hover:rotate-[20deg] transition-transform motion-reduce:transition-none motion-reduce:hover:transform-none ${className}`}
      aria-label="Toggle light and dark theme"
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  )
}
