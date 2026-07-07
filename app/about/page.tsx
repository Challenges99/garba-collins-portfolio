import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Garba Collins",
};

const disciplines = [
  {
    title: "Matchday Posters",
    desc: "High-impact visual posters for match nights — bold typography, cinematic composition, built to stop the scroll.",
  },
  {
    title: "Matchday Graphics",
    desc: "Digital assets for social, LED boards, and broadcast — designed for maximum atmosphere on the biggest stages.",
  },
  {
    title: "Social Media Rebrands",
    desc: "Full identity systems for clubs and academies — templates, colour systems, profile assets, and brand guidelines.",
  },
  {
    title: "Player CVs",
    desc: "Professional scouting-ready player CVs — clean, stats-led, and built to land opportunities with clubs and agents.",
  },
];

const process = [
  {
    step: "01",
    title: "Brief",
    desc: "We align on your club, your audience, and what you need the design to do. No wasted rounds.",
  },
  {
    step: "02",
    title: "Design",
    desc: "I build concepts rooted in your identity — no generic templates, no lazy defaults.",
  },
  {
    step: "03",
    title: "Deliver",
    desc: "Production-ready files for print, digital, and social — on time, on brand, ready to use.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <p className="text-[#DC2626] font-body text-xs tracking-[0.4em] uppercase mb-4">
            About
          </p>
          <h1 className="font-display text-5xl md:text-8xl tracking-wide text-white leading-none">
            GARBA
            <br />
            COLLINS
          </h1>
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 pb-24 border-b border-white/5">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-white mb-8">
              CREATIVE DESIGNER
            </h2>
            <div className="space-y-5 text-[#6B7280] font-body leading-relaxed text-[15px]">
              <p>
                I'm Garba Collins — a freelance sports designer specialising in
                visual work for the football world. I create designs that feel
                like they belong at the top level: bold, purposeful, and built
                to represent clubs and athletes with the seriousness they
                deserve.
              </p>
              <p>
                From matchday posters to full social identity rebrands, I work
                with clubs, academies, and individual players to create graphics
                that cut through. My work spans the National Non-League and
                beyond.
              </p>
              <p>Available for freelance projects worldwide.</p>
            </div>
          </div>
          <div>
            <div className="aspect-[4/5] bg-[#181717] border border-white/5 flex items-center justify-center">
              <span className="font-display text-7xl text-white/10 tracking-widest">
                GC
              </span>
            </div>
          </div>
        </div>

        {/* Disciplines */}
        <div className="mb-24 pb-24 border-b border-white/5">
          <h2 className="font-display text-3xl md:text-5xl tracking-wide text-white mb-14">
            DISCIPLINES
          </h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {disciplines.map(({ title, desc }) => (
              <div key={title} className="flex gap-5">
                <div className="w-0.5 bg-[#DC2626] shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl tracking-wide text-white mb-2">
                    {title.toUpperCase()}
                  </h3>
                  <p className="text-[#6B7280] font-body text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
          <h2 className="font-display text-3xl md:text-5xl tracking-wide text-white mb-14">
            THE PROCESS
          </h2>
          <div className="grid sm:grid-cols-3 gap-12">
            {process.map(({ step, title, desc }) => (
              <div key={step}>
                <span className="font-display text-7xl text-[#DC2626]/15 tracking-wider block mb-4">
                  {step}
                </span>
                <h3 className="font-display text-2xl tracking-wide text-white mb-3">
                  {title.toUpperCase()}
                </h3>
                <p className="text-[#6B7280] font-body text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#181717] border border-white/5 px-12 py-16 text-center">
          <p className="text-[#6B7280] font-body text-xs tracking-widest uppercase mb-4">
            Available for freelance
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-white mb-10 leading-tight">
            LET'S BUILD
            <br />
            SOMETHING
          </h2>
          <Link
            href="/contact"
            className="bg-[#DC2626] text-white font-body text-xs tracking-[0.3em] uppercase px-14 py-5 hover:bg-[#b91c1c] transition-colors duration-200 inline-block"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
