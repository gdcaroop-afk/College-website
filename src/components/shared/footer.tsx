import { Link } from '@tanstack/react-router'
import { MapPin, Phone } from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

import { LogoMark } from '@/components/shared/logo-mark'
import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <LogoMark className="border-primary-foreground/30 border" />
            <span className="font-heading text-lg font-bold">{site.shortName}</span>
          </div>
          <p className="text-primary-foreground/80 text-sm">{site.name}</p>
          <p className="text-primary-foreground/70 text-sm italic">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-heading mb-1 font-semibold">Quick Links</h3>
          {[
            { to: '/about', label: 'About the College' },
            { to: '/academics', label: 'Academic Programs' },
            { to: '/faculty', label: 'Faculty' },
            { to: '/news', label: 'News & Announcements' },
            { to: '/contact', label: 'Contact & Location' },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-primary-foreground/80 hover:text-accent w-fit"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-heading mb-1 font-semibold">Contact</h3>
          <span className="text-primary-foreground/80 flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {site.address.line1}, {site.address.line2}
          </span>
          <span className="text-primary-foreground/80 flex items-center gap-2">
            <Phone className="size-4 shrink-0" />
            {site.contact.phones[0]?.number}
          </span>
          <div className="mt-1 flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-accent"
            >
              <IconBrandFacebook className="size-5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-accent"
            >
              <IconBrandInstagram className="size-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-primary-foreground/20 border-t">
        <div className="text-primary-foreground/70 mx-auto max-w-7xl px-4 py-4 text-xs sm:px-6">
          © {new Date().getFullYear()} {site.name}. {site.governance.department}.
        </div>
      </div>
    </footer>
  )
}
