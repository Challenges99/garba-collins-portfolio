import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return {
    title: project ? `${project.title} — Garba Collins` : 'Work — Garba Collins',
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <div>
      {/* Cover hero */}
      <div className="relative h-[65vh] min-h-[400px] bg-[#181717] flex items-center justify-center overflow-hidden">
        {project.heroImage ? (
          <>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e1a1a] to-[#0f0e0e]" />
        )}
        <span className="relative font-display text-[clamp(48px,10vw,140px)] text-white/8 tracking-wider text-center px-6 leading-none">
          {project.title.toUpperCase()}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0e] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#DC2626]/20" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Back */}
        <div className="mb-10">
          <Link
            href="/work"
            className="text-[#6B7280] font-body text-xs tracking-widest uppercase hover:text-[#DC2626] transition-colors"
          >
            ← Back to Work
          </Link>
        </div>

        {/* Project info */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 pb-20 border-b border-white/5">
          <div className="md:col-span-2">
            <span className="text-[#DC2626] font-body text-xs tracking-[0.3em] uppercase block mb-4">
              {project.category}
            </span>
            <h1 className="font-display text-4xl md:text-7xl tracking-wide text-white mb-6 leading-none">
              {project.title.toUpperCase()}
            </h1>
            <p className="text-[#6B7280] font-body text-[15px] leading-relaxed max-w-lg">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-white/20 mb-1">Category</p>
              <p className="font-body text-sm text-[#F5F5F5]">{project.category}</p>
            </div>
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-white/20 mb-1">Status</p>
              <p className="font-body text-sm text-[#F5F5F5]">{project.status ?? 'Real assets coming soon'}</p>
            </div>
          </div>
        </div>

        {/* Supporting image grid */}
        <h2 className="font-display text-2xl tracking-wide text-white mb-8">PROJECT ASSETS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {project.images.map((src, i) =>
            src.startsWith('/placeholder') ? (
              <div
                key={i}
                className="aspect-[4/5] bg-[#181717] border border-white/5 flex flex-col items-center justify-center gap-3"
              >
                <span className="font-display text-4xl text-white/10 tracking-wider">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <span className="font-body text-xs text-white/20 tracking-widest uppercase">
                  Asset placeholder
                </span>
              </div>
            ) : (
              <div key={i} className="relative aspect-[4/5] bg-[#181717] border border-white/5 overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.title} asset ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-white/5">
          <div>
            <p className="font-display text-3xl md:text-4xl text-white tracking-wide">LIKE WHAT YOU SEE?</p>
            <p className="text-[#6B7280] font-body text-sm mt-1">Let's talk about your project.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#DC2626] text-white font-body text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#b91c1c] transition-colors duration-200 shrink-0"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </div>
  )
}
