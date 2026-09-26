import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '@/components/sections/hero'
import { Highlights } from '@/components/sections/highlights'
import { ProgramsPreview } from '@/components/sections/programs-preview'
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
      <ProgramsPreview />
      <AffiliationBanner />
      <CtaContact />
    </>
  )
}
