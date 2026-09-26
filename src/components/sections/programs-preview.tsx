import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProgramIcon } from '@/components/sections/program-icon'
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              <CardContent className="text-muted-foreground flex flex-col gap-2 text-sm">
                <span>Duration: {program.duration}</span>
                {program.subjects ? (
                  <span>Subjects: {program.subjects.join(', ')}</span>
                ) : null}
              </CardContent>
            </Card>
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
