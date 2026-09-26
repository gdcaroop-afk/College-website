import { createFileRoute } from '@tanstack/react-router'

import { SectionHeading } from '@/components/shared/section-heading'
import { GalleryGrid } from '@/components/sections/gallery-grid'
import { site } from '@/data/site'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
  head: () => ({
    meta: [{ title: `Campus Gallery & Student Life — ${site.name}` }],
  }),
})

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 space-y-10">
      <SectionHeading
        eyebrow="Campus & Student Life"
        title="Campus Gallery"
        description="Explore dedicated photo collections featuring Graduates & Alumni, Color Day Cultural Festivals, Sports Galas, Health Seminars, and Academic Facilities at Govt. Graduate College Aroop."
      />

      <div className="mt-8">
        <GalleryGrid filterable />
      </div>

      <div className="pt-8 border-t border-border/60 text-center">
        <p className="text-muted-foreground text-xs sm:text-sm">
          Follow the college on{' '}
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold hover:underline"
          >
            Facebook
          </a>{' '}
          and{' '}
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold hover:underline"
          >
            Instagram
          </a>{' '}
          for the latest campus photos, student achievements, and event coverage.
        </p>
      </div>
    </div>
  )
}
