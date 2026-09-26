/**
 * Real college events/activities, illustrated with real photos supplied by
 * the college. Dates are included only where visible directly in a photo's
 * own timestamp/banner — otherwise omitted rather than guessed.
 */

import independenceDay from '@/assets/14_august_event.jpg'
import sportsDay from '@/assets/sport_day_event.jpg'
import plantationDay from '@/assets/plantation_day.jpg'
import dengueSeminar from '@/assets/dengue_seminar.jpg'
import covidDrive from '@/assets/covid_19_pandemic.jpg'
import thalassemiaCamp from '@/assets/thelsemia_camp_sunds_foundation.jpg'
import voiceOfPunjab from '@/assets/voice_of_punjab.jpg'
import orientation from '@/assets/welcome_orientation.jpg'
import ramzanSeminar from '@/assets/ramzan_kareem_seminar.jpg'
import ptmNotice from '@/assets/ptm.jpg'

export type EventItem = {
  id: string
  title: string
  date?: string
  category: 'Ceremony' | 'Sports' | 'Awareness' | 'Welfare' | 'Academic'
  summary: string
  image: string
}

export const events: EventItem[] = [
  {
    id: 'independence-day',
    title: 'Independence Day Flag-Hoisting Ceremony',
    date: 'August 14, 2024',
    category: 'Ceremony',
    summary:
      'Faculty and students gathered for the flag-hoisting ceremony at the college entrance to mark Pakistan’s Independence Day.',
    image: independenceDay,
  },
  {
    id: 'sports-day',
    title: 'Inter-Collegiate Sports Day',
    category: 'Sports',
    summary:
      'College teams took part in an inter-collegiate sports gala, including cricket, athletics and field events.',
    image: sportsDay,
  },
  {
    id: 'plantation-day',
    title: 'Plantation Day — Green Pakistan Campaign',
    category: 'Awareness',
    summary:
      'Students and faculty planted saplings on campus as part of a "Clean & Green Pakistan" awareness drive.',
    image: plantationDay,
  },
  {
    id: 'thalassemia-camp',
    title: 'Thalassemia Awareness & Blood Donation Camp',
    category: 'Welfare',
    summary:
      'A blood donation camp held on campus in collaboration with the Sunds Foundation to support thalassemia patients.',
    image: thalassemiaCamp,
  },
  {
    id: 'dengue-seminar',
    title: 'Dengue Awareness Seminar',
    category: 'Awareness',
    summary:
      'An awareness seminar and campus walk on dengue prevention, organized by the college.',
    image: dengueSeminar,
  },
  {
    id: 'voice-of-punjab',
    title: 'Voice of Punjab Program',
    category: 'Academic',
    summary:
      'An informational session held at the college in collaboration with Voice of Punjab.',
    image: voiceOfPunjab,
  },
  {
    id: 'orientation',
    title: 'Welcome & Orientation for First Year Students',
    category: 'Academic',
    summary: 'An orientation session welcoming newly admitted first-year students to the college.',
    image: orientation,
  },
  {
    id: 'ramzan-seminar',
    title: 'Ramzan Kareem Seminar',
    category: 'Awareness',
    summary: 'An awareness seminar held with students during Ramzan-ul-Mubarak.',
    image: ramzanSeminar,
  },
  {
    id: 'covid-precautions',
    title: 'COVID-19 Precautionary Measures',
    category: 'Welfare',
    summary: 'The college observed standard precautionary measures (masks, distancing) during the COVID-19 pandemic.',
    image: covidDrive,
  },
  {
    id: 'ptm',
    title: 'Parent Teacher Meeting (PTM)',
    category: 'Academic',
    summary: 'A Parent Teacher Meeting organized by the college, notified via HED Punjab-format notices.',
    image: ptmNotice,
  },
]
