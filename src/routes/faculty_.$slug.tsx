import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import {
  ArrowLeft,
  Mail,
  Building2,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  BookOpen,
} from 'lucide-react'

import { facultyMembers, type FacultyMember } from '@/data/faculty'
import { site } from '@/data/site'
import { InstitutionLogo } from '@/components/shared/institution-logo'

function findFacultyBySlug(rawSlug: string): FacultyMember | undefined {
  if (!rawSlug) return undefined
  const slug = rawSlug.trim().toLowerCase()
  const normalizedHyphen = slug.replace(/_/g, '-')
  const normalizedUnderscore = slug.replace(/-/g, '_')

  return facultyMembers.find((m) => {
    const memberId = m.id.toLowerCase()
    const memberIdUnderscore = memberId.replace(/-/g, '_')
    const memberNameSlug = m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const memberNameUnderscore = m.name.toLowerCase().replace(/[^a-z0-9]+/g, '_')

    return (
      memberId === slug ||
      memberId === normalizedHyphen ||
      memberIdUnderscore === normalizedUnderscore ||
      memberNameSlug === normalizedHyphen ||
      memberNameUnderscore === normalizedUnderscore ||
      memberId.includes(normalizedHyphen)
    )
  })
}

export const Route = createFileRoute('/faculty_/$slug')({
  component: FacultyPortfolioPage,
  loader: ({ params }) => {
    const member = findFacultyBySlug(params.slug)
    if (!member) throw notFound()
    return { member }
  },
  head: ({ loaderData }) => {
    if (!loaderData?.member) return { meta: [] }
    const { member } = loaderData
    return {
      meta: [
        { title: `${member.name} — Faculty Profile | ${site.name}` },
        {
          name: 'description',
          content: `${member.name}, ${member.designation} at Govt. Graduate College Aroop, Gujranwala. Qualification: ${member.qualification}. Experience: ${member.experience}.`,
        },
        { property: 'og:title', content: `${member.name} — Faculty Profile` },
        { property: 'og:description', content: `${member.designation} - ${member.department}` },
        { property: 'og:image', content: member.photo },
      ],
    }
  },
})

function FacultyPortfolioPage() {
  const { member } = Route.useLoaderData()

  const emails = Array.isArray(member.email)
    ? member.email
    : member.email
      ? [member.email]
      : []

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Full-width Breadcrumb Bar */}
      <section className="bg-muted/40 border-border/80 border-y py-2.5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <Link to="/faculty" className="text-primary hover:underline font-medium">
              Faculty Directory
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-semibold truncate">{member.name}</span>
          </nav>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Navigation Action Bar */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/faculty"
            className="bg-card border border-border text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground shadow-2xs px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 text-xs font-semibold transition-all duration-200"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Faculty Directory</span>
          </Link>
        </div>

        {/* Portfolio Profile Hero Card */}
        <article className="bg-card text-card-foreground border-border/80 overflow-hidden rounded-2xl border shadow-sm">
          {/* Header Banner */}
          <div className="bg-linear-to-r from-primary/15 via-secondary/70 to-accent/15 border-b border-border/70 p-6 sm:p-10">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
              {/* Photo */}
              <div className="relative size-36 shrink-0 overflow-hidden rounded-2xl border-4 border-card shadow-lg sm:size-44 bg-muted/30">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="eager"
                  decoding="async"
                  className="size-full object-cover object-center"
                />
                <span className="bg-primary/95 text-primary-foreground absolute bottom-2 right-2 rounded-md px-2 py-0.5 text-[10px] font-bold shadow-xs">
                  {member.experience}
                </span>
              </div>

              {/* Identity & Badges */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <span className="bg-primary text-primary-foreground rounded-md px-2.5 py-0.5 text-xs font-bold tracking-wide uppercase shadow-2xs">
                    {member.department}
                  </span>
                  <span className="bg-card text-foreground border border-border/80 rounded-md px-2.5 py-0.5 text-xs font-semibold flex items-center gap-1 shadow-2xs">
                    <ShieldCheck className="size-3.5 text-primary" />
                    Verified Faculty
                  </span>
                  {member.bps && (
                    <span className="bg-muted text-muted-foreground border border-border/60 rounded-md px-2 py-0.5 text-xs font-semibold">
                      {member.bps}
                    </span>
                  )}
                  {member.employmentType && (
                    <span className="bg-muted text-muted-foreground border border-border/60 rounded-md px-2 py-0.5 text-xs font-semibold">
                      {member.employmentType}
                    </span>
                  )}
                </div>

                <div>
                  <h1 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                    {member.name}
                  </h1>
                  <p className="font-sans text-base font-semibold text-primary mt-1">
                    {member.designation}
                  </p>
                  <p className="text-muted-foreground text-sm font-medium mt-0.5">
                    {site.name} • {site.governance.department}
                  </p>
                </div>

                {/* Alma Mater institutions */}
                {member.institutions && member.institutions.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-1 md:justify-start">
                    <span className="text-xs font-bold text-muted-foreground">Alma Mater:</span>
                    {member.institutions.map((inst) => (
                      <InstitutionLogo key={inst.shortName} code={inst.shortName} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Academic Qualification */}
            <section className="bg-muted/30 border border-border/70 rounded-xl p-5">
              <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" />
                Highest Academic Qualification
              </h2>
              <p className="font-heading text-lg font-bold text-foreground">
                {member.qualification}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Total Teaching & Academic Experience: {member.experience}
              </p>
            </section>

            {/* Academic Biography */}
            <section>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="size-5 text-primary" />
                Academic Profile & Biography
              </h2>
              <div className="bg-card border border-border/70 rounded-xl p-5 sm:p-6 shadow-2xs">
                <p className="text-foreground/90 leading-relaxed text-justify text-sm sm:text-base whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </section>

            {/* Key Areas of Strength */}
            {member.areasOfStrength && member.areasOfStrength.length > 0 && (
              <section>
                <h2 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="size-5 text-primary" />
                  Key Areas of Strength & Teaching Expertise
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {member.areasOfStrength.map((strength) => (
                    <div
                      key={strength}
                      className="flex items-center gap-3 rounded-xl bg-card border border-border/80 p-3.5 text-sm font-semibold text-foreground shadow-2xs hover:border-primary/50 transition-colors"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Educational Alma Mater & Higher Education Institutions */}
            {member.institutions && member.institutions.length > 0 && (
              <section>
                <h2 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="size-5 text-primary" />
                  Educational Institutions & Alma Mater
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {member.institutions.map((inst) => (
                    <div
                      key={inst.shortName}
                      className="flex items-center justify-between rounded-xl bg-muted/40 border border-border/70 p-4 text-xs"
                    >
                      <div className="flex items-center gap-3.5">
                        <InstitutionLogo code={inst.shortName} showLabel={false} size="lg" />
                        <div>
                          <p className="font-bold text-foreground text-sm">{inst.fullName}</p>
                          <p className="text-[11px] text-muted-foreground font-medium">
                            Graduated Higher Education Institution ({inst.shortName})
                          </p>
                        </div>
                      </div>
                      <InstitutionLogo code={inst.shortName} showLabel={true} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Official Contact */}
            {emails.length > 0 && (
              <section className="bg-secondary/40 border border-border/80 rounded-2xl p-6 sm:p-8">
                <h2 className="font-heading text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <Mail className="size-5 text-primary" />
                  Official Contact
                </h2>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    Official College Email
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    {emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="bg-card hover:bg-primary hover:text-primary-foreground text-primary border border-border px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors shadow-2xs"
                      >
                        <Mail className="size-3.5" />
                        <span>{email}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
    </div>
  )
}
