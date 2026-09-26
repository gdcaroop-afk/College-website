import { Link } from '@tanstack/react-router'
import { ArrowRight, Landmark, GraduationCap, BookOpenCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { programs } from '@/data/programs'
import campusPhoto from '@/assets/3.jpg'
import coeducationIcon from '@/assets/coeducation.png'

export function InstitutionalOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img
          src={campusPhoto}
          alt="Govt. Graduate College Aroop, Gujranwala — main building"
          className="border-border aspect-4/3 w-full rounded-lg border object-cover shadow-sm"
        />

        <div className="flex flex-col gap-5">
          <span className="text-accent-foreground bg-accent/20 w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            Institutional Overview
          </span>
          <h2 className="text-primary font-heading text-3xl font-bold text-balance sm:text-4xl">
            A public sector college serving Aroop and Gujranwala
          </h2>
          <p className="text-foreground/80 text-base text-pretty">
            {site.name} operates under the {site.governance.department} and offers
            Intermediate and BS-level education. Its degree programs are affiliated
            with the {site.affiliation.university}.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col gap-1">
              <span className="text-primary font-heading flex items-center gap-1.5 text-2xl font-bold">
                <BookOpenCheck className="size-5" />
                {programs.length}+
              </span>
              <span className="text-muted-foreground text-xs">Academic programs</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary font-heading flex items-center gap-1.5 text-2xl font-bold">
                <GraduationCap className="size-5" />
                UOG
              </span>
              <span className="text-muted-foreground text-xs">Degree affiliation</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary font-heading flex items-center gap-1.5 text-2xl font-bold">
                <Landmark className="size-5" />
                Punjab
              </span>
              <span className="text-muted-foreground text-xs">Public sector, HED</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary font-heading flex items-center gap-1.5 text-2xl font-bold">
                <img src={coeducationIcon} alt="" className="size-5" />
                {site.gender}
              </span>
              <span className="text-muted-foreground text-xs">Student body</span>
            </div>
          </div>

          <Button className="w-fit" variant="outline" asChild>
            <Link to="/about">
              Read More About the College
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
