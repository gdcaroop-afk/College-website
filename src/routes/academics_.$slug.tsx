import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, BookOpen, Briefcase, CheckCircle2, ChevronDown, Clock, ExternalLink, GraduationCap, HelpCircle, Star, Users } from 'lucide-react'
import { useState } from 'react'
import { programs, programsPendingConfirmation } from '@/data/programs'
import { programDetails } from '@/data/program-details'
import { site } from '@/data/site'

const allPrograms = [...programs, ...programsPendingConfirmation]

export const Route = createFileRoute('/academics_/$slug')({
  component: ProgramDetailPage,
  loader: ({ params }) => {
    const program = allPrograms.find((p) => p.slug === params.slug)
    if (!program) throw notFound()
    return { program, detail: programDetails[params.slug] }
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.program.title} — ${site.name}` }] : [],
  }),
})

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-border/60 border-b last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="font-sans flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="font-sans pb-4 text-sm text-foreground/80 text-justify leading-relaxed">{answer}</p>
      )}
    </div>
  )
}

function SectionHeading({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
        <Icon className="size-4 text-primary" />
      </span>
      <h2 className="font-heading text-foreground text-lg font-bold">{title}</h2>
    </div>
  )
}

function ProgramDetailPage() {
  const { program, detail } = Route.useLoaderData()

  return (
    <div>
      {/* Full-width Breadcrumb Bar */}
      <section className="bg-muted/40 border-border/80 border-y py-2.5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <Link to="/academics" className="text-primary hover:underline font-medium">
              Academics
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-semibold truncate">{program.title}</span>
          </nav>
        </div>
      </section>

      <article className="font-sans mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {/* Navigation buttons */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="bg-background border border-border text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground dark:bg-card dark:hover:bg-primary shadow-xs px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 text-xs font-semibold transition-all duration-200"
          >
            <ArrowLeft className="size-3.5" />
            <span>Home</span>
          </Link>
          <Link
            to="/academics"
            className="bg-background border border-border text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground dark:bg-card dark:hover:bg-primary shadow-xs px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 text-xs font-semibold transition-all duration-200"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Academics</span>
          </Link>
          <span className="bg-accent/20 text-accent-foreground px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {program.level}
          </span>
        </div>

      {/* Title + tagline */}
      <h1 className="font-heading text-primary text-3xl font-extrabold tracking-tight sm:text-4xl">
        {program.title}
      </h1>
      {detail?.tagline && (
        <p className="font-sans mt-1.5 text-base font-semibold text-primary/70 italic">
          {detail.tagline}
        </p>
      )}
      <p className="font-sans text-muted-foreground mt-1 text-sm font-medium">{site.governance.department}</p>

      <span className="font-sans text-muted-foreground mt-3 flex items-center gap-1.5 text-xs font-medium">
        <Clock className="size-3.5 text-primary" />
        {program.duration}
      </span>

      {program.subjects ? (
        <div className="bg-secondary border-border/60 mt-4 rounded-xl border p-3.5 text-xs font-sans">
          <span className="font-semibold text-foreground">Subjects Offered:</span>{' '}
          <span className="text-muted-foreground">{program.subjects.join(', ')}</span>
        </div>
      ) : null}

      {detail ? (
        <div className="mt-8 flex flex-col gap-10">

          {/* Overview */}
          <section>
            <SectionHeading icon={BookOpen} title="Program Overview" />
            <p className="font-sans text-foreground/90 text-justify text-base leading-relaxed">
              {detail.overview}
            </p>
          </section>

          {/* Facts */}
          <section>
            <SectionHeading icon={Star} title="Program Information" />
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.facts.map((fact) => (
                <div key={fact.label} className="border-border/80 bg-card rounded-xl border p-4 shadow-xs">
                  <span className="font-sans text-primary text-xs font-semibold uppercase tracking-wide">
                    {fact.label}
                  </span>
                  <p className="font-sans text-foreground mt-1 text-sm font-medium text-justify">{fact.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          {detail.whyChoose && detail.whyChoose.length > 0 && (
            <section>
              <SectionHeading icon={CheckCircle2} title="Why Choose This Program?" />
              <ul className="grid gap-2 sm:grid-cols-2">
                {detail.whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground/85">
                    <span className="mt-0.5 size-4 shrink-0 rounded-full bg-secondary flex items-center justify-center">
                      <CheckCircle2 className="size-3 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* What You Will Learn */}
          {detail.whatYouWillLearn && detail.whatYouWillLearn.length > 0 && (
            <section>
              <SectionHeading icon={GraduationCap} title="What You Will Learn" />
              <div className="grid gap-3 sm:grid-cols-2">
                {detail.whatYouWillLearn.map((item) => (
                  <div key={item.title} className="border-border/70 bg-card rounded-xl border p-4 shadow-xs">
                    <p className="font-sans text-primary text-xs font-bold uppercase tracking-wide mb-1">
                      {item.title}
                    </p>
                    <p className="font-sans text-foreground/80 text-sm text-justify leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Curriculum Breakdown */}
          {detail.breakdown && (
            <section>
              <SectionHeading icon={BookOpen} title="Curriculum Breakdown" />
              <div className="bg-card border-border/80 rounded-xl border p-5 shadow-xs">
                <div className="divide-border/60 divide-y flex flex-col">
                  {detail.breakdown.map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-2.5 font-sans text-xs sm:text-sm">
                      <span className="text-foreground/80">{row.label}</span>
                      <span className="text-primary font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Career Opportunities */}
          {detail.careerOpportunities && detail.careerOpportunities.length > 0 && (
            <section>
              <SectionHeading icon={Briefcase} title="Career Opportunities" />
              <div className="flex flex-wrap gap-2">
                {detail.careerOpportunities.map((career) => (
                  <span
                    key={career}
                    className="font-sans bg-secondary border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Further Studies */}
          {detail.furtherStudies && detail.furtherStudies.length > 0 && (
            <section>
              <SectionHeading icon={GraduationCap} title="Further Study Opportunities" />
              <div className="flex flex-wrap gap-2">
                {detail.furtherStudies.map((s) => (
                  <span
                    key={s}
                    className="font-sans bg-accent/15 border border-accent/30 text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {(detail.technicalSkills || detail.professionalSkills) && (
            <section>
              <SectionHeading icon={Star} title="Skills You Will Develop" />
              <div className="grid gap-4 sm:grid-cols-2">
                {detail.technicalSkills && (
                  <div className="border-border/70 bg-card rounded-xl border p-4 shadow-xs">
                    <p className="font-sans text-xs font-bold uppercase tracking-wide text-primary mb-2">
                      Technical Skills
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {detail.technicalSkills.map((s) => (
                        <li key={s} className="flex items-center gap-2 font-sans text-sm text-foreground/80">
                          <span className="size-1.5 rounded-full bg-primary shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {detail.professionalSkills && (
                  <div className="border-border/70 bg-card rounded-xl border p-4 shadow-xs">
                    <p className="font-sans text-xs font-bold uppercase tracking-wide text-accent-foreground mb-2">
                      Professional Skills
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {detail.professionalSkills.map((s) => (
                        <li key={s} className="flex items-center gap-2 font-sans text-sm text-foreground/80">
                          <span className="size-1.5 rounded-full bg-accent shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Who Should Choose */}
          {detail.whoShouldChoose && detail.whoShouldChoose.length > 0 && (
            <section>
              <SectionHeading icon={Users} title="Who Should Choose This Program?" />
              <div className="bg-card border-border/70 rounded-xl border p-5 shadow-xs">
                <p className="font-sans text-sm font-semibold text-foreground mb-3">This program is ideal for students who:</p>
                <ul className="flex flex-col gap-2">
                  {detail.whoShouldChoose.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground/80">
                      <span className="mt-1 size-4 shrink-0 rounded-full bg-secondary flex items-center justify-center">
                        <CheckCircle2 className="size-3 text-primary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* FAQs */}
          {detail.faqs && detail.faqs.length > 0 && (
            <section>
              <SectionHeading icon={HelpCircle} title="Frequently Asked Questions" />
              <div className="bg-card border-border/70 rounded-xl border px-5 shadow-xs">
                {detail.faqs.map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Sources */}
          <div className="border-border/60 border-t pt-6">
            <h2 className="font-sans text-muted-foreground mb-3 text-xs font-semibold uppercase tracking-wider">
              Official Reference Sources
            </h2>
            <ul className="flex flex-col gap-2">
              {detail.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-primary hover:text-primary/80 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium underline underline-offset-2"
                  >
                    {source.label}
                    <ExternalLink className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </article>
    </div>
  )
}

