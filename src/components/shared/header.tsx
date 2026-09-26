import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

import { LogoMark } from '@/components/shared/logo-mark'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News & Events' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

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
          <span className="leading-tight">
            <span className="font-heading text-primary block text-sm font-bold sm:text-base">
              {site.name}
            </span>
            <span className="text-muted-foreground block text-xs">
              {site.address.line1}, {site.address.line2}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
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
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === '/' }}
            activeProps={{ className: 'text-primary bg-secondary' }}
            className="text-foreground/80 hover:bg-secondary hover:text-primary rounded-md px-3 py-2 text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
