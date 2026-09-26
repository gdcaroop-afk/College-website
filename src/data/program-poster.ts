export type PosterContent = {
  shortTitle: string
  subtitle: string
  partner: 'uog' | 'hed'
}

/**
 * Poster copy per program, keyed by slug. `partner` reflects the real
 * affiliation: BS degrees are affiliated with UOG (which sets the
 * curriculum and awards the degree); Intermediate/Associate programs sit
 * under HED Punjab only.
 */
export const programPoster: Record<string, PosterContent> = {
  'fsc-pre-medical': { shortTitle: 'Pre-Medical', subtitle: '2 Year Program · F.Sc', partner: 'hed' },
  'fsc-pre-engineering': { shortTitle: 'Pre-Engineering', subtitle: '2 Year Program · F.Sc', partner: 'hed' },
  'ics-physics': { shortTitle: 'ICS Physics', subtitle: '2 Year Program · ICS', partner: 'hed' },
  'ics-statistics': { shortTitle: 'ICS Stats', subtitle: '2 Year Program · ICS', partner: 'hed' },
  'fa-humanities-arts': { shortTitle: 'Arts / F.A.', subtitle: '2 Year Program · F.A', partner: 'hed' },
  'fa-it': { shortTitle: 'F.A. IT', subtitle: '2 Year Program · F.A IT', partner: 'hed' },
  'icom': { shortTitle: 'I.Com', subtitle: '2 Year Program · Commerce', partner: 'hed' },
  'dcom': { shortTitle: 'D.Com', subtitle: '2 Year Diploma · Commerce', partner: 'hed' },
  'dit': { shortTitle: 'DIT', subtitle: '2 Year Diploma · Semester System', partner: 'hed' },
  'bs-computer-science': { shortTitle: 'Computer Science', subtitle: '4 Year Program · BS CS', partner: 'uog' },
  'bs-english': { shortTitle: 'English', subtitle: '4 Year Program · BS English', partner: 'uog' },
  'bs-chemistry': { shortTitle: 'Chemistry', subtitle: '4 Year Program · BS Chemistry', partner: 'uog' },
  'bs-commerce': { shortTitle: 'Commerce', subtitle: '4 Year Program · BS Commerce', partner: 'uog' },
}
