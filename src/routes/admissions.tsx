import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { applicationSteps, bachelorRequirements, intermediateRequirements } from '@/data/admissions'
import classroomPhoto from '@/assets/studies.jpg'
import campusPhoto from '@/assets/2.jpg'

export const Route = createFileRoute('/admissions')({
  component: AdmissionsPage,
  head: () => ({
    meta: [{ title: `Admissions — ${site.name}` }],
  }),
})

function AdmissionsPage() {
  return (
    <div className="flex flex-col gap-16 py-14">
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Admissions"
          title="Admissions"
          description="Admission at Govt. Graduate College Aroop, Gujranwala is merit-based and handled directly through the college office. Forms, current admission dates and eligibility details are available on request — the process below reflects how it is generally handled."
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-primary text-3xl font-bold text-balance sm:text-4xl">
              Begin Your Academic Journey
            </h2>
            <p className="text-foreground/85 mt-4 text-base leading-relaxed text-pretty">
              Discover a supportive academic environment where discipline meets
              opportunity. Our admissions process is designed to welcome students
              from Aroop and the surrounding Gujranwala area into a structured,
              affordable path through Intermediate and BS-level education.
            </p>
          </div>
          <img
            src={classroomPhoto}
            alt="A classroom lecture in progress"
            className="aspect-4/3 w-full rounded-xl object-cover shadow-sm"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Application Process" description="How admission is generally handled at the college." />
        <div className="mt-12 grid gap-8 sm:grid-cols-4">
          {applicationSteps.map((item, i) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              {i < applicationSteps.length - 1 ? (
                <span className="bg-border absolute top-6 left-1/2 hidden h-px w-full sm:block" />
              ) : null}
              <span className="border-primary text-primary bg-background relative z-10 flex size-12 items-center justify-center rounded-full border-2 font-heading font-bold">
                {item.step}
              </span>
              <h3 className="font-heading text-foreground mt-4 mb-1.5 text-base font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-primary text-2xl font-bold">Admission Requirements</h2>

            <h3 className="font-heading text-foreground mt-6 mb-3 text-sm font-semibold tracking-wide uppercase">
              Intermediate (F.A. / F.Sc. / ICS)
            </h3>
            <ul className="flex flex-col gap-2.5">
              {intermediateRequirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
                  <span className="text-foreground/85">{req}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-foreground mt-8 mb-3 text-sm font-semibold tracking-wide uppercase">
              Bachelor's (BS)
            </h3>
            <ul className="flex flex-col gap-2.5">
              {bachelorRequirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
                  <span className="text-foreground/85">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-primary text-2xl font-bold">Fee Structure</h2>
            <div className="border-border bg-card mt-6 overflow-hidden rounded-lg border shadow-sm">
              <div className="bg-muted/60 px-5 py-3">
                <span className="text-foreground text-sm font-semibold">Intermediate Programs</span>
                <span className="text-muted-foreground block text-xs">Per academic year</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-foreground/85 text-sm">College fee</span>
                <span className="text-primary font-heading text-lg font-bold">≈ Rs. 2,000</span>
              </div>
            </div>
            <div className="border-border bg-card mt-4 overflow-hidden rounded-lg border border-dashed shadow-sm">
              <div className="bg-muted/60 px-5 py-3">
                <span className="text-foreground text-sm font-semibold">Bachelor's (BS) Programs</span>
                <span className="text-muted-foreground block text-xs">Per academic year</span>
              </div>
              <div className="px-5 py-4">
                <span className="text-muted-foreground text-sm italic">
                  To be confirmed with the college office.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-primary text-2xl font-bold">Connect with Admissions</h2>
            <p className="text-foreground/85 mt-3 text-base leading-relaxed text-pretty">
              Have questions about applying? The college office can help directly —
              reach out by phone, email, or in person.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href={`tel:${site.contact.phones[0]?.number}`}
                className="border-border bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm"
              >
                <Phone className="text-primary size-5 shrink-0" />
                <span className="text-foreground/85 text-sm">{site.contact.phones[0]?.number}</span>
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="border-border bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm"
              >
                <Mail className="text-primary size-5 shrink-0" />
                <span className="text-foreground/85 text-sm">{site.contact.email}</span>
              </a>
              <div className="border-border bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm">
                <MapPin className="text-primary size-5 shrink-0" />
                <span className="text-foreground/85 text-sm">
                  {site.address.line1}, {site.address.line2}
                </span>
              </div>
            </div>
          </div>

          <div>
            <img
              src={campusPhoto}
              alt="Govt. Graduate College Aroop, Gujranwala campus"
              className="aspect-video w-full rounded-xl object-cover shadow-sm"
            />
            <h3 className="font-heading text-foreground mt-4 text-lg font-semibold">Visit the Campus</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Prospective students are welcome to visit the college office in person
              during working hours — contact us beforehand to confirm timing.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-3xl justify-center px-4 sm:px-6">
        <Button asChild>
          <Link to="/academics">View Academic Programs</Link>
        </Button>
      </div>
    </div>
  )
}
