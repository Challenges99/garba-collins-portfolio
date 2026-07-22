import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Garba Collins",
};

export default function ContactPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#DC2626] font-body text-xs tracking-[0.4em] uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-8xl tracking-wide text-white leading-none">
            CONTACT
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Form */}
          <div>
            <p className="text-[#6B7280] font-body text-[15px] mb-10 leading-relaxed max-w-sm">
              Got a project in mind? Fill out the form and I'll get back to you
              within 48 hours.
            </p>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-14">
            <div>
              <h3 className="font-display text-xl tracking-wide text-white mb-5">
                SOCIALS
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/garba_collins?igsh=Z2JpeW9uNGdveDV1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#6B7280] hover:text-[#DC2626] transition-colors font-body text-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="shrink-0"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.75"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                  @garba_collins
                </a>
                <a
                  href="https://www.linkedin.com/in/collins-garba-041239260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#6B7280] hover:text-[#DC2626] transition-colors font-body text-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="shrink-0"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  Collins Garba
                </a>
                <a
                  href="https://www.behance.net/collinsgarba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#6B7280] hover:text-[#DC2626] transition-colors font-body text-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="shrink-0"
                  >
                    <path d="M7.5 10.4c.9-.5 1.4-1.3 1.4-2.4 0-2.2-1.6-3.2-3.6-3.2H0v13.9h5.5c2.2 0 4.2-1 4.2-3.5 0-1.5-.7-2.5-2.2-2.8zM2.6 6.8h2.4c1 0 1.8.3 1.8 1.4 0 1-.7 1.5-1.7 1.5H2.6V6.8zm2.7 9.4H2.6v-3.4h2.8c1.2 0 1.9.5 1.9 1.7 0 1.2-.9 1.7-2 1.7zM24 13.5c0-3-1.7-5.4-4.8-5.4-3 0-5.1 2.3-5.1 5.3 0 3.1 2 5.3 5.1 5.3 2.4 0 4-1.1 4.7-3.2h-2.2c-.2.7-1.1 1.3-2.4 1.3-1.7 0-2.6-1-2.7-2.6h7.3c0-.2.1-.5.1-.7zm-7.4-1.2c.1-1.3 1-2.2 2.4-2.2 1.5 0 2.2 1 2.3 2.2h-4.7zM14.3 5h6.5v1.5h-6.5z" />
                  </svg>
                  Behance
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-wide text-white mb-5">
                SERVICES
              </h3>
              <ul className="space-y-3">
                {[
                  "Matchday Posters",
                  "Matchday Graphics",
                  "Social Media Rebrands",
                  "Player CVs",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 font-body text-sm text-[#6B7280]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#DC2626] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/5 pt-8">
              <p className="font-body text-sm text-[#6B7280]">
                {" "}
                Available worldwide
              </p>
              <p className="font-body text-xs text-white/20 mt-2 tracking-wider">
                Response within 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
