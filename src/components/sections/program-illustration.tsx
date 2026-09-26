import { BookOpen, Cpu, FlaskConical, Languages, GraduationCap } from 'lucide-react'

import { cn } from '@/lib/utils'

type Kind = 'arts' | 'science' | 'computer' | 'english' | 'general'

function kindOf(title: string): Kind {
  if (/computer science|ics/i.test(title)) return 'computer'
  if (/pre-medical/i.test(title)) return 'science'
  if (/english/i.test(title)) return 'english'
  if (/associate|f\.a\.|arts/i.test(title)) return 'arts'
  return 'general'
}

const config: Record<Kind, { icon: typeof BookOpen; from: string; to: string }> = {
  arts: { icon: GraduationCap, from: 'from-primary', to: 'to-primary/60' },
  science: { icon: FlaskConical, from: 'from-primary/90', to: 'to-accent/70' },
  computer: { icon: Cpu, from: 'from-primary', to: 'to-primary/70' },
  english: { icon: Languages, from: 'from-primary/80', to: 'to-primary/50' },
  general: { icon: BookOpen, from: 'from-primary', to: 'to-primary/60' },
}

/**
 * Self-generated (not photographic) illustration panel for a program card:
 * a colored gradient in the site's own palette with a large subject icon and
 * a faint repeating watermark pattern, in place of a stock/generic photo.
 */
export function ProgramIllustration({ title, className }: { title: string; className?: string }) {
  const { icon: Icon, from, to } = config[kindOf(title)]

  return (
    <div className={cn('relative flex items-center justify-center bg-linear-to-br', from, to, className)}>
      <div className="absolute inset-0 grid grid-cols-6 gap-4 p-4 opacity-10">
        {Array.from({ length: 24 }).map((_, i) => (
          <Icon key={i} className="size-full text-white" strokeWidth={1} />
        ))}
      </div>
      <Icon className="relative size-16 text-white drop-shadow-lg" strokeWidth={1.5} />
    </div>
  )
}
