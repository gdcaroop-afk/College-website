import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { EventCard } from '@/components/sections/event-card'
import { Button } from '@/components/ui/button'
import { events } from '@/data/events'

export function EventsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Campus Life"
        title="Recent News & Events"
        description="A look at recent ceremonies, seminars and activities on campus."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.slice(0, 3).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button variant="outline" asChild>
          <Link to="/news">
            View All News & Events
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
