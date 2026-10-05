import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

export default function QRGenerator() {
  return (
    <div className="min-h-screen px-5 py-10">
      <ThemeToggle />
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent2)] font-semibold">NEXUS//OS</p>
        <h1 className="text-2xl font-semibold mt-1">QR Generator</h1>
        <p className="mt-4 text-sm text-[var(--muted)]">QR module available in local/full deploy.</p>
        <Link to="/" className="inline-block mt-6 text-sm text-[var(--accent)] hover:underline">← Back to home</Link>
      </div>
    </div>
  )
}
