import { useState, useMemo } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Search,
  Award,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Mail,
  X,
  ArrowRight,
  Sparkles,
  Building2,
  Clock,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'

import { departments, facultyMembers, type FacultyMember } from '@/data/faculty'
import { site } from '@/data/site'
import { InstitutionLogo } from '@/components/shared/institution-logo'

export const Route = createFileRoute('/faculty')({
  component: FacultyPage,
  head: () => ({
    meta: [
      { title: `Our Faculty — ${site.name}` },
      {
        name: 'description',
        content:
          'Meet the experienced, highly qualified faculty members at Govt. Graduate College Aroop, Gujranwala across Physics, English, Biology, Education, Commerce, Statistics, and Information Management.',
      },
    ],
  }),
})

function ProfileModal({
  member,
  onClose,
}: {
  member: FacultyMember
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card text-card-foreground border-border relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-background/80 hover:bg-muted text-foreground absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full border border-border shadow-xs transition-colors"
          aria-label="Close dialog"
        >
          <X className="size-5" />
        </button>

        {/* Modal Header / Banner */}
        <div className="bg-gradient-to-r from-primary/15 via-secondary to-accent/15 border-b border-border/60 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-md sm:size-32">
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-top"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span className="bg-primary text-primary-foreground rounded-md px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase">
                  {member.department}
                </span>
                <span className="bg-muted text-muted-foreground border-border/60 rounded-md border px-2.5 py-0.5 text-[11px] font-semibold">
                  {member.experience} Teaching Exp.
                </span>
              </div>
              <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
                {member.name}
              </h2>
              <p className="font-sans text-sm font-semibold text-primary">
                {member.designation}
              </p>

            </div>
          </div>
        </div>

        {/* Modal Content Details */}
        <div className="space-y-6 p-6 sm:p-8">
          {/* Academic Qualifications */}
          <div>
            <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground">
              <GraduationCap className="size-5 text-primary" />
              Academic Qualification & Background
            </h3>
            <p className="mt-1.5 rounded-lg bg-secondary/70 border border-border/60 p-3 text-sm font-semibold text-foreground">
              {member.qualification}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground">
              <Mail className="size-5 text-primary" />
              Contact Information
            </h3>
            <p className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground font-medium rounded-lg bg-muted/40 border border-border/60 p-3">
              <span className="font-bold text-foreground">Email:</span>
              <span className="italic">Not provided yet</span>
            </p>
          </div>

          {/* Biography */}
          <div>
            <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground">
              <BookOpen className="size-5 text-primary" />
              Professional Profile & Experience
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed text-justify">
              {member.bio}
            </p>
          </div>

          {/* Key Areas of Strength */}
          {member.areasOfStrength.length > 0 && (
            <div>
              <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground mb-3">
                <Sparkles className="size-5 text-primary" />
                Key Areas of Strength & Expertise
              </h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {member.areasOfStrength.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-2.5 rounded-lg bg-card border border-border/80 px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alma Mater Institutions with Official Logos */}
          <div>
            <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground mb-2">
              <Building2 className="size-5 text-primary" />
              Educational Institutions & Alma Mater
            </h3>
            <div className="flex flex-col gap-2.5">
              {member.institutions.map((inst) => (
                <div
                  key={inst.shortName}
                  className="flex items-center justify-between rounded-xl bg-muted/40 border border-border/60 p-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <InstitutionLogo code={inst.shortName} showLabel={false} size="lg" />
                    <div>
                      <p className="font-bold text-foreground text-xs sm:text-sm">{inst.fullName}</p>
                      <p className="text-[11px] text-muted-foreground font-medium">Official Higher Education Alma Mater</p>
                    </div>
                  </div>
                  <InstitutionLogo code={inst.shortName} showLabel={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Close Modal CTA */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm"
            >
              Close Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDept, setSelectedDept] = useState('All Departments')
  const [activeProfile, setActiveProfile] = useState<FacultyMember | null>(null)

  const filteredFaculty = useMemo(() => {
    return facultyMembers.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.institutions.some((inst) =>
          inst.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          inst.shortName.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesDept =
        selectedDept === 'All Departments' ||
        (selectedDept === 'Academic Leadership'
          ? m.tier === 'principal' || m.designation.includes('Vice Principal')
          : m.department.toLowerCase() === selectedDept.toLowerCase())

      return matchesSearch && matchesDept
    })
  }, [searchQuery, selectedDept])

  const principal = useMemo(
    () => facultyMembers.find((m) => m.tier === 'principal'),
    []
  )

  const seniorFaculty = useMemo(
    () => facultyMembers.filter((m) => m.tier === 'senior'),
    []
  )

  const otherFaculty = useMemo(
    () => facultyMembers.filter((m) => m.tier === 'faculty' || m.tier === 'support'),
    []
  )

  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* 1. Page Header & Intro matching User Screenshots 1 & 2 */}
      <section className="pt-8 pb-4 text-center">
        <div className="mx-auto flex flex-col items-center justify-center max-w-4xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl text-center">
            Faculty Staff
          </h1>
          <p className="font-sans text-primary font-bold text-base sm:text-lg mt-1 tracking-wide">
            Inspiring Minds. Building Futures.
          </p>
          <p className="text-muted-foreground mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed sm:text-sm text-justify sm:text-center">
            At {site.name}, we believe that quality education begins with dedicated, knowledgeable, and experienced faculty. Our academic team brings together highly qualified educators and professionals who are committed to creating an engaging learning environment across Physics, English, Biology, Education, Commerce, Statistics, and Information Management.
          </p>
        </div>
      </section>

      {/* 2. Full-width Breadcrumb Bar */}
      <section className="bg-muted/40 border-border/80 border-y py-2.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-semibold">Faculty Staff</span>
          </nav>
        </div>
      </section>

      {/* 3. Search Bar & Department Filter Badges */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3.5 size-4.5 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Find faculty by name, designation, department, qualification..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card text-foreground border-border placeholder:text-muted-foreground/70 focus:border-primary focus:ring-primary/20 w-full rounded-full border py-3 pr-4 pl-11 text-xs sm:text-sm shadow-xs transition-all focus:outline-none focus:ring-2"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3.5 -translate-y-1/2 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                selectedDept === dept
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'bg-secondary/70 text-foreground/80 hover:bg-secondary hover:text-primary border border-border/60'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 space-y-12">
        {/* If user is filtering or searching, render matching items directly */}
        {searchQuery || selectedDept !== 'All Departments' ? (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Search Results ({filteredFaculty.length})
              </h2>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedDept('All Departments')
                }}
                className="text-primary hover:underline text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>

            {filteredFaculty.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center">
                <UserCheck className="mx-auto size-10 text-muted-foreground/60" />
                <h3 className="mt-3 font-heading text-base font-semibold text-foreground">
                  No faculty members found
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Try adjusting your search terms or selecting a different department filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredFaculty.map((member) => (
                  <FacultyCard
                    key={member.id}
                    member={member}
                    onViewProfile={() => setActiveProfile(member)}
                  />
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            {/* 4. Top Section: Principal Featured Card matching Screenshot 2 */}
            {principal && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-lg">
                    <ShieldCheck className="size-4" />
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    Academic Leadership
                  </h2>
                </div>

                <div className="bg-card border-border/80 group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-8 lg:items-center">
                    {/* Principal Image */}
                    <div className="lg:col-span-4 flex justify-center">
                      <div className="relative h-72 w-full max-w-xs overflow-hidden rounded-xl border border-border shadow-xs">
                        <img
                          src={principal.photo}
                          alt={principal.name}
                          loading="eager"
                          decoding="async"
                          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                        />
                      </div>
                    </div>

                    {/* Principal Content Details */}
                    <div className="lg:col-span-8 space-y-4 flex flex-col justify-center">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-muted-foreground text-xs font-semibold flex items-center gap-1">
                            <Clock className="size-3.5 text-primary" />
                            {principal.experience} Experience
                          </span>
                        </div>
                        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                          {principal.name}
                        </h3>
                        <p className="font-sans text-sm font-semibold text-primary">
                          {principal.designation}
                        </p>
                      </div>

                      <p className="text-muted-foreground text-xs sm:text-sm text-justify leading-relaxed line-clamp-4">
                        {principal.bio}
                      </p>

                      {/* Areas of Strength pills */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {principal.areasOfStrength.slice(0, 3).map((strength) => (
                          <span
                            key={strength}
                            className="bg-muted text-foreground/80 rounded-md px-2.5 py-1 text-xs font-medium border border-border/50"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>

                      {/* Institutions + View Profile Button */}
                      <div className="flex flex-wrap items-center justify-end gap-4 pt-3 border-t border-border/60">

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setActiveProfile(principal)}
                            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2 transition-all shadow-xs"
                          >
                            <span>View Profile</span>
                            <ArrowRight className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 5. Senior Faculty Section (3 in a Row Layout matching Screenshot 3) */}
            {seniorFaculty.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-lg">
                    <Award className="size-4" />
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    Senior Faculty & Administration
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {seniorFaculty.map((member) => (
                    <FacultyCard
                      key={member.id}
                      member={member}
                      onViewProfile={() => setActiveProfile(member)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* 6. All Faculty Members & Academic Support Grid */}
            {otherFaculty.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-lg">
                    <GraduationCap className="size-4" />
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    Our Faculty Members
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {otherFaculty.map((member) => (
                    <FacultyCard
                      key={member.id}
                      member={member}
                      onViewProfile={() => setActiveProfile(member)}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>



      {/* Modal Profile Dialog */}
      {activeProfile && (
        <ProfileModal
          member={activeProfile}
          onClose={() => setActiveProfile(null)}
        />
      )}
    </div>
  )
}

function FacultyCard({
  member,
  onViewProfile,
}: {
  member: FacultyMember
  onViewProfile: () => void
}) {
  return (
    <div className="bg-card group border border-border/80 flex flex-col justify-between overflow-hidden rounded-xl shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div>
        {/* Photo header */}
        <div className="relative h-64 w-full overflow-hidden bg-muted">
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <span className="bg-card/90 backdrop-blur-xs text-primary absolute top-2.5 left-2.5 flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold shadow-2xs">
            <Building2 className="size-3" />
            {member.department}
          </span>
          <span className="bg-primary/90 text-primary-foreground absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold shadow-2xs">
            {member.experience} Exp.
          </span>
        </div>

        {/* Content body */}
        <div className="flex flex-col items-center text-center gap-2 p-5">
          <h3 className="font-heading text-foreground group-hover:text-primary text-base font-bold transition-colors text-center">
            {member.name}
          </h3>
          <p className="text-primary text-xs font-semibold leading-snug text-center">
            {member.designation}
          </p>
          <p className="text-muted-foreground text-xs font-medium text-center">
            {member.qualification}
          </p>


        </div>
      </div>

      {/* Card footer: View Profile Button */}
      <div className="p-5 pt-0 mt-2">
        <button
          onClick={onViewProfile}
          className="w-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
        >
          <span>View Profile</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}
