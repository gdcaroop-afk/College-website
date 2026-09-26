import { ShieldCheck } from 'lucide-react'

import { site } from '@/data/site'

export function AffiliationBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="border-border bg-card flex flex-col items-start gap-4 rounded-lg border p-6 shadow-sm sm:flex-row sm:items-center">
        <span className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-full">
          <ShieldCheck className="size-6" />
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-foreground font-semibold">
            Affiliated with the {site.affiliation.university}
          </h3>
          <p className="text-muted-foreground text-sm text-pretty">
            {site.affiliation.note}{' '}
            <a
              href={site.affiliation.universityUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary font-medium underline underline-offset-2"
            >
              View official UOG affiliation list
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
