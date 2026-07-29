import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const featured = [
  projects.find((p) => p.category === "Sport Posters" && !p.hidden)!,
  projects.find((p) => p.category === "Matchday Design" && !p.hidden)!,
  projects.find((p) => p.category === "Social Rebrand" && !p.hidden)!,
  projects.find((p) => p.category === "Player Graphics" && !p.hidden)!,
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#181717]/60 via-transparent to-[#0f0e0e] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[#DC2626] font-body text-xs tracking-[0.5em] uppercase mb-8">
            Creative Designer
          </p>
          <h1 className="font-display text-[clamp(80px,16vw,200px)] leading-[0.9] tracking-wide text-white mb-8">
            MY PORTFOLIO
          </h1>
          <div className="w-20 h-0.5 bg-[#DC2626] mx-auto mb-8" />
          <p className="text-[#6B7280] font-body text-base md:text-lg max-w-sm mx-auto mb-14 leading-relaxed">
            Sports design for clubs, academies, and athletes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="bg-[#DC2626] text-white font-body text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#b91c1c] transition-colors duration-200"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white font-body text-xs tracking-[0.3em] uppercase px-12 py-4 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-0.5 h-8 bg-white animate-pulse" />
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[#DC2626] font-body text-xs tracking-[0.4em] uppercase mb-3">
                Portfolio
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-wide text-white">
                SELECTED WORK
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:block text-[#6B7280] font-body text-xs tracking-widest uppercase hover:text-[#DC2626] transition-colors"
            >
              All Work →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/work"
              className="text-[#6B7280] font-body text-xs tracking-widest uppercase hover:text-[#DC2626] transition-colors"
            >
              View All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Disciplines strip */}
      <section className="py-16 px-6 border-y border-white/5 bg-[#181717]/40">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Sport Posters",
            "Matchday Design",
            "Social Rebrands",
            "Player CVs",
          ].map((d) => (
            <div key={d} className="flex items-center gap-3">
              <span className="w-0.5 h-8 bg-[#DC2626] shrink-0" />
              <span className="font-display text-base md:text-lg tracking-wide text-white/60">
                {d.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-7xl tracking-wide text-white mb-6 leading-tight">
            NEED SPORTS
            <br />
            DESIGN?
          </h2>
          <p className="text-[#6B7280] font-body mb-12 max-w-sm mx-auto leading-relaxed">
            From matchday posters to full social identity — let's build
            something that makes your club look the part.
          </p>
          <Link
            href="/contact"
            className="bg-[#DC2626] text-white font-body text-xs tracking-[0.3em] uppercase px-14 py-5 hover:bg-[#b91c1c] transition-colors duration-200 inline-block"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
