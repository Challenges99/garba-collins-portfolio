import type { Metadata } from 'next'
import WorkGrid from '@/components/WorkGrid'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Work — Garba Collins',
}

export default function WorkPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#DC2626] font-body text-xs tracking-[0.4em] uppercase mb-4">Portfolio</p>
          <h1 className="font-display text-5xl md:text-8xl tracking-wide text-white leading-none">WORK</h1>
        </div>
        <WorkGrid projects={projects.filter((p) => !p.hidden)} />
      </div>
    </div>
  )
}
