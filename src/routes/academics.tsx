import { createFileRoute } from '@tanstack/react-router'

import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProgramIcon } from '@/components/sections/program-icon'
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
            <Card key={program.title}>
              <CardHeader>
                <span className="bg-primary/10 text-primary mb-1 flex size-11 items-center justify-center rounded-full">
                  <ProgramIcon title={program.title} className="size-5" />
                </span>
                <Badge variant="secondary" className="w-fit">
                  {program.level}
                </Badge>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground flex flex-col gap-1.5 text-sm">
                <span>
                  <span className="text-foreground font-medium">Duration:</span>{' '}
                  {program.duration}
                </span>
                {program.subjects ? (
                  <span>
                    <span className="text-foreground font-medium">Subjects:</span>{' '}
                    {program.subjects.join(', ')}
                  </span>
                ) : null}
              </CardContent>
            </Card>
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
              <Card key={program.title} className="border-dashed">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    {program.level}
                  </Badge>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground flex flex-col gap-1.5 text-sm">
                  <span>Duration: {program.duration}</span>
                  {program.note ? <span className="italic">{program.note}</span> : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
