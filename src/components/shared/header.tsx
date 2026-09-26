import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, Phone, X, Volume2 } from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

import { LogoMark } from '@/components/shared/logo-mark'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const mainNavItems = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About Us' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/academics', label: 'Academics' },
  { to: '/faculty', label: 'Faculty & Staff' },
  { to: '/gallery', label: 'Campus & Facilities' },
  { to: '/news', label: 'News & Events' },
  { to: '/contact', label: 'Contact' },
] as const

const tickerAnnouncements = [
  '📢 Admissions Open for BS CS, BS English, BS Chemistry, BS Commerce & Intermediate (F.Sc, ICS, F.A, I.Com, DIT)',
  '⏰ College Shift Timings: Intermediate (08:00 AM - 01:30 PM) | BS Programs (08:30 AM - 12:40 PM)',
  '📞 Admission Helpline: +92 55 3892525 | Email: info@ggcaroop.edu.pk',
  '🎓 Welcome Orientation Ceremony Scheduled for New BS & Intermediate Batches',
  '🏆 Annual Sports Day & Academic Merit Awards Celebrations',
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background/95 border-border sticky top-0 z-50 border-b backdrop-blur">
      {/* Top Green Bar — Contact Info, Social & Sliding News Ticker */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 text-xs sm:px-6">
          {/* Sliding News Ticker */}
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
            <span className="bg-accent text-accent-foreground font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0 flex items-center gap-1 shadow-2xs">
              <Volume2 className="size-3" />
              <span>Latest News</span>
            </span>
            <div className="relative min-w-0 flex-1 overflow-hidden">
              <div className="animate-marquee-scroll whitespace-nowrap text-[11px] font-medium text-primary-foreground/90">
                {tickerAnnouncements.map((text, idx) => (
                  <span key={idx} className="inline-block px-4">
                    {text}
                  </span>
                ))}
                {/* Repeat ticker for seamless infinite loop */}
                {tickerAnnouncements.map((text, idx) => (
                  <span key={`dup-${idx}`} className="inline-block px-4">
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="flex shrink-0 items-center gap-3 border-l border-primary-foreground/20 pl-3">
            <a
              href={`tel:${site.contact.phones[0]?.number}`}
              className="hover:text-accent hidden items-center gap-1 text-[11px] sm:flex font-semibold"
            >
              <Phone className="size-3 shrink-0" />
              <span>{site.contact.phones[0]?.number}</span>
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-accent hidden items-center gap-1 text-[11px] md:flex font-semibold"
            >
              <span>{site.contact.email}</span>
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-accent"
            >
              <IconBrandFacebook className="size-3.5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-accent"
            >
              <IconBrandInstagram className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Logo & Navigation Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <LogoMark className="shrink-0" />
          <span className="leading-tight truncate">
            <span className="font-heading text-primary block text-sm font-bold sm:text-base md:text-lg truncate">
              {site.shortName}
            </span>
            <span className="text-muted-foreground block text-[10px] sm:text-xs italic truncate">
              {site.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation — Top-level individual links */}
        <nav className="hidden items-center gap-0.5 xl:flex shrink-0">
          {mainNavItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: 'exact' in item ? item.exact : false }}
              activeProps={{ className: 'text-primary bg-secondary font-bold' }}
              className="text-foreground/80 hover:bg-secondary hover:text-primary rounded-md px-2.5 py-1.5 text-xs lg:text-sm font-semibold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          className="xl:hidden shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <nav
        className={cn(
          'border-border border-t px-4 py-3 bg-background xl:hidden',
          open ? 'flex flex-col gap-1' : 'hidden',
        )}
      >
        {mainNavItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: 'exact' in item ? item.exact : false }}
            activeProps={{ className: 'text-primary bg-secondary font-bold' }}
            className="text-foreground/90 hover:bg-secondary hover:text-primary rounded-md px-3 py-2 text-sm font-semibold block w-full transition-colors"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
