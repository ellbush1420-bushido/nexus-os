const ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3 0-4.1.1C4.4 2.3 2.3 4.4 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.5 2.3 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.5-.2 5.6-2.3 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.5-2.3-5.6-5.8-5.8C15 2 14.7 2 12 2z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
      <path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7.1 3.9H5.1L17 20z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15V9l5.8 3-5.8 3z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
      <path d="M16.6 2h-3.3v13.3a2.9 2.9 0 1 1-2-2.8V9.2a6.2 6.2 0 1 0 5.3 6.1V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.7z" />
    </svg>
  ),
}

export default function SocialIcons({ links }) {
  const visible = links.filter((l) => l.href && l.href.trim() !== '')
  if (visible.length === 0) return null

  return (
    <nav className="flex gap-3.5 mt-7" aria-label="Social links">
      {visible.map((l) => (
        <a
          key={l.id}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="w-[42px] h-[42px] grid place-items-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text)] transition-transform hover:-translate-y-0.5 hover:scale-105 hover:text-[var(--accent)] hover:border-[var(--accent)] motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          {ICONS[l.id]}
        </a>
      ))}
    </nav>
  )
}
