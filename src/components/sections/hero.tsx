import { Link } from '@tanstack/react-router'
import { ArrowRight, MapPin } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import heroBackground from '@/assets/Hero_section_background.jpg'

export function Hero() {
  return (
    <section className="border-border relative overflow-hidden border-b">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="from-background via-background/85 to-background/40 absolute inset-0 bg-linear-to-t" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 sm:py-20">
        <div className="flex flex-col gap-3">
          <span className="bg-primary text-primary-foreground mx-auto w-fit rounded-full px-4 py-1 text-sm font-semibold shadow-sm">
            {site.governance.department}
          </span>
          <h1 className="text-primary font-heading max-w-2xl text-2xl leading-tight font-bold text-balance sm:text-3xl">
            {site.name}
          </h1>
          <p className="text-muted-foreground mx-auto flex max-w-xl items-center justify-center gap-1.5 text-sm">
            <MapPin className="size-4 shrink-0" />
            {site.address.line1}, {site.address.line2}
          </p>
          <p className="text-foreground/80 mx-auto max-w-2xl text-base text-pretty">
            A public sector college affiliated with the {site.affiliation.university},
            offering intermediate and bachelor's programs in Arts, Science, Computer
            Science and English.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link to="/academics">
              Explore Programs
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/gallery">Campus Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
