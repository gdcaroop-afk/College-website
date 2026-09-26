import type { LucideIcon } from 'lucide-react'

export function EmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="border-border bg-muted/40 flex flex-col items-center gap-3 rounded-lg border border-dashed px-6 py-14 text-center">
      <Icon className="text-muted-foreground size-10" strokeWidth={1.5} />
      <h3 className="font-heading text-foreground text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground max-w-md text-sm">{description}</p>
    </div>
  )
}
