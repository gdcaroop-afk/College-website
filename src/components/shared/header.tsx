import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

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
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background/95 border-border sticky top-0 z-50 border-b backdrop-blur">
      {/* Top strip — official identity bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6">
          <span className="truncate">
            {site.governance.department}
          </span>
          <span className="hidden truncate sm:block">{site.domain}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="leading-tight">
            <span className="font-heading text-primary block text-base font-bold sm:text-lg">
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
