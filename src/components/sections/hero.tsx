import { Link } from '@tanstack/react-router'
import { ArrowRight, MapPin } from 'lucide-react'

import { LogoMark } from '@/components/shared/logo-mark'
import { site } from '@/data/site'
import heroBackground from '@/assets/Hero_section_background.jpg'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      {/* Flat dark scrim (not a fade) so the photo stays clearly visible underneath */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6">
        <LogoMark className="size-24 border-2 border-white/40 bg-white shadow-lg sm:size-28" />
        <span className="bg-accent text-accent-foreground w-fit rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase">
          {site.governance.department}
        </span>
        <h1 className="font-heading text-4xl leading-tight font-bold text-balance text-white sm:text-5xl">
          {site.name}
        </h1>
        <p className="flex items-center justify-center gap-1.5 text-sm text-white/90">
          <MapPin className="size-4 shrink-0" />
          {site.address.line1}, {site.address.line2}
        </p>
        <p className="max-w-2xl text-lg text-pretty text-white/90">
          A public sector college affiliated with the {site.affiliation.university},
          offering intermediate and bachelor's programs in Arts, Science, Computer
          Science and English.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/academics"
            className="bg-primary text-primary-foreground border-2 border-white inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold tracking-wide uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary hover:shadow-xl"
          >
            Explore Programs
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary hover:shadow-xl"
          >
            Campus Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
