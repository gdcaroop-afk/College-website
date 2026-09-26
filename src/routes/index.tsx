import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '@/components/sections/hero'
import { Highlights } from '@/components/sections/highlights'
import { InstitutionalOverview } from '@/components/sections/institutional-overview'
import { ProgramsPreview } from '@/components/sections/programs-preview'
import { CampusLife } from '@/components/sections/campus-life'
import { EventsPreview } from '@/components/sections/events-preview'
import { AffiliationBanner } from '@/components/sections/affiliation-banner'
import { CtaContact } from '@/components/sections/cta-contact'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: 'Govt. Graduate College Aroop, Gujranwala — Official Website' },
      {
        name: 'description',
        content:
          'Official website of Govt. Graduate College Aroop, Gujranwala — a public sector college affiliated with the University of Gujrat, offering Intermediate and BS programs.',
      },
    ],
  }),
})

function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <InstitutionalOverview />
      <ProgramsPreview />
      <CampusLife />
      <EventsPreview />
      <AffiliationBanner />
      <CtaContact />
    </>
  )
}
