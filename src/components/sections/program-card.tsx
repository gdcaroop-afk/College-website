import { Link } from '@tanstack/react-router'
import { Clock, ArrowRight } from 'lucide-react'

import { ProgramIcon } from '@/components/sections/program-icon'
import { ProgramIllustration } from '@/components/sections/program-illustration'
import type { Program } from '@/data/programs'

export function ProgramCard({ program, dashed = false }: { program: Program; dashed?: boolean }) {
  return (
    <div
      className={
        dashed
          ? 'border-border bg-card group flex flex-col justify-between overflow-hidden rounded-xl border border-dashed shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
          : 'bg-card group flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
      }
    >
      <div>
        <div className="relative h-32 w-full overflow-hidden">
          <ProgramIllustration
            slug={program.slug}
            className="size-full transition-transform duration-500 group-hover:scale-105"
          />
          <span className="bg-card/90 backdrop-blur-xs text-primary absolute top-2.5 left-2.5 flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold shadow-xs">
            <ProgramIcon title={program.title} className="size-3" />
            {program.level}
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5 p-4">
          <h3 className="font-heading text-foreground group-hover:text-primary text-base font-semibold transition-colors text-center">
            {program.title}
          </h3>
          <span className="text-muted-foreground flex items-center justify-center gap-1.5 text-xs">
            <Clock className="size-3 text-primary" />
            {program.duration}
          </span>
          {program.subjects ? (
            <p className="text-muted-foreground text-xs text-center leading-relaxed mt-1">
              <span className="font-semibold text-foreground">Subjects:</span> {program.subjects.join(', ')}
            </p>
          ) : null}
          {program.note ? <p className="text-muted-foreground text-xs italic text-center mt-0.5">{program.note}</p> : null}
        </div>
      </div>

      <div className="p-4 pt-0 mt-2">
        <Link
          to="/academics/$slug"
          params={{ slug: program.slug }}
          className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
        >
          <span>Read About Course</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
