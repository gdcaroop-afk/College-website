import { Link } from '@tanstack/react-router'

import { ArtsScienceBadge } from '@/components/sections/generated-badges'
import { highlights } from '@/data/highlights'
import hedLogo from '@/assets/hed-punjab-logo.png'
import uogLogo from '@/assets/uog-logo.png'
import coeducationIcon from '@/assets/coeducation.png'

function HighlightImage({ kind }: { kind: (typeof highlights)[number]['imageKind'] }) {
  switch (kind) {
    case 'hed-logo':
      return <img src={hedLogo} alt="Higher Education Department, Punjab" className="size-9 object-contain" />
    case 'uog-logo':
      return <img src={uogLogo} alt="University of Gujrat" className="h-8 w-auto object-contain" />
    case 'arts-science':
      return (
        <span className="bg-accent/15 text-primary flex size-9 items-center justify-center rounded-full">
          <ArtsScienceBadge className="size-5" />
        </span>
      )
    case 'co-education':
      return <img src={coeducationIcon} alt="Co-education" className="size-9 object-contain" />

  }
}

export function Highlights() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <Link
            key={item.slug}
            to="/highlights/$slug"
            params={{ slug: item.slug }}
            className="bg-card border-2 border-transparent group flex flex-col items-center gap-1.5 rounded-lg p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 hover:shadow-xl"
          >
            <span className="flex h-10 items-center justify-center">
              <HighlightImage kind={item.imageKind} />
            </span>
            <h3 className="font-heading text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-xs">{item.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
