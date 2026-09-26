import { BookOpen, Cpu, FlaskConical, GraduationCap, Languages, Calculator, Building2, Laptop } from 'lucide-react'

export function ProgramIcon({ title, className }: { title: string; className?: string }) {
  if (/computer science|bs cs|dit|ics/i.test(title)) return <Cpu className={className} />
  if (/english/i.test(title)) return <Languages className={className} />
  if (/pre-medical|chemistry/i.test(title)) return <FlaskConical className={className} />
  if (/pre-engineering/i.test(title)) return <Calculator className={className} />
  if (/commerce|icom|dcom/i.test(title)) return <Building2 className={className} />
  if (/it/i.test(title)) return <Laptop className={className} />
  if (/arts|fa/i.test(title)) return <GraduationCap className={className} />
  return <BookOpen className={className} />
}
