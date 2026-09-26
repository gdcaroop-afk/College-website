/**
 * Central, editable source of truth for official college information.
 * Every field here is either sourced from an official record (HED Punjab,
 * University of Gujrat, Google Maps) or explicitly marked as a placeholder
 * for the college administration to confirm/replace. Do not invent values —
 * add a `TODO_CONFIRM` note instead.
 */

export const site = {
  name: 'Govt. Graduate College Aroop, Gujranwala',
  shortName: 'GGC Aroop',
  domain: 'ggca-grw.edu.pk',
  url: 'https://ggca-grw.edu.pk',
  tagline: 'العلم النور — Knowledge is Light',
  address: {
    line1: 'Aroop, Gujranwala',
    line2: 'Punjab, Pakistan',
    // Coordinates confirmed via the college's official Google Maps listing.
    lat: 32.2035219,
    lng: 74.1787374,
    mapsUrl: 'https://maps.app.goo.gl/uqVRvKGKCmCPTBPm6',
  },
  contact: {
    // Two different phone numbers appear across official public records —
    // shown here with their source so the college can confirm the correct
    // one before this is treated as final.
    phones: [
      { number: '055-3494000', source: 'University of Gujrat affiliation records' },
      { number: '0331-6474947', source: 'University of Gujrat affiliation records' },
    ],
    email: 'gdc.aroop@gmail.com',
  },
  social: {
    facebook: 'https://www.facebook.com/ggc.aroop',
    instagram: 'https://www.instagram.com/ggca.aroop',
  },
  affiliation: {
    university: 'University of Gujrat (UOG)',
    universityUrl: 'https://uog.edu.pk/public-sector-colleges-affiliation',
    note:
      'Listed among UOG-affiliated public sector colleges. Public records show minor naming variation ("Govt. Associate College, Aroop") between the Higher Education Department Punjab listing and the UOG affiliation list — both refer to this institution at the same Aroop, Gujranwala location.',
  },
  governance: {
    department: 'Higher Education Department, Government of the Punjab',
    hepUrl:
      'https://hep.punjab.gov.pk/Publicprograms/institute_detail/?institute_id=929&subject_id=3335',
  },
  gender: 'Co-education',
} as const
