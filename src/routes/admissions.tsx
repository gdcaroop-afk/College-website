import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

export const Route = createFileRoute('/admissions')({
  component: AdmissionsPage,
  head: () => ({
    meta: [{ title: `Admissions — ${site.name}` }],
  }),
})

function AdmissionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Admissions"
        title="How to Apply"
        description="Admission dates, forms and eligibility criteria are handled directly by the college office. Contact us or visit in person for the current admission schedule."
      />

      <div className="mt-10 flex flex-col gap-4">
        <div className="border-border bg-card flex items-start gap-3 rounded-lg border p-5 shadow-sm">
          <Phone className="text-primary mt-0.5 size-5 shrink-0" />
          <div>
            <h3 className="font-heading text-foreground font-semibold">Call the College Office</h3>
            <a href={`tel:${site.contact.phones[0]?.number}`} className="text-primary text-sm underline underline-offset-2">
              {site.contact.phones[0]?.number}
            </a>
          </div>
        </div>

        <div className="border-border bg-card flex items-start gap-3 rounded-lg border p-5 shadow-sm">
          <Mail className="text-primary mt-0.5 size-5 shrink-0" />
          <div>
            <h3 className="font-heading text-foreground font-semibold">Email</h3>
            <a href={`mailto:${site.contact.email}`} className="text-primary text-sm underline underline-offset-2">
              {site.contact.email}
            </a>
          </div>
        </div>

        <div className="border-border bg-card flex items-start gap-3 rounded-lg border p-5 shadow-sm">
          <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
          <div>
            <h3 className="font-heading text-foreground font-semibold">Visit in Person</h3>
            <p className="text-muted-foreground text-sm">
              {site.address.line1}, {site.address.line2}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild>
          <Link to="/academics">View Academic Programs</Link>
        </Button>
      </div>
    </div>
  )
}
