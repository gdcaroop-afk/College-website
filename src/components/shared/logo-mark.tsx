import logo from '@/assets/college-logo.jpg'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Govt. Graduate College Aroop, Gujranwala — official seal"
      className={cn('h-12 w-12 rounded-full object-cover', className)}
    />
  )
}
