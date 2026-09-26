import { createFileRoute } from '@tanstack/react-router'
import { Users } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { EmptyState } from '@/components/shared/empty-state'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { departments, faculty } from '@/data/faculty'
import { site } from '@/data/site'

export const Route = createFileRoute('/faculty')({
  component: FacultyPage,
  head: () => ({
    meta: [{ title: `Faculty — ${site.name}` }],
  }),
})

function FacultyPage() {
  return (
    <div className="flex flex-col gap-12 py-14">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our People"
          title="Faculty"
          description="A current, verified faculty list is being finalized with the college office and will be published here shortly."
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {departments.map((d) => (
            <Badge key={d} variant="secondary">
              {d}
            </Badge>
          ))}
        </div>

        <div className="mt-10">
          {faculty.length === 0 ? (
            <EmptyState
              icon={Users}
              title="Faculty list coming soon"
              description="The teacher list previously published for this college on the government portal is outdated (some staff have since been transferred). We're publishing an accurate, up-to-date list here shortly."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {faculty.map((member) => (
                <Card key={member.id}>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    <p>{member.designation}</p>
                    <p>{member.department}</p>
                    <p>{member.qualification}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
