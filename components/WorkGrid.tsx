'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import type { Project, Category } from '@/lib/projects'
import { categories } from '@/lib/projects'

const ALL = 'All' as const
type Filter = typeof ALL | Category

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>(ALL)
  const filtered = active === ALL ? projects : projects.filter((p) => p.category === active)

  const btnCls = (f: Filter) =>
    `font-body text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
      active === f
        ? 'bg-[#DC2626] border-[#DC2626] text-white'
        : 'border-white/10 text-[#6B7280] hover:border-[#DC2626] hover:text-[#DC2626]'
    }`

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-14">
        <button className={btnCls(ALL)} onClick={() => setActive(ALL)}>
          All
        </button>
        {categories.map((c) => (
          <button key={c} className={btnCls(c)} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  )
}
