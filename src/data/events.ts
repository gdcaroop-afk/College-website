import independenceDay from '@/assets/14_august_event.jpg'
import sportsDay from '@/assets/sport_day_event.jpg'
import plantationDay from '@/assets/plantation_day.jpg'
import dengueSeminar from '@/assets/dengue_seminar.jpg'
import covidDrive from '@/assets/covid_19_pandemic.jpg'
import thalassemiaCamp from '@/assets/thelsemia_camp_sunds_foundation.jpg'
import voiceOfPunjab from '@/assets/voice_of_punjab.jpg'
import orientation from '@/assets/welcome_orientation.jpg'
import ramzanSeminar from '@/assets/ramzan_kareem_seminar.jpg'

export type EventItem = {
  id: string
  title: string
  date?: string
  time?: string
  venue?: string
  category: 'Ceremony' | 'Sports' | 'Awareness' | 'Welfare' | 'Academic'
  summary: string
  description?: string
  image: string
}

// Events sorted date-wise with the most close/recent date at the top
export const events: EventItem[] = [
  {
    id: 'plantation-day',
    title: 'Plantation Day — Clean & Green Pakistan Campaign',
    date: 'March 15, 2025',
    time: '10:00 AM – 01:00 PM',
    venue: 'Campus Precincts & Gardens',
    category: 'Awareness',
    summary:
      'Students and faculty planted saplings on campus as part of a "Clean & Green Pakistan" awareness drive.',
    description:
      'To promote environmental conservation and campus greening, the faculty and student green club planted over 150 indigenous tree saplings across the college grounds and surrounding garden pathways.',
    image: plantationDay,
  },
  {
    id: 'sports-day',
    title: 'Inter-Collegiate Sports Gala & Athletics Championship',
    date: 'February 20, 2025',
    time: '09:00 AM – 03:00 PM',
    venue: 'College Athletic Grounds',
    category: 'Sports',
    summary:
      'College teams took part in an inter-collegiate sports gala, including cricket, athletics and field events.',
    description:
      'Students across intermediate and undergraduate programs competed in cricket, football, badminton, relay races, and tug-of-war. Medals and trophies were awarded to top performers during the closing award distribution ceremony.',
    image: sportsDay,
  },
  {
    id: 'thalassemia-camp',
    title: 'Thalassemia Awareness & Voluntary Blood Donation Camp',
    date: 'November 12, 2024',
    time: '09:00 AM – 02:00 PM',
    venue: 'College Main Hall',
    category: 'Welfare',
    summary:
      'A blood donation camp held on campus in collaboration with the Sundas Foundation to support thalassemia patients.',
    description:
      'Organized in collaboration with Sundas Foundation, student volunteers and faculty donated voluntary blood units to assist children suffering from thalassemia and blood disorders.',
    image: thalassemiaCamp,
  },
  {
    id: 'dengue-seminar',
    title: 'Anti-Dengue Awareness Seminar & Public Health Walk',
    date: 'October 05, 2024',
    time: '10:30 AM – 12:30 PM',
    venue: 'Auditorium',
    category: 'Awareness',
    summary:
      'An awareness seminar and campus walk on dengue prevention, organized by the college.',
    description:
      'Medical experts and faculty members conducted an awareness seminar detailing mosquito larva identification, stagnant water elimination, and personal protective hygiene measures.',
    image: dengueSeminar,
  },
  {
    id: 'orientation',
    title: 'Welcome & Orientation for First Year Students',
    date: 'September 10, 2024',
    time: '09:00 AM – 12:00 PM',
    venue: 'Auditorium',
    category: 'Academic',
    summary: 'An orientation session welcoming newly admitted first-year students to the college.',
    description:
      'Principal and department heads welcomed the new intake of BS and Intermediate students, introducing college policies, academic curricula, library usage, and campus facilities.',
    image: orientation,
  },
  {
    id: 'independence-day',
    title: 'Independence Day Flag-Hoisting Ceremony',
    date: 'August 14, 2024',
    time: '08:30 AM – 11:30 AM',
    venue: 'College Main Entrance Lawn',
    category: 'Ceremony',
    summary:
      'Faculty and students gathered for the flag-hoisting ceremony at the college entrance to mark Pakistan’s Independence Day.',
    description:
      'The 78th Independence Day of Pakistan was celebrated with patriotic fervor at Govt. Graduate College Aroop. Principal, faculty members, and students participated in the flag hoisting ceremony followed by national songs, declamation speeches, and tree plantation on campus grounds.',
    image: independenceDay,
  },
  {
    id: 'voice-of-punjab',
    title: 'Voice of Punjab Cultural & Literary Declamation',
    date: 'May 10, 2024',
    time: '11:00 AM – 02:00 PM',
    venue: 'Main Auditorium',
    category: 'Academic',
    summary:
      'An informational session held at the college in collaboration with Voice of Punjab.',
    description:
      'Students demonstrated public speaking and poetic expression during the regional declamation contest celebrating cultural heritage, literature, and youth leadership.',
    image: voiceOfPunjab,
  },
  {
    id: 'ramzan-seminar',
    title: 'Ramzan Kareem Seminar & Ethics Workshop',
    date: 'March 20, 2024',
    time: '10:00 AM – 12:00 PM',
    venue: 'Mosque Hall',
    category: 'Awareness',
    summary: 'An awareness seminar held with students during Ramzan-ul-Mubarak.',
    description:
      'An uplifting session on moral ethics, spiritual discipline, and academic devotion during the holy month of Ramzan.',
    image: ramzanSeminar,
  },
  {
    id: 'covid-precautions',
    title: 'COVID-19 Precautionary Measures & Health Awareness',
    date: 'April 15, 2022',
    category: 'Welfare',
    summary: 'The college observed standard precautionary measures (masks, distancing) during the COVID-19 pandemic.',
    description:
      'Campus-wide sanitization, mask distribution, and social distancing guidelines observed to protect students during the public health drive.',
    image: covidDrive,
  },
]
