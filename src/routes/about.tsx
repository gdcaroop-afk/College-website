import { createFileRoute } from '@tanstack/react-router'
import { Target, Eye, Lightbulb, Users2, TrendingUp } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { GalleryGrid } from '@/components/sections/gallery-grid'
import { site } from '@/data/site'
import { principal } from '@/data/principal'
import principalPhoto from '@/assets/principal-photo.png'
import campusFacilitiesPhoto from '@/assets/3.jpg'

const coreValues = [
  {
    number: '01',
    title: 'Discipline',
    description:
      'A structured, well-supervised academic environment — regular classes, attendance and a focus on fundamentals.',
  },
  {
    number: '02',
    title: 'Accessibility',
    description:
      'An affordable public sector education, open to students from Aroop and the surrounding Gujranwala area.',
  },
  {
    number: '03',
    title: 'Community',
    description: 'A campus where students are known individually by faculty, not treated as a number.',
  },
] as const

const leadershipPrinciples = [
  { icon: Lightbulb, title: 'Discipline-first teaching' },
  { icon: Users2, title: 'Student-centred practices' },
  { icon: TrendingUp, title: 'Continuous improvement mindset' },
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
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {coreValues.map((value) => (
            <div key={value.number}>
              <span className="text-border font-heading block text-6xl font-bold">{value.number}</span>
              <h3 className="font-heading text-foreground mt-2 mb-2 text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div className="relative">
            <img
              src={campusFacilitiesPhoto}
              alt="Campus Facilities"
              className="aspect-4/3 w-full rounded-xl object-cover shadow-sm"
            />
            <div className="bg-card absolute -bottom-6 right-6 flex flex-col items-center rounded-xl px-6 py-4 text-center shadow-xl">
              <span className="text-accent font-heading text-3xl font-bold">
                {new Date().getFullYear() - site.foundedYear}+
              </span>
              <span className="text-foreground text-sm font-medium">Years Excellence</span>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Campus"
              title="A Single, Well-Maintained Campus"
              align="left"
            />
            <p className="text-foreground/85 mt-4 text-base leading-relaxed text-pretty">
              The college operates from one main academic block in Aroop, housing
              classrooms, science and computer laboratories, and administrative
              offices — serving intermediate and BS-level students under the{' '}
              {site.governance.department}.
            </p>
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
        <SectionHeading
          title="Our Leadership Philosophy"
          description="The college is run on a simple principle: consistent, hands-on academic supervision produces better results than any single initiative."
        />
        <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
          {leadershipPrinciples.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3 text-center">
              <item.icon className="text-primary size-8" strokeWidth={1.5} />
              <span className="text-foreground max-w-32 text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
