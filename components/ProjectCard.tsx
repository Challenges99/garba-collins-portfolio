import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { withBasePath } from '@/lib/basePath'

const categoryColors: Record<string, string> = {
  'Sport Posters': 'from-[#1a0a0a] to-[#0f0e0e]',
  'Matchday Design': 'from-[#0a0a1a] to-[#0f0e0e]',
  'Social Rebrand': 'from-[#0a1a0a] to-[#0f0e0e]',
  'Player Graphics': 'from-[#1a100a] to-[#0f0e0e]',
}

export default function ProjectCard({ project }: { project: Project }) {
  const gradient = categoryColors[project.category] ?? 'from-[#181717] to-[#0f0e0e]'
  const hasCover = !project.cover.startsWith('/placeholder')

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {/* Thumbnail */}
      <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[#181717]">
        {hasCover ? (
          <Image
            src={withBasePath(project.cover)}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
          >
            <span className="font-display text-[clamp(20px,4vw,36px)] text-white/8 tracking-wider text-center px-4 leading-tight">
              {project.title.toUpperCase()}
            </span>
          </div>
        )}
        {/* Red hover tint */}
        <div className="absolute inset-0 bg-[#DC2626]/0 group-hover:bg-[#DC2626]/8 transition-colors duration-300" />
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#DC2626] text-white font-body text-[10px] tracking-widest uppercase px-2 py-1">
            {project.category}
          </span>
        </div>
        {/* Arrow reveal on hover */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="font-body text-xs text-white/60 tracking-wider">View →</span>
        </div>
      </div>

      {/* Meta */}
      <h3 className="font-display text-lg tracking-wide text-white group-hover:text-[#DC2626] transition-colors duration-200 leading-tight">
        {project.title.toUpperCase()}
      </h3>
      <p className="mt-1.5 font-body text-sm text-[#6B7280] leading-relaxed line-clamp-2">
        {project.description}
      </p>
    </Link>
  )
}
