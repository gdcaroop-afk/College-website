import { BookOpenCheck, Building2, CalendarDays, Images } from 'lucide-react'

import { useCountUp } from '@/hooks/use-count-up'
import { programs, programsPendingConfirmation } from '@/data/programs'
import { departments } from '@/data/faculty'
import { events } from '@/data/events'
import { gallery } from '@/data/gallery'

const stats = [
  { icon: BookOpenCheck, value: programs.length + programsPendingConfirmation.length, label: 'Academic Programs' },
  { icon: Building2, value: departments.length, label: 'Departments' },
  { icon: CalendarDays, value: events.length, label: 'Documented Events' },
  { icon: Images, value: gallery.filter((g) => g.src).length, label: 'Campus Photos' },
] as const

function StatItem({ icon: Icon, value, label }: (typeof stats)[number]) {
  const { ref, value: count } = useCountUp(value)

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center text-white">
      <Icon className="size-7 opacity-90" strokeWidth={1.5} />
      <span className="font-heading text-4xl font-bold sm:text-5xl">{count}+</span>
      <span className="text-sm tracking-wide text-white/80 uppercase">{label}</span>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="bg-primary py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
