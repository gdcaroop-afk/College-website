import { CalendarDays, ArrowRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import type { EventItem } from '@/data/events'

export function EventCard({
  event,
  onViewDetails,
}: {
  event: EventItem
  onViewDetails?: (event: EventItem) => void
}) {
  return (
    <div className="bg-card group flex flex-col justify-between overflow-hidden rounded-2xl shadow-2xs border border-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge variant="accent" className="absolute top-3 left-3 shadow-md text-xs">
            {event.category}
          </Badge>
        </div>
        <div className="flex flex-col gap-2 p-5 text-center items-center">
          {event.date ? (
            <span className="text-primary flex items-center justify-center gap-1.5 text-xs font-semibold">
              <CalendarDays className="size-3.5" />
              {event.date}
            </span>
          ) : null}
          <h3 className="font-heading text-foreground group-hover:text-primary text-base font-bold transition-colors text-center">
            {event.title}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed text-center line-clamp-3">
            {event.summary}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 mt-2">
        <button
          onClick={() => onViewDetails?.(event)}
          className="w-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
        >
          <span>View Details</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}
