import { createFileRoute } from '@tanstack/react-router'
import { Landmark, Target, Eye } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { AffiliationBanner } from '@/components/sections/affiliation-banner'
import { site } from '@/data/site'
import { principal } from '@/data/principal'
import principalPhoto from '@/assets/principal-photo.png'
import campusPhoto from '@/assets/Hero_section_background.jpg'
import labPhoto from '@/assets/chemeistry_labs.jpg'
import studentLifePhoto from '@/assets/sport_day_event.jpg'

const aboutCards = [
  { image: campusPhoto, title: 'Our Campus', description: 'The main academic block in Aroop, Gujranwala.' },
  { image: labPhoto, title: 'Academics', description: 'Well-equipped science and computer laboratories.' },
  { image: studentLifePhoto, title: 'Student Life', description: 'Sports, seminars and co-curricular activities.' },
] as const

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

      <section className="mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
        {aboutCards.map((card) => (
          <div
            key={card.title}
            className="bg-card group overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-36 w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-heading text-foreground text-sm font-semibold">{card.title}</h3>
              <p className="text-muted-foreground text-xs">{card.description}</p>
            </div>
          </div>
        ))}
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
        <div className="border-border bg-card flex flex-col items-center gap-4 rounded-lg border p-6 text-center shadow-sm sm:p-8">
          <span className="text-accent-foreground bg-accent/20 w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            Principal's Message
          </span>
          <img
            src={principalPhoto}
            alt={principal.name}
            className="border-primary/20 size-28 rounded-full border-2 object-cover shadow-md"
          />
          <div>
            <h3 className="font-heading text-primary text-xl font-bold">{principal.name}</h3>
            <p className="text-muted-foreground text-sm">{principal.designation}</p>
          </div>
          <p className="text-foreground/85 max-w-2xl text-base leading-relaxed text-pretty">
            Welcome to {site.name}. Our aim is simple: to give every student who
            walks through our doors a disciplined, supportive environment in which
            to build real academic ability — whether in the Arts, Sciences, or
            Computer Studies. We believe in the fundamentals: regular classwork,
            accessible faculty, and a campus where students are known individually,
            not treated as a number. I encourage every student and parent to reach
            out to us directly with any questions about admissions or academics —
            we're glad to help.
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
