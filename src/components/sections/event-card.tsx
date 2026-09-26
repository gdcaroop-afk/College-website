import { CalendarDays } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import type { EventItem } from '@/data/events'

export function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="bg-card group flex flex-col overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge variant="accent" className="absolute top-3 left-3 shadow-md">
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
