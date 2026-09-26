import { BookOpenCheck, GraduationCap, UserRoundCheck, Users } from 'lucide-react'

import { useCountUp } from '@/hooks/use-count-up'
import { programs } from '@/data/programs'

const intermediateCount = programs.filter((p) => !p.level.startsWith('Bachelor')).length
const bachelorCount = programs.filter((p) => p.level.startsWith('Bachelor')).length

const stats = [
  { icon: BookOpenCheck, value: intermediateCount, suffix: '', label: 'Intermediate Programs', pending: false },
  { icon: GraduationCap, value: bachelorCount, suffix: '', label: "Bachelor's Programs", pending: false },
  { icon: Users, value: 500, suffix: '+', label: 'Total Students', pending: false },
  // TODO_CONFIRM: faculty count not yet provided — placeholder until confirmed.
  { icon: UserRoundCheck, value: 0, suffix: '', label: 'Faculty Members', pending: true },
] as const

function StatItem({ icon: Icon, value, suffix, label, pending }: (typeof stats)[number]) {
  const { ref, value: count } = useCountUp(value)

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center text-white">
      <Icon className="size-7 opacity-90" strokeWidth={1.5} />
      <span className="font-heading text-4xl font-bold sm:text-5xl">
        {pending ? 'TBD' : `${count}${suffix}`}
      </span>
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
