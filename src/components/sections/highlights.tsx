import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { highlights } from '@/data/highlights'
import hedLogo from '@/assets/hed-punjab-logo.png'
import uogLogo from '@/assets/uog-logo.png'
import coeducationIcon from '@/assets/coeducation.png'
import artsScienceLogo from '@/assets/Arts,Sciences&CS logo.jpg'

function HighlightImage({ kind }: { kind: (typeof highlights)[number]['imageKind'] }) {
  switch (kind) {
    case 'hed-logo':
      return <img src={hedLogo} alt="Higher Education Department, Punjab" className="size-9 object-contain" />
    case 'uog-logo':
      return <img src={uogLogo} alt="University of Gujrat" className="h-8 w-auto object-contain" />
    case 'arts-science':
      return <img src={artsScienceLogo} alt="Arts, Sciences & CS" className="size-9 rounded-full object-cover" />
    case 'co-education':
      return <img src={coeducationIcon} alt="Co-education" className="size-9 object-contain" />
  }
}

export function Highlights() {
  return (
    <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-4 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <Link
            key={item.slug}
            to="/highlights/$slug"
            params={{ slug: item.slug } as any}
            className="bg-card border border-border/80 group flex flex-col items-center justify-between gap-3 rounded-xl p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-10 items-center justify-center">
                <HighlightImage kind={item.imageKind} />
              </span>
              <h3 className="font-heading text-foreground group-hover:text-primary text-sm font-bold transition-colors text-center">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs text-center leading-relaxed">{item.summary}</p>
            </div>
            <span className="w-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 mt-2">
              <span>Read Details</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
