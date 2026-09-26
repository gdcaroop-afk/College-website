/**
 * Sourced from the Higher Education Department, Punjab public program
 * listing for this college (institute_id=929). Update here if the college
 * office confirms changes.
 */

export type Program = {
  level: string
  title: string
  duration: string
  subjects?: string[]
  note?: string
}

export const programs: Program[] = [
  {
    level: 'Undergraduate (Associate/BA)',
    title: 'Associate Degree Programme in Arts',
    duration: '2 years',
  },
  {
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
    level: 'Intermediate (Pre-Medical)',
    title: 'F.Sc. (Pre-Medical)',
    duration: '2 years',
    subjects: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    level: 'Intermediate (Computer Science)',
    title: 'ICS — General Science',
    duration: '2 years',
    subjects: ['Physics', 'Mathematics', 'Computer Science'],
  },
  {
    level: 'Bachelor (BS)',
    title: 'BS Computer Science',
    duration: '4 years',
  },
  {
    level: 'Bachelor (BS)',
    title: 'BS English',
    duration: '4 years',
  },
]

// Listed in UOG's affiliation records but not yet confirmed on the HED
// Punjab program listing — shown separately pending confirmation.
export const programsPendingConfirmation: Program[] = [
  {
    level: 'Bachelor (BS)',
    title: 'BS Commerce',
    duration: '4 years',
    note: 'Listed in University of Gujrat affiliation records — to be confirmed with the college office.',
  },
]
