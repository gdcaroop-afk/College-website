import { site } from '@/data/site'

export type ProgramDetail = {
  overview: string
  facts: { label: string; value: string }[]
  breakdown?: { label: string; value: string }[]
  sources: { label: string; url: string }[]
}

/**
 * Deep program details. For the two BS programs (affiliated with UOG),
 * this is UOG's own published curriculum spec for the degree — the
 * official structure this college's affiliated program must follow.
 * For Intermediate/Associate programs, detail is limited to what HED
 * Punjab's public listing confirms; nothing beyond that is asserted.
 */
export const programDetails: Record<string, ProgramDetail> = {
  'bs-computer-science': {
    overview:
      "BS Computer Science is a four-year degree affiliated with the University of Gujrat (UOG), which sets the curriculum, examinations, and awards the degree. The curriculum follows NCEAC (National Computing Education Accreditation Council) guidelines.",
    facts: [
      { label: 'Duration', value: '4 years (8 semesters)' },
      { label: 'Credit hours', value: '134–137 Cr (per UOG’s current curriculum)' },
      {
        label: 'Eligibility (per UOG)',
        value: 'Min. 50% marks in Intermediate (Pre-Medical/Pre-Engineering/Science), ICS, or a 3-year PBTE diploma with Math & CS',
      },
    ],
    breakdown: [
      { label: 'Major/disciplinary courses', value: '~64%' },
      { label: 'General education', value: '~20%' },
      { label: 'Capstone project', value: '~4%' },
      { label: 'Internship/field experience', value: '~2%' },
    ],
    sources: [
      { label: 'UOG — Department of Computer Science, Programs', url: 'https://uog.edu.pk/en/uog-academics/department-of-computer-science/programs' },
      { label: 'University of Gujrat — official website', url: 'https://uog.edu.pk/' },
    ],
  },
  'bs-english': {
    overview:
      "BS English is a four-year degree affiliated with the University of Gujrat (UOG). The program covers linguistics, literature, phonetics, discourse analysis and world literature across eight semesters.",
    facts: [
      { label: 'Duration', value: '4 years (8 semesters)' },
      { label: 'Credit hours', value: '135 Cr (137 Cr for ADP entry at semester 5)' },
      {
        label: 'Eligibility (per UOG)',
        value: 'Min. 45% marks in Intermediate/equivalent (Pre-Engineering, Pre-Medical, Commerce, ICS or a recognized DAE)',
      },
    ],
    breakdown: [
      { label: 'Major/core courses', value: '90 Cr (~67%)' },
      { label: 'General education', value: '30 Cr (~22%)' },
      { label: 'Interdisciplinary/allied', value: '9 Cr (~7%)' },
      { label: 'Internship + capstone', value: '6 Cr (~4%)' },
    ],
    sources: [
      { label: 'UOG — Department of English, Programs', url: 'https://uog.edu.pk/uog-academics/department-of-english/programs' },
      { label: 'University of Gujrat — official website', url: 'https://uog.edu.pk/' },
    ],
  },
  'fsc-pre-medical': {
    overview:
      'F.Sc. (Pre-Medical) is a two-year intermediate program covering Biology, Chemistry and Physics, administered under the Higher Education Department, Punjab.',
    facts: [
      { label: 'Duration', value: '2 years' },
      { label: 'Subjects', value: 'Biology, Chemistry, Physics' },
    ],
    sources: [{ label: `${site.governance.department} — program listing`, url: site.governance.hepUrl }],
  },
  'ics-general-science': {
    overview:
      'ICS (Intermediate in Computer Science) is a two-year intermediate program covering Physics, Mathematics and Computer Science, administered under the Higher Education Department, Punjab.',
    facts: [
      { label: 'Duration', value: '2 years' },
      { label: 'Subjects', value: 'Physics, Mathematics, Computer Science' },
    ],
    sources: [{ label: `${site.governance.department} — program listing`, url: site.governance.hepUrl }],
  },
  'fa-humanities-arts': {
    overview:
      'F.A. (Humanities/Arts) is a two-year intermediate program with multiple subject combinations, administered under the Higher Education Department, Punjab.',
    facts: [
      { label: 'Duration', value: '2 years' },
      {
        label: 'Subject options',
        value: 'Civics, Computer Science, Health & Physical Education, Education, Library Science, Islamiat, Punjabi',
      },
    ],
    sources: [{ label: `${site.governance.department} — program listing`, url: site.governance.hepUrl }],
  },
}
