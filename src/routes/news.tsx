import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, Clock, MapPin, X, BookOpen } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'
import { EventCard } from '@/components/sections/event-card'
import { events, type EventItem } from '@/data/events'
import { site } from '@/data/site'

export const Route = createFileRoute('/news')({
  component: NewsPage,
  head: () => ({
    meta: [{ title: `News & Events — ${site.name}` }],
  }),
})

function EventModal({
  event,
  onClose,
}: {
  event: EventItem
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card text-card-foreground border-border relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-background/80 hover:bg-muted text-foreground absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full border border-border shadow-xs transition-colors"
          aria-label="Close dialog"
        >
          <X className="size-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <img
            src={event.image}
            alt={event.title}
            className="size-full object-cover"
          />
          <Badge variant="accent" className="absolute top-4 left-4 text-xs shadow-md">
            {event.category}
          </Badge>
        </div>

        {/* Modal Content */}
        <div className="space-y-5 p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-primary mb-2">
              {event.date && (
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-4" />
                  {event.date}
                </span>
              )}
              {event.time && (
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="size-4 text-primary" />
                  {event.time}
                </span>
              )}
              {event.venue && (
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {event.venue}
                </span>
              )}
            </div>
            <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
              {event.title}
            </h2>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground">
              <BookOpen className="size-5 text-primary" />
              Event Description & Coverage
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify">
              {event.description ?? event.summary}
            </p>
          </div>

          {/* Close CTA */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-sm"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function NewsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 space-y-12">
      <SectionHeading
        eyebrow="Campus Life"
        title="News & Events"
        description="A record of recent ceremonies, sports galas, awareness seminars and academic activities at the college, illustrated with real campus photographs."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onViewDetails={(item) => setSelectedEvent(item)}
          />
        ))}
      </div>

      {/* Event Modal Popup */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  )
}
