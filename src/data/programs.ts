/**
 * Sourced from the Higher Education Department, Punjab public program
 * listing for this college (institute_id=929). Update here if the college
 * office confirms changes.
 */

export type Program = {
  slug: string
  level: string
  title: string
  duration: string
  subjects?: string[]
  note?: string
}

export const programs: Program[] = [
  {
    slug: 'associate-degree-arts',
    level: 'Undergraduate (Associate/BA)',
    title: 'Associate Degree Programme in Arts',
    duration: '2 years',
  },
  {
    slug: 'fa-humanities-arts',
    level: 'Intermediate',
    title: 'F.A. (Humanities/Arts)',
    duration: '2 years',
    subjects: [
      'Civics',
      'Computer Science',
      'Health & Physical Education',
      'Education',
      'Library Science',
      'Islamiat',
      'Punjabi',
    ],
  },
  {
    slug: 'fsc-pre-medical',
    level: 'Intermediate (Pre-Medical)',
    title: 'F.Sc. (Pre-Medical)',
    duration: '2 years',
    subjects: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    slug: 'ics-general-science',
    level: 'Intermediate (Computer Science)',
    title: 'ICS — General Science',
    duration: '2 years',
    subjects: ['Physics', 'Mathematics', 'Computer Science'],
  },
  {
    slug: 'bs-computer-science',
    level: 'Bachelor (BS)',
    title: 'BS Computer Science',
    duration: '4 years',
  },
  {
    slug: 'bs-english',
    level: 'Bachelor (BS)',
    title: 'BS English',
    duration: '4 years',
  },
]

// Listed in UOG's affiliation records but not yet confirmed on the HED
// Punjab program listing — shown separately pending confirmation.
export const programsPendingConfirmation: Program[] = [
  {
    slug: 'bs-commerce',
    level: 'Bachelor (BS)',
    title: 'BS Commerce',
    duration: '4 years',
    note: 'Listed in University of Gujrat affiliation records — to be confirmed with the college office.',
  },
]
