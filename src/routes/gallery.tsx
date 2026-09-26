import { createFileRoute } from '@tanstack/react-router'

import { SectionHeading } from '@/components/shared/section-heading'
import { GalleryGrid } from '@/components/sections/gallery-grid'
import { site } from '@/data/site'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
  head: () => ({
    meta: [{ title: `Campus Gallery — ${site.name}` }],
  }),
})

function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Campus"
        title="Gallery"
        description="Authentic campus photography is being sourced from the college's official Facebook and Instagram pages and will replace these placeholders."
      />
      <div className="mt-10">
        <GalleryGrid filterable />
      </div>
      <p className="text-muted-foreground mt-6 text-center text-sm">
        Follow the college on{' '}
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-2"
        >
          Facebook
        </a>{' '}
        and{' '}
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-2"
        >
          Instagram
        </a>{' '}
        for the latest campus photos.
      </p>
    </div>
  )
}
