import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { GalleryGrid } from '@/components/sections/gallery-grid'
import { Button } from '@/components/ui/button'

export function CampusLife() {
  return (
    <section className="bg-muted/40 border-border border-y py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Student Life"
          title="Campus Life"
          description="Labs, classrooms, sports and campus activities — real photos from the college."
        />

        <div className="mt-10">
          <GalleryGrid limit={6} className="sm:grid-cols-3 lg:grid-cols-6" />
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
