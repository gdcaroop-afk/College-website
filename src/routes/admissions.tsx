import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { openGmailCompose, validateInquiry } from '@/lib/inquiry'
import { programs } from '@/data/programs'
import { applicationSteps, bachelorRequirements, intermediateRequirements } from '@/data/admissions'
import campusPhoto from '@/assets/2.jpg'

export const Route = createFileRoute('/admissions')({
  component: AdmissionsPage,
  head: () => ({
    meta: [{ title: `Admissions — ${site.name}` }],
  }),
})

function InquiryForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', program: '', message: '', website: '' })
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = validateInquiry({
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
      honeypot: values.website,
    })
    if (!result.ok) {
      setError(result.error)
      return
    }
    setError('')
    const subject = `Admission Inquiry from ${values.name || 'Website Visitor'}`
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Program of Interest: ${values.program || 'Not specified'}`,
      '',
      values.message,
    ].join('\n')
    openGmailCompose(site.contact.email, subject, body)
  }

  const inputClass =
    'h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50'

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Full Name*"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={inputClass}
        />
        <input
          required
          type="email"
          placeholder="Email Address*"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          placeholder="Phone Number"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          className={inputClass}
        />
        <select
          value={values.program}
          onChange={(e) => setValues((v) => ({ ...v, program: e.target.value }))}
          className={inputClass}
        >
          <option value="">Program Interest</option>
          {programs.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
        </select>
      </div>
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.website}
        onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <textarea
        placeholder="Tell us about your interests and goals..."
        rows={4}
        value={values.message}
        onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        className="border-input bg-background focus-visible:border-ring focus-visible:ring-ring/50 w-full resize-none rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-1"
      />
      {error && (
        <p role="alert" className="text-destructive text-sm font-medium">
          {error}
        </p>
      )}
      <Button type="submit" className="w-fit">
        Send Inquiry
      </Button>
      <p className="text-muted-foreground text-xs">
        Your message is checked first, then Gmail opens with it addressed to the college — the
        site itself doesn't store or send anything.
      </p>
    </form>
  )
}

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

            {/* Intermediate Fee */}
            <div className="border-border bg-card mt-6 overflow-hidden rounded-lg border shadow-sm">
              <div className="bg-muted/60 px-5 py-3">
                <span className="text-foreground text-sm font-semibold">Intermediate Programs</span>
                <span className="text-muted-foreground block text-xs">Per academic year</span>
              </div>
              <div className="divide-border divide-y">
                <div className="flex items-center justify-between px-5 py-3">
                  <span className="text-foreground/85 text-sm">College fee</span>
                  <span className="text-primary font-heading text-base font-bold">Rs. 2,000 – 3,000</span>
                </div>
                <div className="flex items-center justify-between px-5 py-3">
                  <span className="text-foreground/85 text-sm">Board fee</span>
                  <span className="text-muted-foreground text-sm">Separate (per board schedule)</span>
                </div>
              </div>
            </div>

            {/* BS Fee */}
            <div className="border-border bg-card mt-4 overflow-hidden rounded-lg border shadow-sm">
              <div className="bg-muted/60 px-5 py-3">
                <span className="text-foreground text-sm font-semibold">Bachelor's (BS) Programs</span>
                <span className="text-muted-foreground block text-xs">Per academic year</span>
              </div>
              <div className="divide-border divide-y">
                <div className="flex items-center justify-between px-5 py-3">
                  <span className="text-foreground/85 text-sm">College fee</span>
                  <span className="text-primary font-heading text-base font-bold">Rs. 3,000 – 4,000</span>
                </div>
                <div className="flex items-center justify-between px-5 py-3">
                  <span className="text-foreground/85 text-sm">University fee</span>
                  <span className="text-muted-foreground text-sm">Separate (per UOG schedule)</span>
                </div>
              </div>
            </div>

            {/* DIT Fee */}
            <div className="border-border bg-card mt-4 overflow-hidden rounded-lg border shadow-sm">
              <div className="bg-muted/60 px-5 py-3">
                <span className="text-foreground text-sm font-semibold">DIT (2-Year Diploma)</span>
                <span className="text-muted-foreground block text-xs">Per semester</span>
              </div>
              <div className="divide-border divide-y">
                <div className="flex items-center justify-between px-5 py-3">
                  <span className="text-foreground/85 text-sm">Fee structure</span>
                  <span className="text-muted-foreground text-sm">As determined by PBTE</span>
                </div>
              </div>
              <p className="text-muted-foreground px-5 pb-3 text-xs">
                The Diploma in Information Technology fee structure is set by the
                Punjab Board of Technical Education (PBTE), not the college — confirm
                the current schedule at the college office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-primary text-xl font-bold">Connect with Admissions</h2>
            <p className="text-foreground/85 mt-2 text-sm leading-relaxed">
              Have questions about applying? Send us a message directly, or reach
              out by phone, email, or in person.
            </p>

            <InquiryForm />

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a href={`tel:${site.contact.phones[0]?.number}`} className="text-primary flex items-center gap-1.5">
                <Phone className="size-3.5" />
                {site.contact.phones[0]?.number}
              </a>
              <a href={`mailto:${site.contact.email}`} className="text-primary flex items-center gap-1.5">
                <Mail className="size-3.5" />
                {site.contact.email}
              </a>
              <span className="text-muted-foreground flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                {site.address.line1}, {site.address.line2}
              </span>
            </div>
          </div>

          <div>
            <img
              src={campusPhoto}
              alt="Govt. Graduate College Aroop, Gujranwala campus"
              loading="lazy"
              decoding="async"
              className="aspect-video w-full rounded-xl object-cover shadow-sm"
            />
            <h3 className="font-heading text-foreground mt-3 text-base font-semibold">Visit the Campus</h3>
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
