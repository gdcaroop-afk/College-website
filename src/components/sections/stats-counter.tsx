import { BookOpenCheck, GraduationCap, Users, Award, BookBookmark, Laptop } from 'lucide-react'

import { useCountUp } from '@/hooks/use-count-up'

const stats = [
  { icon: Users, value: 400, suffix: '+', label: 'Total Students' },
  { icon: GraduationCap, value: 123, suffix: '', label: 'Enrolled in Bachelors' },
  { icon: Award, value: 27, suffix: '', label: 'Total Graduates' },
  { icon: BookOpenCheck, value: 7, suffix: '', label: 'Intermediate Tracks' },
  { icon: BookBookmark, value: 4, suffix: '', label: "Bachelor's Programs" },
  { icon: Laptop, value: 2, suffix: '', label: '2-Year Diplomas' },
] as const

function StatItem({ icon: Icon, value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: count } = useCountUp(value)

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5 text-center text-white p-2">
      <Icon className="size-5 opacity-90" strokeWidth={1.75} />
      <span className="font-heading text-2xl sm:text-3xl font-extrabold">
        {count}{suffix}
      </span>
      <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white/85 uppercase leading-tight">
        {label}
      </span>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="bg-primary py-8 border-y border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
