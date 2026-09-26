import { site } from '@/data/site'
import { programs } from '@/data/programs'

export type HighlightDetail = {
  slug: string
  title: string
  summary: string
  imageKind: 'hed-logo' | 'uog-logo' | 'arts-science' | 'co-education'
  body: string[]
  sources: { label: string; url: string }[]
}

export const highlights: HighlightDetail[] = [
  {
    slug: 'public-sector-institution',
    title: 'Public Sector Institution',
    summary: site.governance.department,
    imageKind: 'hed-logo',
    body: [
      `${site.name} is a public sector college administered under the ${site.governance.department}. As a government college, it follows HED Punjab's academic calendar, staffing, and admission policies for public colleges across the province.`,
      'The college is listed on the HED Punjab public programs portal, which records its officially offered programs, contact details and institutional status.',
    ],
    sources: [{ label: 'Official HED Punjab listing for this college', url: site.governance.hepUrl }],
  },
  {
    slug: 'uog-affiliation',
    title: 'UOG Affiliated',
    summary: `Degree programs affiliated with the ${site.affiliation.university}`,
    imageKind: 'uog-logo',
    body: [
      `Bachelor's degree programs at ${site.name} are affiliated with the ${site.affiliation.university} (UOG), meaning UOG sets the curriculum and awards the degree, while the college provides teaching and facilities.`,
      site.affiliation.note,
    ],
    sources: [
      { label: 'UOG public sector colleges affiliation list', url: site.affiliation.universityUrl },
      { label: 'University of Gujrat — official website', url: 'https://uog.edu.pk/' },
    ],
  },
  {
    slug: 'arts-science-programs',
    title: 'Arts, Science & CS',
    summary: 'Intermediate and BS programs across multiple disciplines',
    imageKind: 'arts-science',
    body: [
      `${site.name} offers a mix of Intermediate and Bachelor's programs spanning Arts, Pre-Medical Science, and Computer Science:`,
      programs.map((p) => `${p.title} (${p.duration})`).join(' · '),
      'Intermediate programs are administered under the HED Punjab framework, while the BS programs (Computer Science and English) are affiliated with the University of Gujrat.',
    ],
    sources: [{ label: 'HED Punjab program listing for this college', url: site.governance.hepUrl }],
  },
  {
    slug: 'co-education',
    title: site.gender,
    summary: 'Serving students of Aroop and the surrounding Gujranwala area',
    imageKind: 'co-education',
    body: [
      `The HED Punjab public programs portal lists this college's gender category as "Co-education (Both)."`,
      'However, several of the college’s own event banners (Independence Day, Sports Day) identify it as "Govt. Graduate College Boys, Aroop Gujranwala," and the University of Gujrat’s affiliation records list it as "Govt. Associate College (Boys), Aroop." This is a genuine discrepancy across official sources.',
      'This section will be updated with a single confirmed status once verified directly with the college administration — we are intentionally not picking one source over another without confirmation.',
    ],
    sources: [
      { label: 'HED Punjab listing (Gender: Co-education/Both)', url: site.governance.hepUrl },
      { label: 'UOG affiliation list (lists "Boys")', url: site.affiliation.universityUrl },
    ],
  },
]
