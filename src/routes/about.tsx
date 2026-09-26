import { createFileRoute } from '@tanstack/react-router'
import { Landmark, Target, Eye, BookOpenCheck, Users, ShieldCheck } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { AffiliationBanner } from '@/components/sections/affiliation-banner'
import { GalleryGrid } from '@/components/sections/gallery-grid'
import { site } from '@/data/site'
import { principal } from '@/data/principal'
import principalPhoto from '@/assets/principal-photo.png'
import campusFacilitiesPhoto from '@/assets/3.jpg'

const coreValues = [
  {
    number: '01',
    icon: BookOpenCheck,
    title: 'Discipline',
    description:
      'A structured, well-supervised academic environment — regular classes, attendance and a focus on fundamentals.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Accessibility',
    description:
      'An affordable public sector education, open to students from Aroop and the surrounding Gujranwala area.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Community',
    description: 'A campus where students are known individually by faculty, not treated as a number.',
  },
] as const

const leadershipPrinciples = [
  'A structured, discipline-first approach to teaching',
  'Faculty who know their students individually',
  'An open door for admissions and academic questions',
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
        <SectionHeading eyebrow="About Us" title="About the College" />
        <div className="text-foreground/85 mx-auto mt-6 max-w-3xl text-justify text-base leading-relaxed">
          <p>
            {site.name}, founded in {site.foundedYear}, is a public sector college
            located in Aroop, Gujranwala, operating under the{' '}
            {site.governance.department}. The college offers intermediate (F.A.,
            F.Sc. Pre-Medical, ICS) and bachelor's degree (BS) programs, and its
            degree programs are affiliated with the {site.affiliation.university}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <GalleryGrid limit={8} className="sm:grid-cols-4" />
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our Foundation" title="Core Values & Principles" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {coreValues.map((value) => (
            <div key={value.number} className="border-border bg-card rounded-lg border p-6 shadow-sm">
              <span className="text-accent font-heading text-3xl font-bold">{value.number}</span>
              <div className="bg-primary/10 text-primary mt-3 mb-3 flex size-11 items-center justify-center rounded-full">
                <value.icon className="size-5" />
              </div>
              <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl shadow-sm">
          <img
            src={campusFacilitiesPhoto}
            alt="Campus Facilities"
            className="aspect-video w-full object-cover"
          />
          <div className="from-black/70 absolute inset-0 flex items-end bg-linear-to-t to-transparent p-6">
            <span className="text-lg font-semibold text-white">Campus Facilities</span>
          </div>
          <div className="bg-accent text-accent-foreground absolute top-4 right-4 flex flex-col items-center rounded-lg px-4 py-2 text-center shadow-lg">
            <span className="font-heading text-2xl font-bold">
              {new Date().getFullYear() - site.foundedYear}+
            </span>
            <span className="text-xs font-medium tracking-wide uppercase">Years Excellence</span>
          </div>
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
        <h3 className="font-heading text-primary text-2xl font-bold">Our Leadership Philosophy</h3>
        <p className="text-foreground/85 mt-3 text-base leading-relaxed text-pretty">
          The college is run on a simple principle: consistent, hands-on academic
          supervision produces better results than any single initiative. In
          practice, that means:
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {leadershipPrinciples.map((point) => (
            <li key={point} className="text-foreground/85 flex items-start gap-2 text-base">
              <span className="bg-primary mt-2 size-1.5 shrink-0 rounded-full" />
              {point}
            </li>
          ))}
        </ul>
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
