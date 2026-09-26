import augustEvent from '@/assets/14_august_event.jpg'
import sportsEvent from '@/assets/sport_day_event.jpg'
import thalassemiaEvent from '@/assets/thelsemia_camp_sunds_foundation.jpg'
import dengueEvent from '@/assets/dengue_seminar.jpg'
import orientationEvent from '@/assets/welcome_orientation.jpg'
import ramzanEvent from '@/assets/ramzan_kareem_seminar.jpg'
import voicePunjabEvent from '@/assets/voice_of_punjab.jpg'
import plantationEvent from '@/assets/plantation_day.jpg'

export type NewsItem = {
  id: string
  title: string
  date: string
  time?: string
  venue?: string
  category: 'Announcement' | 'Event' | 'Seminar' | 'Sports' | 'Academic'
  image: string
  summary: string
  description: string
  highlights?: string[]
}

export const newsItems: NewsItem[] = [
  {
    id: 'orientation-ceremony-2026',
    title: 'Orientation Ceremony & Welcome Session for New BS & Intermediate Batches',
    date: 'September 15, 2026',
    time: '09:00 AM – 12:30 PM',
    venue: 'College Main Auditorium',
    category: 'Academic',
    image: orientationEvent,
    summary: 'Govt. Graduate College Aroop organized an orientation ceremony to welcome the newly enrolled students of BS and Intermediate programs for the session 2026-2027.',
    description: 'The institution hosted a grand welcome orientation session for the incoming students of BS Computer Science, BS English, BS Chemistry, BS Commerce, F.Sc, ICS, and F.A. Principal Prof. Dr. Khurram Shahzad and faculty members briefed students on academic policies, examination rules, library facilities, laboratory guidelines, and co-curricular opportunities.',
    highlights: [
      'Address by Principal Prof. Dr. Khurram Shahzad on academic discipline & success',
      'Introduction of Department Heads and Faculty Coordinators',
      'Overview of college facilities, library resources, and science/computer laboratories',
      'Guidance on semester system rules and attendance policies',
    ],
  },
  {
    id: 'independence-day-celebration',
    title: 'Flag Hoisting Ceremony & Cultural Performances on 79th Independence Day',
    date: 'August 14, 2026',
    time: '08:30 AM – 11:30 AM',
    venue: 'College Campus Grounds',
    category: 'Event',
    image: augustEvent,
    summary: 'Students and faculty members celebrated Independence Day with national enthusiasm, flag hoisting, patriotic speeches, and national songs.',
    description: 'The 79th Independence Day of Pakistan was celebrated with patriotic zeal at Govt. Graduate College Aroop. Principal Prof. Dr. Khurram Shahzad hoisted the national flag followed by the National Anthem. Students performed national songs, delivered speeches on national heroes, and participated in a commemorative ceremony.',
    highlights: [
      'Flag hoisting by Principal & Senior Faculty Members',
      'Patriotic speech competition among intermediate and BS students',
      'Distribution of merit certificates to outstanding academic achievers',
      'Planting of remembrance saplings on campus grounds',
    ],
  },
  {
    id: 'annual-sports-gala-2026',
    title: 'Annual Sports Gala & Inter-Departmental Athletics Competition',
    date: 'March 10, 2026',
    time: '08:00 AM – 03:00 PM',
    venue: 'College Sports Grounds',
    category: 'Sports',
    image: sportsEvent,
    summary: 'Annual sports festival featuring cricket, football, badminton, athletics, tug-of-war, and table tennis competitions between departments.',
    description: 'The Annual Sports Gala brought together students across all intermediate and undergraduate disciplines for exciting athletic contests. Students competed in cricket, football, badminton, sprints, tug-of-war, and table tennis. The Commerce & Computer Science departments secured top honors in team sports.',
    highlights: [
      'Inter-departmental cricket and football tournaments',
      'Track and field events including 100m, 200m sprints and relay races',
      'Trophies and medals awarded to winning teams and best athletes',
      'Active participation of faculty members in exhibition matches',
    ],
  },
  {
    id: 'thalassemia-blood-camp',
    title: 'Thalassemia Awareness Seminar & Voluntary Blood Donation Camp',
    date: 'February 18, 2026',
    time: '09:30 AM – 02:00 PM',
    venue: 'College Gymnasium Hall',
    category: 'Seminar',
    image: thalassemiaEvent,
    summary: 'In collaboration with Sundas Foundation, a blood donation drive and thalassemia awareness seminar was held to support blood transfusion for patients.',
    description: 'Govt. Graduate College Aroop partnered with Sundas Foundation to organize a voluntary blood donation camp and medical awareness seminar. Medical specialists educated students on thalassemia prevention, blood screening, and the importance of regular voluntary blood donations.',
    highlights: [
      'Over 120 units of voluntary blood donated by students and faculty',
      'Expert medical lectures on pre-marital thalassemia screening',
      'Free blood group testing for participating students',
      'Certificates of appreciation presented to donor volunteers',
    ],
  },
  {
    id: 'dengue-prevention-seminar',
    title: 'Public Health Seminar & Campus Cleanliness Drive on Dengue Control',
    date: 'November 05, 2025',
    time: '10:00 AM – 12:00 PM',
    venue: 'Auditorium & Campus Precincts',
    category: 'Seminar',
    image: dengueEvent,
    summary: 'Health awareness seminar and campus cleanliness walk conducted to educate students on anti-dengue preventive measures.',
    description: 'The Biology Department organized a comprehensive public health seminar focused on dengue prevention and vector control. Following the lecture, faculty members and student volunteers conducted a campus-wide inspection and cleanliness walk to eliminate stagnant water sites.',
    highlights: [
      'Interactive presentation on mosquito larva detection and elimination',
      'Distribution of anti-dengue informational pamphlets',
      'Campus cleanliness walk led by Vice Principal Prof. Intizar Ahmad',
    ],
  },
  {
    id: 'tree-plantation-drive',
    title: 'Monsoon Tree Plantation Drive & Environmental Conservation Campaign',
    date: 'October 12, 2025',
    time: '09:00 AM – 01:00 PM',
    venue: 'College Lawn & Garden Area',
    category: 'Event',
    image: plantationEvent,
    summary: 'Green Pakistan tree plantation drive held with over 200 saplings planted across the college premises.',
    description: 'To support environmental sustainability and campus beautification, Govt. Graduate College Aroop launched a tree plantation campaign. Faculty members and students planted shade and fruit trees across college lawns.',
    highlights: [
      'Plantation of 200+ indigenous trees and flowering plants',
      'Formation of Student Green Club for plant maintenance',
      'Awareness talk on climate change and environmental responsibility',
    ],
  },
  {
    id: 'voice-of-punjab-contest',
    title: 'Voice of Punjab Literary & Cultural Speech Contest',
    date: 'May 20, 2025',
    time: '10:00 AM – 02:00 PM',
    venue: 'Main Hall',
    category: 'Event',
    image: voicePunjabEvent,
    summary: 'Inter-college declamation and Punjabi poetry competition showcasing student talent in public speaking and regional literature.',
    description: 'The English and Humanities departments organized the "Voice of Punjab" declamation and poetry contest. Students delivered eloquent speeches and recited classical and modern Punjabi poetry, highlighting rich cultural heritage.',
    highlights: [
      'Speeches on literary classics and social development topics',
      'Poetry recitation judged by senior faculty members',
      'Shields and cash prizes awarded to top three position holders',
    ],
  },
  {
    id: 'ramzan-kareem-spiritual-session',
    title: 'Ramzan Mubarak Seminar & Character Building Workshop',
    date: 'March 25, 2025',
    time: '10:30 AM – 12:30 PM',
    venue: 'College Mosque & Auditorium',
    category: 'Seminar',
    image: ramzanEvent,
    summary: 'Spiritual lecture on the blessings of Ramzan, moral discipline, ethics, and character building in student life.',
    description: 'An inspiring seminar was conducted on the occasion of Holy Ramzan, emphasizing moral values, self-discipline, academic integrity, and community service among youth.',
    highlights: [
      'Keynote sermon on ethics, patience, and character building',
      'Q&A session on balancing religious duties with academic studies',
    ],
  },
]

export const news = newsItems
