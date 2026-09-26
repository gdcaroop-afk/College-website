import { createFileRoute } from '@tanstack/react-router'
import { Megaphone } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { EmptyState } from '@/components/shared/empty-state'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EventCard } from '@/components/sections/event-card'
import { events } from '@/data/events'
import { news } from '@/data/news'
import { site } from '@/data/site'

export const Route = createFileRoute('/news')({
  component: NewsPage,
  head: () => ({
    meta: [{ title: `News & Events — ${site.name}` }],
  }),
})

function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Campus Life"
        title="News & Events"
        description="A record of recent ceremonies, seminars and activities at the college, illustrated with real photos from campus."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-heading text-foreground mb-6 text-center text-xl font-semibold">
          Announcements
        </h3>
        {news.length === 0 ? (
          <EmptyState
            icon={Megaphone}
            title="No written announcements yet"
            description="Formal announcements (admission dates, exam schedules, etc.) will be posted here once confirmed by the college office."
          />
        ) : (
          <div className="flex flex-col gap-4">
            {news.map((item) => (
              <Card key={item.id}>
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle>{item.title}</CardTitle>
                  <Badge variant="secondary">{item.category}</Badge>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p className="mb-1 text-xs">{item.date}</p>
                  <p>{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
