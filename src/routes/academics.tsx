import { createFileRoute } from '@tanstack/react-router'

import { SectionHeading } from '@/components/shared/section-heading'
import { ProgramCard } from '@/components/sections/program-card'
import { programs, programsPendingConfirmation } from '@/data/programs'
import { site } from '@/data/site'

export const Route = createFileRoute('/academics')({
  component: AcademicsPage,
  head: () => ({
    meta: [
      { title: `Academic Programs — ${site.name}` },
      {
        name: 'description',
        content:
          'Intermediate and BS academic programs offered at Govt. Graduate College Aroop, Gujranwala.',
      },
    ],
  }),
})

function AcademicsPage() {
  return (
    <div className="flex flex-col gap-14 py-14">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academics"
          title="Academic Programs"
          description={`Sourced from the official ${site.governance.department} program listing for this college. Degree programs are affiliated with the ${site.affiliation.university}.`}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </section>

      {programsPendingConfirmation.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <h3 className="font-heading text-foreground mb-4 text-lg font-semibold">
            Pending Confirmation
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programsPendingConfirmation.map((program) => (
              <ProgramCard key={program.title} program={program} dashed />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
