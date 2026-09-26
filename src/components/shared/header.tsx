import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

import { LogoMark } from '@/components/shared/logo-mark'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const aboutDropdown = [
  { to: '/about', label: 'About Us' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/academics', label: 'Academics' },
  { to: '/faculty', label: 'Faculty & Staff' },
  { to: '/gallery', label: 'Campus & Facilities' },
] as const

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/academics', label: 'Academics' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News & Events' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="bg-background/95 border-border sticky top-0 z-50 border-b backdrop-blur">
      {/* Top utility bar — contact info + social */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 text-xs sm:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-accent flex items-center gap-1.5 truncate"
            >
              <Mail className="size-3.5 shrink-0" />
              <span className="truncate">{site.contact.email}</span>
            </a>
            <a
              href={`tel:${site.contact.phones[0]?.number}`}
              className="hover:text-accent hidden items-center gap-1.5 sm:flex"
            >
              <Phone className="size-3.5 shrink-0" />
              {site.contact.phones[0]?.number}
            </a>
            <span className="hidden items-center gap-1.5 truncate md:flex">
              <MapPin className="size-3.5 shrink-0" />
              <span className="truncate">
                {site.address.line1}, {site.address.line2}
              </span>
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
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

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="text-center leading-tight">
            <span className="font-heading text-primary block text-base font-bold sm:text-lg">
              {site.shortName}
            </span>
            <span className="text-muted-foreground block text-xs italic">{site.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: 'text-primary bg-secondary' }}
            className="text-foreground/80 hover:bg-secondary hover:text-primary rounded-md px-3 py-2 text-sm font-medium transition-colors"
          >
            Home
          </Link>

          <div
            className="group relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Link
              to="/about"
              activeProps={{ className: 'text-primary bg-secondary' }}
              className="text-foreground/80 hover:bg-secondary hover:text-primary flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              About
              <ChevronDown className="size-3.5" />
            </Link>
            <div
              className={cn(
                'border-border bg-card absolute left-0 top-full w-56 rounded-md border pt-1 shadow-lg transition-all duration-150',
                aboutOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-1 opacity-0',
              )}
            >
              <div className="flex flex-col p-1.5">
                {aboutDropdown.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-foreground/80 hover:bg-secondary hover:text-primary rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: 'text-primary bg-secondary' }}
              className="text-foreground/80 hover:bg-secondary hover:text-primary rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      <nav
        className={cn(
          'border-border grid gap-1 border-t px-4 py-3 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <Link
          to="/"
          activeOptions={{ exact: true }}
          activeProps={{ className: 'text-primary bg-secondary' }}
          className="text-foreground/80 hover:bg-secondary hover:text-primary rounded-md px-3 py-2 text-sm font-medium"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>

        <span className="text-muted-foreground mt-1 px-3 text-xs font-semibold tracking-wide uppercase">
          About
        </span>
        {aboutDropdown.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            activeProps={{ className: 'text-primary bg-secondary' }}
            className="text-foreground/80 hover:bg-secondary hover:text-primary rounded-md px-3 py-2 pl-6 text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <div className="border-border mt-1 border-t pt-1">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: 'text-primary bg-secondary' }}
              className="text-foreground/80 hover:bg-secondary hover:text-primary rounded-md px-3 py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
