import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="font-display text-lg tracking-widest text-white/30 hover:text-[#DC2626] transition-colors">
          GARBA COLLINS
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/garba_collins?igsh=Z2JpeW9uNGdveDV1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#DC2626] transition-colors"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/collins-garba-041239260"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#DC2626] transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        <p className="font-body text-xs text-white/20 tracking-wider">
          © {new Date().getFullYear()} Garba Collins
        </p>
      </div>
    </footer>
  )
}
