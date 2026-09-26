import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Laptop,
} from 'lucide-react'

import { ProgramCard } from '@/components/sections/program-card'
import { programs, programsPendingConfirmation } from '@/data/programs'
import { site } from '@/data/site'

export const Route = createFileRoute('/academics')({
  component: AcademicsPage,
  head: () => ({
    meta: [
      { title: `Academics — ${site.name}` },
      {
        name: 'description',
        content:
          'Explore Intermediate (F.Sc, ICS, F.A, I.Com), Diplomas (D.Com, DIT), and Bachelor (BS CS, BS English, BS Chemistry, BS Commerce) programs offered at Govt. Graduate College Aroop, Gujranwala.',
      },
    ],
  }),
})

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'diploma', label: 'Diplomas' },
  { id: 'bachelor', label: "Bachelor's Degrees" },
] as const

const excellencePillars = [
  {
    icon: GraduationCap,
    title: 'Undergraduate Programs',
    description:
      "Comprehensive bachelor's degrees (BS CS, BS English, BS Chemistry, BS Commerce) across diverse fields of study, designed to prepare students for success in their chosen careers.",
    stat1: '4 BS Majors Available',
    stat2: '4-Year Degree Structure',
  },
  {
    icon: BookOpen,
    title: 'Intermediate Studies',
    description:
      'Rigorous pre-university programs including F.Sc. Pre-Medical, F.Sc. Pre-Engineering, ICS (Physics/Stats), F.A., F.A. IT, and I.Com.',
    stat1: '7 Intermediate Tracks',
    stat2: 'BISE Gujranwala Curriculum',
  },
  {
    icon: Laptop,
    title: 'Technical & Diplomas',
    description:
      'Career-focused diploma options including D.Com (Diploma in Commerce) and DIT (Diploma in Information Technology - 2 years semester system).',
    stat1: '2 Diplomas Available',
    stat2: '2-Year Semester System',
  },
  {
    icon: Award,
    title: 'Academic Excellence & Mentorship',
    description:
      'Structured faculty guidance, modern science and computer laboratories, and continuous student evaluation for high academic performance.',
    stat1: 'Experienced Faculty',
    stat2: 'Modern Lab Facilities',
  },
]

function AcademicsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredPrograms =
    activeCategory === 'all'
      ? programs
      : programs.filter((p) => p.category === activeCategory)

  return (
    <div className="flex flex-col gap-10 pb-12">
      {/* Header / Hero Section matching Screenshot 1 */}
      <section className="pt-6 pb-4 text-center">
        <div className="mx-auto flex flex-col items-center justify-center max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-foreground text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Academics
          </h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed sm:text-base">
            Providing high-quality education through comprehensive Intermediate, Professional Diploma, and 4-Year Bachelor degree programs tailored to prepare students for higher studies and career success.
          </p>
        </div>
      </section>

      {/* Breadcrumb full-width bar matching Screenshot 1 */}
      <section className="bg-muted/40 border-border/80 border-y py-2.5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-semibold">Academics</span>
          </nav>
        </div>
      </section>

      {/* Two-Column Layout: Academic Excellence (Left) & Recognition (Right) - Screenshots 1 & 2 */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Academic Excellence (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h2 className="font-heading text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                Academic Excellence
              </h2>
              <div className="bg-primary mt-1.5 h-0.5 w-8 rounded-full" />
            </div>

            <div className="divide-border/60 divide-y">
              {excellencePillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                    <pillar.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground text-base font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-xs text-justify sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-5 text-xs font-semibold">
                      <span className="text-primary">{pillar.stat1}</span>
                      <span className="text-muted-foreground">{pillar.stat2}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Recognition & Accreditation (5 Cols) - Screenshots 1 & 2 */}
          <div className="flex flex-col gap-8 border-t border-border/60 pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <div>
              <h2 className="font-heading text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                Recognition
              </h2>
              <div className="bg-primary mt-1.5 h-0.5 w-8 rounded-full" />
            </div>

            <div className="flex flex-col gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="font-heading text-primary text-3xl font-extrabold sm:text-4xl">
                  13+
                </span>
                <h4 className="text-foreground mt-1 text-sm font-semibold">
                  Academic Programs Offered
                </h4>
                <p className="text-muted-foreground max-w-xs text-xs">
                  Intermediate, Diploma & BS pathways recognized under HED Punjab & UOG affiliation
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-heading text-primary text-3xl font-extrabold sm:text-4xl">
                  100%
                </span>
                <h4 className="text-foreground mt-1 text-sm font-semibold">
                  Recognized Affiliations
                </h4>
                <p className="text-muted-foreground max-w-xs text-xs">
                  Affiliated with University of Gujrat (UOG), BISE Gujranwala, and PBTE
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-heading text-primary text-3xl font-extrabold sm:text-4xl">
                  4-Year
                </span>
                <h4 className="text-foreground mt-1 text-sm font-semibold">
                  Bachelor Degree Programs
                </h4>
                <p className="text-muted-foreground max-w-xs text-xs">
                  BS CS, BS English, BS Chemistry & BS Commerce affiliated with University of Gujrat (UOG)
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-heading text-primary text-3xl font-extrabold sm:text-4xl">
                  2-Year
                </span>
                <h4 className="text-foreground mt-1 text-sm font-semibold">
                  DIT Semester System
                </h4>
                <p className="text-muted-foreground max-w-xs text-xs">
                  Practical 2-year diploma in Information Technology conducted under semester system
                </p>
              </div>
            </div>

            <div className="border-t border-border/60 pt-6">
              <h3 className="font-heading text-foreground text-base font-semibold">
                Accreditation
              </h3>
              <p className="text-muted-foreground mt-1.5 text-xs sm:text-sm leading-relaxed">
                Our institution is officially registered with Higher Education Department (HED) Punjab and affiliated with the University of Gujrat (UOG) for degree programs, and Punjab Board of Technical Education (PBTE) for technical diplomas.
              </p>
              <Link
                to="/admissions"
                className="text-primary hover:underline mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold"
              >
                View Admission Requirements
                <ChevronRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offered Programs Directory & Filter Tabs */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-heading text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              Offered Programs Directory
            </h2>
            <div className="bg-primary mt-1.5 h-0.5 w-8 rounded-full" />
            <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
              Select a category to view specific program details and curriculum options.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-lg bg-muted/60 p-1 border border-border/60">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={
                  activeCategory === cat.id
                    ? 'bg-background text-primary rounded-md px-3 py-1.5 text-xs font-semibold shadow-xs transition-all'
                    : 'text-muted-foreground hover:text-foreground rounded-md px-3 py-1.5 text-xs font-medium transition-colors'
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      {programsPendingConfirmation.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <h3 className="font-heading text-foreground mb-3 text-base font-semibold">
            Pending Confirmation
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programsPendingConfirmation.map((program) => (
              <ProgramCard key={program.title} program={program} dashed />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}


