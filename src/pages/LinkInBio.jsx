import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'
import SocialIcons from '../components/SocialIcons'
import { FEATURED_LINKS, PROFILE, SOCIAL_LINKS } from '../lib/links'

export default function LinkInBio() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen flex justify-center px-5 pt-12 pb-8">
      <ThemeToggle />
      <main className="w-full max-w-[440px] flex flex-col items-center text-center">
        <img
          src={PROFILE.avatar}
          alt={`${PROFILE.displayName} avatar`}
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover border-[3px] border-[var(--accent)] shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_18%,transparent)] bg-[var(--card)]"
        />
        <h1 className="mt-4.5 text-2xl tracking-wide font-semibold">{PROFILE.displayName}</h1>
        <p className="mt-1 text-xs font-semibold tracking-[0.18em] uppercase text-[var(--accent2)]">
          {PROFILE.label}
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--muted)] max-w-[34ch]">
          {PROFILE.bio}
        </p>

        <ul className="list-none w-full mt-7 flex flex-col gap-3 p-0 m-0">
          {FEATURED_LINKS.map((item) => {
            const className = item.featured
              ? 'block px-[18px] py-[15px] rounded-[14px] font-semibold no-underline text-white bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] border-none transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-10px_var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none motion-reduce:hover:transform-none'
              : 'block px-[18px] py-[15px] rounded-[14px] font-semibold no-underline text-[var(--text)] bg-[var(--card)] border border-[var(--border)] transition-transform hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_-10px_var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none motion-reduce:hover:transform-none'

            if (item.href.startsWith('/')) {
              return (
                <li key={item.id}>
                  <Link to={item.href} className={className}>
                    {item.label}
                  </Link>
                </li>
              )
            }
            return (
              <li key={item.id}>
                <a href={item.href} className={className}>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <SocialIcons links={SOCIAL_LINKS} />

        <footer className="mt-9 text-xs text-[var(--muted)]">
          © {year} {PROFILE.displayName} · {PROFILE.label}
        </footer>
      </main>
    </div>
  )
}
