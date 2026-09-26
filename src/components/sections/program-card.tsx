import { Link } from '@tanstack/react-router'
import { Clock } from 'lucide-react'

import { ProgramIcon } from '@/components/sections/program-icon'
import { ProgramIllustration } from '@/components/sections/program-illustration'
import type { Program } from '@/data/programs'

export function ProgramCard({ program, dashed = false }: { program: Program; dashed?: boolean }) {
  return (
    <Link
      to="/academics/$slug"
      params={{ slug: program.slug }}
      className={
        dashed
          ? 'border-border bg-card group block overflow-hidden rounded-2xl border border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
          : 'bg-card group block overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
      }
    >
      <div className="relative h-44 w-full overflow-hidden">
        <ProgramIllustration
          title={program.title}
          className="size-full transition-transform duration-500 group-hover:scale-110"
        />
        <span className="bg-card text-primary absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-md">
          <ProgramIcon title={program.title} className="size-3.5" />
          {program.level}
        </span>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-heading text-foreground group-hover:text-primary text-base font-semibold transition-colors">
          {program.title}
        </h3>
        <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
          <Clock className="size-3.5" />
          {program.duration}
        </span>
        {program.subjects ? (
          <p className="text-muted-foreground text-sm">{program.subjects.join(', ')}</p>
        ) : null}
        {program.note ? <p className="text-muted-foreground text-xs italic">{program.note}</p> : null}
      </div>
    </Link>
  )
}
