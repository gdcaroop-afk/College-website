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
  'fa-humanities-arts': { shortTitle: 'Arts', subtitle: '2 Year Program · F.A', partner: 'hed' },
  'fsc-pre-medical': { shortTitle: 'Pre-Medical', subtitle: '2 Year Program · F.Sc', partner: 'hed' },
  'ics-general-science': { shortTitle: 'Computer Science', subtitle: '2 Year Program · ICS', partner: 'hed' },
  'bs-computer-science': { shortTitle: 'Computer Science', subtitle: '4 Year Program · BSCS', partner: 'uog' },
  'bs-english': { shortTitle: 'English', subtitle: '4 Year Program · BSE', partner: 'uog' },
}
