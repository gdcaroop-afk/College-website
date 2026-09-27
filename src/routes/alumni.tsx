import { createFileRoute, Link } from '@tanstack/react-router'
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Star,
} from 'lucide-react'

import campusBuildingPhoto from '@/assets/campus_building.jpg'
import bscsGraduationPhoto from '@/assets/graduation bscs.jpg'
import bsEnglishGraduationPhoto from '@/assets/Graduates bsenglish.jpg'
import { site } from '@/data/site'

export const Route = createFileRoute('/alumni')({
  component: AlumniPage,
  head: () => ({
    meta: [
      { title: `Alumni — ${site.name}` },
      {
        name: 'description',
        content:
          'Our alumni legacy at Govt. Graduate College Aroop Gujranwala. Celebrating graduates who are making a difference across Pakistan and beyond.',
      },
    ],
  }),
})

const bscsGraduatesInfo = {
  batch: '2022-2026',
  program: 'BS Computer Science',
  affiliation: 'University of Gujrat (UOG)',
  totalGraduates: 13,
  image: bscsGraduationPhoto,
  highlights: [
    'First BSCS graduating batch of the college (2022-2026)',
    'Developed innovative Final Year Projects across AI, Web & Software domains',
    'Multiple students prepared for careers in software engineering & AI',
    'Academic partnership with University of Gujrat (UOG)',
    'Completed rigorous 4-year curriculum in Computer Science',
  ],
  careerPaths: [
    'Software Development',
    'Web Development',
    'Data Science & AI',
    'IT Support & Administration',
    'Higher Education (MS/MPhil)',
  ],
}

const bsEnglishGraduatesInfo = {
  batch: '2022-2026',
  program: 'BS English',
  affiliation: 'University of Gujrat (UOG)',
  totalGraduates: 14,
  image: bsEnglishGraduationPhoto,
  highlights: [
    'Strong foundation in English literature and linguistics',
    'Multiple students pursuing further education in leading universities',
    'Several graduates prepared for teaching and education sector',
    'Academic research and thesis work in English studies',
    'Affiliated with University of Gujrat (UOG)',
  ],
  careerPaths: [
    'Teaching & Education',
    'Content Writing & Journalism',
    'Civil Services & Administration',
    'Higher Education (MA/MPhil)',
    'Translation & Interpretation',
  ],
}

function GraduatesBatchCard({
  info,
  reverse = false,
}: {
  info: typeof bscsGraduatesInfo
  reverse?: boolean
}) {
  return (
    <div className={`bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid lg:grid-cols-2 gap-0 ${reverse ? 'direction-rtl' : ''}`}>
      {/* Info Side */}
      <div className={`p-6 sm:p-8 flex flex-col justify-center ${reverse ? 'lg:order-2' : ''}`}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-primary text-primary-foreground rounded-md px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase">
            {info.program}
          </span>
          <span className="bg-secondary border border-border/60 rounded-md px-2.5 py-0.5 text-[11px] font-semibold text-foreground">
            Batch {info.batch}
          </span>
        </div>

        <h3 className="font-heading text-2xl font-extrabold text-foreground mb-1">{info.program} Graduates</h3>
        <p className="text-sm text-primary font-semibold mb-1">{info.affiliation}</p>

        <div className="flex items-center gap-3 my-3">
          <div className="text-center">
            <span className="font-heading text-3xl font-extrabold text-primary block">{info.totalGraduates}</span>
            <span className="text-xs text-muted-foreground font-semibold">Graduates</span>
          </div>
          <div className="h-10 w-px bg-border/60" />
          <div className="text-center">
            <span className="font-heading text-3xl font-extrabold text-primary block">4</span>
            <span className="text-xs text-muted-foreground font-semibold">Year Program</span>
          </div>
          <div className="h-10 w-px bg-border/60" />
          <div className="text-center">
            <span className="font-heading text-3xl font-extrabold text-primary block">2026</span>
            <span className="text-xs text-muted-foreground font-semibold">Graduating Year</span>
          </div>
        </div>

        <div className="space-y-1.5 mb-4">
          <h4 className="font-heading text-sm font-bold text-foreground flex items-center gap-1.5">
            <Star className="size-4 text-primary" /> Key Highlights
          </h4>
          {info.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2 text-xs text-foreground/80">
              <GraduationCap className="size-3.5 shrink-0 text-primary mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-foreground flex items-center gap-1.5 mb-2">
            <Briefcase className="size-4 text-primary" /> Career Pathways
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {info.careerPaths.map((c) => (
              <span key={c} className="bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-1 text-xs font-semibold">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Side */}
      <div className={`relative min-h-72 lg:min-h-0 bg-slate-900 overflow-hidden flex items-center justify-center ${reverse ? 'lg:order-1' : ''}`}>
        <img
          src={info.image}
          alt={`${info.program} Batch 2022-2026 Graduation Convocation`}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
          <span className="font-bold tracking-wide drop-shadow-md">
            Convocation 2024 — {info.program}
          </span>
          <span className="bg-primary/90 text-primary-foreground font-semibold text-[10px] px-2 py-0.5 rounded shadow-xs">
            Batch 2022-2026
          </span>
        </div>
      </div>
    </div>
  )
}

function AlumniPage() {
  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* Page Header */}
      <section className="pt-8 pb-4 text-center">
        <div className="mx-auto flex flex-col items-center justify-center max-w-4xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Alumni
          </h1>
          <p className="font-sans text-primary font-bold text-base sm:text-lg mt-1 tracking-wide">
            A Legacy of Excellence & Achievement
          </p>
          <p className="text-muted-foreground mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed sm:text-sm">
            Since its founding in 2014, {site.name} has been shaping futures and building careers. Our alumni community represents an accomplished group of individuals who carry the values, knowledge, and ambition instilled here into their professional and personal lives.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-muted/40 border-border/80 border-y py-2.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">Home</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-semibold">Alumni</span>
          </nav>
        </div>
      </section>

      {/* Alumni Legacy Hero with Campus Photo */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-4">
              Our Alumni Legacy
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 text-justify">
              Our graduates go on to make meaningful contributions in education, technology, business, civil services, and beyond. From the pioneering BS Computer Science and BS English graduates of 2022-2026 to our upcoming classes, our alumni are living proof of our institution's commitment to quality higher education and character development.
            </p>

            {/* Quick stats inline */}
            <div className="flex flex-wrap gap-6">
              <div>
                <span className="font-heading text-4xl font-extrabold text-primary block">27+</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Graduates</span>
              </div>
              <div>
                <span className="font-heading text-4xl font-extrabold text-primary block">12+</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Years Legacy</span>
              </div>
            </div>
          </div>

          {/* College Campus Photo */}
          <div className="relative aspect-video lg:aspect-auto lg:h-80 rounded-2xl overflow-hidden border border-border/60 shadow-md bg-slate-900 group">
            <img
              src={campusBuildingPhoto}
              alt={`${site.name} Campus Building`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
              <span className="font-bold tracking-wide drop-shadow-sm">{site.name}</span>
              <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-medium border border-white/20">
                Aroop, Gujranwala
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Graduates Section - Heading Justified Center */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-lg">
            <BookOpen className="size-4" />
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
            Recent Graduates — Batch 2022-2026
          </h2>
        </div>

        {/* BSCS Graduates with Graduation Photo */}
        <GraduatesBatchCard info={bscsGraduatesInfo} />

        {/* BS English Graduates with Graduation Photo */}
        <GraduatesBatchCard info={bsEnglishGraduatesInfo} reverse />
      </section>
    </div>
  )
}
