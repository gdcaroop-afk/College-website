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
    <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-card flex flex-col items-center gap-3 rounded-xl p-7 text-center shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <span className="bg-accent/15 text-accent-foreground flex size-14 items-center justify-center rounded-full">
              <Icon className="size-6" />
            </span>
            <h3 className="font-heading text-foreground font-semibold">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
