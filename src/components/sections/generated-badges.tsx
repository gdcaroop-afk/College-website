/**
 * No official logo exists for these two concepts (unlike HED Punjab and
 * UOG, which have real logos in src/assets). These are simple emblem-style
 * graphics generated in code, using only colors drawn from the college
 * seal (forest green + gold), so the four highlight cards read consistently
 * as a row of "badges" without inventing a fake third-party logo.
 */

export function ArtsScienceBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <path
        d="M20 40c0-8 5-14 12-14s12 6 12 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="16" y="18" width="10" height="13" rx="1" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M26 18l6-3 6 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="42" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M42 19v-3M45.5 26.5l2 2M38.5 26.5l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CoEducationBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <circle cx="24" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M15 42c1-7 4-11 9-11s8 4 9 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="41" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 42c1-7 4-11 9-11s8 4 9 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
