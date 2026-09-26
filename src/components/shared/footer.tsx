import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

import { LogoMark } from '@/components/shared/logo-mark'
import { site } from '@/data/site'

const quickLinks = [
  { to: '/about', label: 'About the College' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/academics', label: 'Academic Programs' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'Events' },
]

const uogPrograms = [
  { slug: 'bs-computer-science', title: 'BS Computer Science' },
  { slug: 'bs-chemistry', title: 'BS Chemistry' },
  { slug: 'bs-english', title: 'BS English' },
  { slug: 'bs-commerce', title: 'BS Commerce' },
]

const intermediateAndDiplomas = [
  { slug: 'fsc-pre-medical', title: 'F.Sc. Pre-Medical' },
  { slug: 'fsc-pre-engineering', title: 'F.Sc. Pre-Engineering' },
  { slug: 'ics-physics', title: 'ICS (Physics & Computer)' },
  { slug: 'fa-humanities-arts', title: 'F.A. Arts & Humanities' },
  { slug: 'icom', title: 'I.Com (Commerce)' },
  { slug: 'dit', title: 'DIT (Information Tech)' },
  { slug: 'dcom', title: 'D.Com (Commerce Diploma)' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16 border-t border-primary-foreground/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: College Info & Contacts */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <LogoMark className="border-primary-foreground/30 border" />
            <span className="font-heading text-lg font-bold">{site.shortName}</span>
          </div>
          <p className="text-primary-foreground/80 text-xs font-semibold leading-relaxed">{site.name}</p>
          <p className="text-primary-foreground/70 text-xs italic mb-1">{site.tagline}</p>

          <div className="flex flex-col gap-2 text-xs pt-1 border-t border-primary-foreground/20">
            <span className="text-primary-foreground/85 flex items-start gap-2">
              <MapPin className="mt-0.5 size-3.5 shrink-0" />
              <span>{site.address.line1}, {site.address.line2}</span>
            </span>
            <span className="text-primary-foreground/85 flex items-start gap-2">
              <Phone className="mt-0.5 size-3.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                {site.contact.phones.map((p) => (
                  <a key={p.number} href={`tel:${p.number}`} className="hover:text-accent font-semibold">
                    {p.source}: {p.number}
                  </a>
                ))}
              </div>
            </span>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-primary-foreground/85 hover:text-accent flex items-center gap-2 w-fit font-semibold"
            >
              <Mail className="size-3.5 shrink-0" />
              <span>{site.contact.email}</span>
            </a>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-accent bg-primary-foreground/10 p-2 rounded-full transition-colors"
            >
              <IconBrandFacebook className="size-4" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-accent bg-primary-foreground/10 p-2 rounded-full transition-colors"
            >
              <IconBrandInstagram className="size-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-2.5 text-xs">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent pb-1 border-b border-primary-foreground/20">
            Navigation Links
          </h3>
          {quickLinks.map((l) => (
            <Link
              key={l.to + l.label}
              to={l.to}
              className="text-primary-foreground/80 hover:text-accent flex items-center gap-1.5 w-fit transition-colors"
            >
              <ArrowRight className="size-3 text-accent" />
              <span>{l.label}</span>
            </Link>
          ))}
        </div>

        {/* Col 3: UOG Degree Programs (Matching Screenshot 7) */}
        <div className="flex flex-col gap-2.5 text-xs">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent pb-1 border-b border-primary-foreground/20">
            UOG DEGREE PROGRAMS
          </h3>
          {uogPrograms.map((prog) => (
            <Link
              key={prog.slug}
              to="/academics/$slug"
              params={{ slug: prog.slug } as any}
              className="text-primary-foreground/80 hover:text-accent flex items-center gap-1.5 w-fit transition-colors font-medium"
            >
              <ArrowRight className="size-3 text-accent" />
              <span>{prog.title}</span>
            </Link>
          ))}
        </div>

        {/* Col 4: Intermediate & Diplomas */}
        <div className="flex flex-col gap-2.5 text-xs">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent pb-1 border-b border-primary-foreground/20">
            Intermediate & Diplomas
          </h3>
          {intermediateAndDiplomas.map((prog) => (
            <Link
              key={prog.slug}
              to="/academics/$slug"
              params={{ slug: prog.slug } as any}
              className="text-primary-foreground/80 hover:text-accent flex items-center gap-1.5 w-fit transition-colors font-medium"
            >
              <ArrowRight className="size-3 text-accent" />
              <span>{prog.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-primary-foreground/20 border-t bg-black/20">
        <div className="text-primary-foreground/70 mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-xs sm:flex-row sm:px-6">
          <span className="text-center">
            © {new Date().getFullYear()} {site.name}. {site.governance.department}.
          </span>
          <span className="text-primary-foreground/60 text-[11px]">
            Affiliated with {site.affiliation.university}
          </span>
        </div>
      </div>
    </footer>
  )
}
