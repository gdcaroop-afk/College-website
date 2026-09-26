/**
 * Sourced from the Higher Education Department, Punjab public program
 * listing for this college (institute_id=929). Update here if the college
 * office confirms changes.
 */

export type Program = {
  slug: string
  level: string
  category: 'intermediate' | 'diploma' | 'bachelor'
  title: string
  duration: string
  subjects?: string[]
  note?: string
}

export const programs: Program[] = [
  // Intermediate Programs
  {
    slug: 'fsc-pre-medical',
    level: 'Intermediate',
    category: 'intermediate',
    title: 'F.Sc. Pre-Medical',
    duration: '2 years',
    subjects: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    slug: 'fsc-pre-engineering',
    level: 'Intermediate',
    category: 'intermediate',
    title: 'F.Sc. Pre-Engineering',
    duration: '2 years',
    subjects: ['Mathematics', 'Chemistry', 'Physics'],
  },
  {
    slug: 'ics-physics',
    level: 'Intermediate',
    category: 'intermediate',
    title: 'ICS (Physics)',
    duration: '2 years',
    subjects: ['Physics', 'Mathematics', 'Computer Science'],
  },
  {
    slug: 'ics-statistics',
    level: 'Intermediate',
    category: 'intermediate',
    title: 'ICS (Statistics)',
    duration: '2 years',
    subjects: ['Statistics', 'Mathematics', 'Computer Science'],
  },
  {
    slug: 'fa-humanities-arts',
    level: 'Intermediate',
    category: 'intermediate',
    title: 'F.A. (Arts / Humanities)',
    duration: '2 years',
    subjects: ['Civics', 'Education', 'Health & Physical Education', 'Islamiat', 'Punjabi', 'Economics'],
  },
  {
    slug: 'fa-it',
    level: 'Intermediate',
    category: 'intermediate',
    title: 'F.A. IT',
    duration: '2 years',
    subjects: ['Computer Science', 'Economics', 'Civics', 'Humanities'],
  },
  {
    slug: 'icom',
    level: 'Intermediate',
    category: 'intermediate',
    title: 'I.Com (Commerce)',
    duration: '2 years',
    subjects: ['Principles of Accounting', 'Principles of Commerce', 'Economics', 'Business Math'],
  },
  // Technical & Diploma Programs
  {
    slug: 'dcom',
    level: 'Diploma',
    category: 'diploma',
    title: 'D.Com (Diploma in Commerce)',
    duration: '2 years',
    subjects: ['Financial Accounting', 'Business Communication', 'Office Practice', 'Computer & IT Skills'],
  },
  {
    slug: 'dit',
    level: 'Diploma',
    category: 'diploma',
    title: 'DIT (Diploma in Information Technology)',
    duration: '2 years',
    note: '2 years semester system',
    subjects: ['Web Development', 'Database Management', 'Office Automation', 'Networking', 'Operating Systems'],
  },
  // Bachelors Programs
  {
    slug: 'bs-computer-science',
    level: 'Bachelor (BS)',
    category: 'bachelor',
    title: 'BS CS (Computer Science)',
    duration: '4 years (8 semesters)',
    subjects: ['Programming Fundamentals', 'Data Structures & Algorithms', 'Database Systems', 'Software Engineering', 'Artificial Intelligence'],
  },
  {
    slug: 'bs-english',
    level: 'Bachelor (BS)',
    category: 'bachelor',
    title: 'BS English',
    duration: '4 years (8 semesters)',
    subjects: ['Linguistics', 'English Literature', 'Phonetics & Phonology', 'Discourse Analysis', 'Creative Writing'],
  },
  {
    slug: 'bs-chemistry',
    level: 'Bachelor (BS)',
    category: 'bachelor',
    title: 'BS Chemistry',
    duration: '4 years (8 semesters)',
    subjects: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Biochemistry'],
  },
  {
    slug: 'bs-commerce',
    level: 'Bachelor (BS)',
    category: 'bachelor',
    title: 'BS Commerce',
    duration: '4 years (8 semesters)',
    subjects: ['Advanced Accounting', 'Financial Management', 'Business Law', 'Auditing & Taxation', 'Managerial Economics'],
  },
]

export const programsPendingConfirmation: Program[] = []

