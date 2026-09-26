import { Link } from '@tanstack/react-router'

import { ArtsScienceBadge } from '@/components/sections/generated-badges'
import { highlights } from '@/data/highlights'
import hedLogo from '@/assets/hed-punjab-logo.png'
import uogLogo from '@/assets/uog-logo.png'
import coeducationIcon from '@/assets/coeducation.png'

function HighlightImage({ kind }: { kind: (typeof highlights)[number]['imageKind'] }) {
  switch (kind) {
    case 'hed-logo':
      return <img src={hedLogo} alt="Higher Education Department, Punjab" className="size-14 object-contain" />
    case 'uog-logo':
      return <img src={uogLogo} alt="University of Gujrat" className="h-12 w-auto object-contain" />
    case 'arts-science':
      return (
        <span className="bg-accent/15 text-primary flex size-14 items-center justify-center rounded-full">
          <ArtsScienceBadge className="size-8" />
        </span>
      )
    case 'co-education':
      return <img src={coeducationIcon} alt="Co-education" className="size-14 object-contain" />

  }
}

export function Highlights() {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <Link
            key={item.slug}
            to="/highlights/$slug"
            params={{ slug: item.slug }}
            className="bg-card group flex flex-col items-center gap-3 rounded-xl p-7 text-center shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <span className="flex h-16 items-center justify-center">
              <HighlightImage kind={item.imageKind} />
            </span>
            <h3 className="font-heading text-foreground group-hover:text-primary font-semibold transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm">{item.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
