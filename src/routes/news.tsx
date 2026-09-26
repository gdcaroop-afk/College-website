import { createFileRoute } from '@tanstack/react-router'
import { Megaphone } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { EmptyState } from '@/components/shared/empty-state'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { news } from '@/data/news'
import { site } from '@/data/site'

export const Route = createFileRoute('/news')({
  component: NewsPage,
  head: () => ({
    meta: [{ title: `News & Announcements — ${site.name}` }],
  }),
})

function NewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Stay Informed"
        title="News & Announcements"
        description="Official announcements, events and achievements will be posted here."
      />

      <div className="mt-10">
        {news.length === 0 ? (
          <EmptyState
            icon={Megaphone}
            title="No announcements yet"
            description="Check back soon, or follow the college's official Facebook page for the latest updates in the meantime."
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
