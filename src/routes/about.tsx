import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Landmark, Target, Eye } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { AffiliationBanner } from '@/components/sections/affiliation-banner'
import { site } from '@/data/site'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      {
        name: 'description',
        content: `Learn about ${site.name}, a public sector institution under the ${site.governance.department}.`,
      },
    ],
  }),
})

function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-14">
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Us"
          title="About the College"
          align="left"
        />
        <div className="text-foreground/85 mt-6 flex flex-col gap-4 text-base leading-relaxed text-pretty">
          <p>
            {site.name} is a public sector college located in Aroop, Gujranwala,
            operating under the {site.governance.department}. The college offers
            intermediate (F.A., F.Sc. Pre-Medical, ICS) and bachelor's degree (BS)
            programs, and its degree programs are affiliated with the{' '}
            {site.affiliation.university}.
          </p>
          <p className="text-muted-foreground text-sm italic">
            A fuller institutional history and background will be added here once
            confirmed with the college administration — this section intentionally
            avoids unverified claims about founding dates or past achievements.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
        <div className="border-border bg-card rounded-lg border p-6 shadow-sm">
          <Target className="text-primary mb-3 size-8" />
          <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
            Mission
          </h3>
          <p className="text-muted-foreground text-sm">
            To be confirmed with the Principal's office and published here once
            provided — placeholder reserved so this section is easy to complete.
          </p>
        </div>
        <div className="border-border bg-card rounded-lg border p-6 shadow-sm">
          <Eye className="text-primary mb-3 size-8" />
          <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
            Vision
          </h3>
          <p className="text-muted-foreground text-sm">
            To be confirmed with the Principal's office and published here once
            provided — placeholder reserved so this section is easy to complete.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="border-border bg-muted/40 flex flex-col gap-3 rounded-lg border border-dashed p-6">
          <div className="flex items-center gap-2">
            <BookOpen className="text-primary size-5" />
            <h3 className="font-heading text-foreground font-semibold">
              Principal's Message
            </h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Reserved for the Principal's welcome message — to be added once supplied
            by the college.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="border-border bg-card flex items-start gap-3 rounded-lg border p-6 shadow-sm">
          <Landmark className="text-primary mt-1 size-6 shrink-0" />
          <div className="text-muted-foreground text-sm">
            <span className="text-foreground font-semibold">Governance: </span>
            Operates under the {site.governance.department}.{' '}
            <a
              href={site.governance.hepUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-2"
            >
              View official HED Punjab listing
            </a>
            .
          </div>
        </div>
      </section>

      <AffiliationBanner />
    </div>
  )
}
