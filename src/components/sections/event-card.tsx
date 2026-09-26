import { CalendarDays } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import type { EventItem } from '@/data/events'

export function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="border-border bg-card flex flex-col overflow-hidden rounded-lg border shadow-sm">
      <div className="relative aspect-video w-full overflow-hidden">
        <img src={event.image} alt={event.title} className="size-full object-cover" />
        <Badge variant="accent" className="absolute top-3 left-3">
          {event.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        {event.date ? (
          <span className="text-primary flex items-center gap-1.5 text-xs font-semibold">
            <CalendarDays className="size-3.5" />
            {event.date}
          </span>
        ) : null}
        <h3 className="font-heading text-foreground text-base font-semibold">{event.title}</h3>
        <p className="text-muted-foreground text-sm">{event.summary}</p>
      </div>
    </div>
  )
}
