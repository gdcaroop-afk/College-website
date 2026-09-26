import { BookOpen, GraduationCap, Landmark, Users } from 'lucide-react'

import { site } from '@/data/site'

const highlights = [
  {
    icon: Landmark,
    title: 'Public Sector Institution',
    description: site.governance.department,
  },
  {
    icon: GraduationCap,
    title: 'UOG Affiliated',
    description: `Degree programs affiliated with the ${site.affiliation.university}`,
  },
  {
    icon: BookOpen,
    title: 'Arts, Science & CS',
    description: 'Intermediate and BS programs across multiple disciplines',
  },
  {
    icon: Users,
    title: site.gender,
    description: 'Serving students of Aroop and the surrounding Gujranwala area',
  },
] as const

export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="border-border bg-card flex flex-col items-start gap-3 rounded-lg border p-6 shadow-sm"
          >
            <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-full">
              <Icon className="size-5" />
            </span>
            <h3 className="font-heading text-foreground font-semibold">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
