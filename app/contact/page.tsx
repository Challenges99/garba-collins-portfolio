import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Garba Collins',
}

export default function ContactPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#DC2626] font-body text-xs tracking-[0.4em] uppercase mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-8xl tracking-wide text-white leading-none">
            CONTACT
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20">

          {/* Form */}
          <div>
            <p className="text-[#6B7280] font-body text-[15px] mb-10 leading-relaxed max-w-sm">
              Got a project in mind? Fill out the form and I'll get back to you within 48 hours.
            </p>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-14">
            <div>
              <h3 className="font-display text-xl tracking-wide text-white mb-5">SOCIALS</h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/garba_collins?igsh=Z2JpeW9uNGdveDV1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#6B7280] hover:text-[#DC2626] transition-colors font-body text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                  </svg>
                  @garba_collins
                </a>
                <a
                  href="https://www.linkedin.com/in/collins-garba-041239260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#6B7280] hover:text-[#DC2626] transition-colors font-body text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  Collins Garba
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-wide text-white mb-5">SERVICES</h3>
              <ul className="space-y-3">
                {['Matchday Posters', 'Matchday Graphics', 'Social Media Rebrands', 'Player CVs'].map((s) => (
                  <li key={s} className="flex items-center gap-3 font-body text-sm text-[#6B7280]">
                    <span className="w-1 h-1 rounded-full bg-[#DC2626] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/5 pt-8">
              <p className="font-body text-sm text-[#6B7280]">Based in the UK · Available worldwide</p>
              <p className="font-body text-xs text-white/20 mt-2 tracking-wider">
                Response within 48 hours
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
