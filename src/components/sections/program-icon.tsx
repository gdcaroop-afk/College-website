import { BookOpen, Cpu, FlaskConical, GraduationCap, Languages } from 'lucide-react'

export function ProgramIcon({ title, className }: { title: string; className?: string }) {
  if (/computer science/i.test(title)) return <Cpu className={className} />
  if (/english/i.test(title)) return <Languages className={className} />
  if (/pre-medical/i.test(title)) return <FlaskConical className={className} />
  if (/ics/i.test(title)) return <Cpu className={className} />
  if (/associate|arts/i.test(title)) return <GraduationCap className={className} />
  return <BookOpen className={className} />
}
