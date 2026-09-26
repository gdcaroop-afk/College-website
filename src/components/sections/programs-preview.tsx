import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { ProgramCard } from '@/components/sections/program-card'
import { programs } from '@/data/programs'

export function ProgramsPreview() {
  return (
    <section className="bg-muted/40 border-border border-y py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academics"
          title="Academic Programs"
          description="From intermediate studies to four-year bachelor's degrees, affiliated with the University of Gujrat."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/academics">
              View All Programs
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
