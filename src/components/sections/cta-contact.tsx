import { Link } from '@tanstack/react-router'
import { ArrowRight, MapPin, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

export function CtaContact() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Visit or Get in Touch
        </h2>
        <p className="text-primary-foreground/85 max-w-xl text-lg text-pretty">
          For admissions and general inquiries, reach out to the college office or
          visit the campus in Aroop, Gujranwala.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <span className="flex items-center gap-2">
            <MapPin className="size-4" />
            {site.address.line1}, {site.address.line2}
          </span>
          <span className="flex items-center gap-2">
            <Phone className="size-4" />
            {site.contact.phones[0]?.number}
          </span>
        </div>
        <Button size="lg" variant="accent" asChild>
          <Link to="/contact">
            Contact & Location
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
