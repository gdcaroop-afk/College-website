import { createFileRoute } from '@tanstack/react-router'
import { Landmark, Mail, MapPin, Phone } from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { MapEmbed } from '@/components/shared/map-embed'
import { site } from '@/data/site'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [{ title: `Contact & Location — ${site.name}` }],
  }),
})

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading eyebrow="Reach Us" title="Contact & Location" />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="border-border bg-card flex items-start gap-3 rounded-lg border p-5 shadow-sm">
            <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
            <div>
              <h3 className="font-heading text-foreground font-semibold">Address</h3>
              <p className="text-muted-foreground text-sm">
                {site.address.line1}, {site.address.line2}
              </p>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary text-sm underline underline-offset-2"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="border-border bg-card flex items-start gap-3 rounded-lg border p-5 shadow-sm">
            <Phone className="text-primary mt-0.5 size-5 shrink-0" />
            <div>
              <h3 className="font-heading text-foreground font-semibold">Phone</h3>
              {site.contact.phones.map((p) => (
                <p key={p.number} className="text-muted-foreground text-sm">
                  {p.number}{' '}
                  <span className="text-muted-foreground/70 text-xs italic">
                    (as listed by {p.source})
                  </span>
                </p>
              ))}
              <p className="text-muted-foreground/70 mt-1 text-xs italic">
                To be confirmed with the college office before final publication.
              </p>
            </div>
          </div>

          <div className="border-border bg-card flex items-start gap-3 rounded-lg border p-5 shadow-sm">
            <Mail className="text-primary mt-0.5 size-5 shrink-0" />
            <div>
              <h3 className="font-heading text-foreground font-semibold">Email</h3>
              <p className="text-muted-foreground text-sm">
                No official public email address found yet — to be added once
                confirmed.
              </p>
            </div>
          </div>

          <div className="border-border bg-card flex items-start gap-3 rounded-lg border p-5 shadow-sm">
            <Landmark className="text-primary mt-0.5 size-5 shrink-0" />
            <div>
              <h3 className="font-heading text-foreground font-semibold">
                Governance
              </h3>
              <p className="text-muted-foreground text-sm">{site.governance.department}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="border-border bg-card text-primary hover:bg-secondary flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium shadow-sm"
            >
              <IconBrandFacebook className="size-4" /> Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="border-border bg-card text-primary hover:bg-secondary flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium shadow-sm"
            >
              <IconBrandInstagram className="size-4" /> Instagram
            </a>
          </div>
        </div>

        <MapEmbed className="border-border h-96 w-full rounded-lg border shadow-sm lg:h-full" />
      </div>
    </div>
  )
}
