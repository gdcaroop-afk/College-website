import { Handshake } from 'lucide-react'

import { cn } from '@/lib/utils'
import { programPoster } from '@/data/program-poster'
import { programPosterImages } from '@/data/program-poster-images'
import collegeLogo from '@/assets/college-logo.jpg'
import hedLogo from '@/assets/hed-punjab-logo.png'
import uogLogo from '@/assets/uog-logo.png'

/**
 * Poster for a program card. If a real, custom-designed poster image has
 * been supplied for this program (program-poster-images.ts), it's used
 * directly. Otherwise falls back to a generated panel: the college logo
 * and the relevant partner logo (UOG for BS degrees, HED Punjab for
 * Intermediate/Associate programs) flanking a handshake mark, with the
 * program name below.
 */
export function ProgramIllustration({ slug, className }: { slug: string; className?: string }) {
  const realPoster = programPosterImages[slug]
  if (realPoster) {
    return (
      <div className={cn('bg-white flex items-center justify-center overflow-hidden', className)}>
        <img
          src={realPoster}
          alt={`${slug} program poster`}
          loading="lazy"
          decoding="async"
          className="size-full object-contain"
        />
      </div>
    )
  }

  const poster = programPoster[slug] ?? {
    shortTitle: slug,
    subtitle: '',
    partner: 'hed' as const,
  }
  const partnerLogo = poster.partner === 'uog' ? uogLogo : hedLogo
  const partnerAlt = poster.partner === 'uog' ? 'University of Gujrat' : 'Higher Education Department, Punjab'

  return (
    <div
      className={cn(
        'from-primary to-primary/70 flex flex-col items-center justify-center gap-3 bg-linear-to-br p-4',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <img
          src={collegeLogo}
          alt="Govt. Graduate College Aroop"
          className="size-10 rounded-full bg-white object-cover p-0.5 shadow-md"
        />
        <Handshake className="size-6 text-white/90" strokeWidth={1.75} />
        <img
          src={partnerLogo}
          alt={partnerAlt}
          className="h-8 max-w-16 rounded bg-white object-contain px-1.5 py-1 shadow-md"
        />
      </div>
      <div className="text-center">
        <div className="font-heading text-lg font-bold text-white">{poster.shortTitle}</div>
        <div className="text-xs font-semibold tracking-wide text-white/85 uppercase">{poster.subtitle}</div>
      </div>
    </div>
  )
}
