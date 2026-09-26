import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-2xl flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-accent-foreground bg-accent/20 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-primary text-3xl font-bold text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground text-base text-pretty">{description}</p>
      ) : null}
    </div>
  )
}
