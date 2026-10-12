/**
 * Verified Faculty Directory Data for Govt. Graduate College Aroop, Gujranwala.
 */

import principalPhoto from '@/assets/Principle Khurram Shezad.png'
import vicePrincipalPhoto from '@/assets/Vice Pricciple Prof Interzar.png'
import shabbirPhoto from '@/assets/Prof Shabbir Ahmad.png'
import naveedPhoto from '@/assets/Prof Naveed Ahmad BS coordinator (3).png'
import anwarPhoto from '@/assets/Prof Anwar.png'
import usmanPhoto from '@/assets/Prof Usman.png'
import raufPhoto from '@/assets/Prof Abdul Rauf (Statistics).png'
import aamirPhoto from '@/assets/amirkhalil.png'
import imranPhoto from '@/assets/Imran.png'
import shahidPhoto from '@/assets/Shahid Nawaz.png'
import fakhraPhoto from '@/assets/Fakhra.png'

export type Institution = {
  shortName: string
  fullName: string
  color: string
}

export type FacultyMember = {
  id: string
  name: string
  titlePrefix?: string
  designation: string
  department: string
  qualification: string
  experience: string
  email?: string | string[]
  bps?: string
  employmentType?: 'Regular' | 'Contractee'
  tier: 'principal' | 'senior' | 'faculty' | 'support'
  photo: string
  bio: string
  areasOfStrength: string[]
  institutions: Institution[]
  isPhotoPlaceholder?: boolean
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 'khurram-shahzad',
    name: 'Dr. Khurram Shahzad',
    titlePrefix: 'Dr.',
    designation: 'Principal | Assistant Professor - Physics',
    department: 'Physics',
    qualification: 'Ph.D. Physics (PIEAS) | M.Phil Physics (QAU)',
    experience: '12 Years',
    email: 'khurram-shahzad@ggca-grw.edu.pk',
    bps: 'BPS-18',
    employmentType: 'Regular',
    tier: 'principal',
    photo: principalPhoto,
    bio: 'Dr. Khurram Shahzad provides academic leadership and direction to the institution with a strong background in Physics and higher education. With a Ph.D. in Physics from PIEAS and an M.Phil. in Physics from QAU, he brings advanced subject knowledge and academic insight to the institution. As Principal, he is committed to maintaining academic standards, encouraging a culture of learning, and supporting an environment where students and faculty can achieve their potential.',
    areasOfStrength: [
      'Physics & Scientific Education',
      'Academic Leadership',
      'Curriculum & Academic Development',
      'Student Development',
      'Institutional Planning',
    ],
    institutions: [
      { shortName: 'PIEAS', fullName: 'Pakistan Institute of Engineering and Applied Sciences', color: 'emerald' },
      { shortName: 'QAU', fullName: 'Quaid-i-Azam University Islamabad', color: 'blue' },
    ],
  },
  {
    id: 'intizar-ahmad',
    name: 'Intzar Ahmad',
    titlePrefix: '',
    designation: 'Vice Principal / Lecturer - English',
    department: 'English',
    qualification: 'MS/M.Phil English',
    experience: '30 Years',
    email: 'intzar.ahmad@ggca-grw.edu.pk',
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'senior',
    photo: vicePrincipalPhoto,
    bio: 'With 30 years of teaching experience, Intzar Ahmad brings extensive academic and educational experience to the institution. As Vice Principal and Lecturer in English, he contributes to both academic leadership and classroom education. His long-standing experience enables him to support students in developing language proficiency, communication skills, critical thinking, and academic confidence while contributing to the overall academic environment of the college.',
    areasOfStrength: [
      'English Language',
      'Literature',
      'Communication Skills',
      'Academic Development',
      'Educational Leadership',
    ],
    institutions: [
      { shortName: 'PU', fullName: 'University of the Punjab', color: 'amber' },
    ],
  },
  {
    id: 'shabbir-hussain-butt',
    name: 'Shabbir Hussain Butt',
    titlePrefix: '',
    designation: 'Associate Professor - English',
    department: 'English',
    qualification: 'M.A. English',
    experience: '30 Years',
    email: 'shabbir.hussain@ggca-grw.edu.pk',
    bps: 'BPS-19',
    employmentType: 'Regular',
    tier: 'senior',
    photo: shabbirPhoto,
    bio: "Shabbir Hussain Butt is an experienced English educator with 30 years of teaching experience. As an Associate Professor, he brings extensive classroom knowledge and a deep understanding of English language and literature. His teaching focuses on strengthening students' language abilities, literary appreciation, comprehension, writing, and critical analysis.",
    areasOfStrength: [
      'English Language',
      'English Literature',
      'Literary Analysis',
      'Academic Writing',
      'Communication Skills',
    ],
    institutions: [
      { shortName: 'PU', fullName: 'University of the Punjab', color: 'amber' },
    ],
  },
  {
    id: 'anwaar-ahmad-gulzar',
    name: 'Anwaar Ahmad Gulzar',
    titlePrefix: '',
    designation: 'Lecturer - Education',
    department: 'Education',
    qualification: 'MS/M.Phil Education',
    experience: '13 Years',
    email: 'anwaar.ahmad@ggca-grw.edu.pk',
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'senior',
    photo: anwarPhoto,
    bio: "Anwaar Ahmad Gulzar is an experienced educator with 13 years of academic experience and advanced research-level study in Education. His expertise contributes to the development of students' understanding of educational concepts, learning processes, teaching practices, and educational development.",
    areasOfStrength: [
      'Education',
      'Teaching & Learning',
      'Educational Development',
      'Academic Research',
      'Student Development',
    ],
    institutions: [
      { shortName: 'PU', fullName: 'University of the Punjab', color: 'amber' },
    ],
  },
  {
    id: 'naveed-ahmad',
    name: 'Naveed Ahmad',
    titlePrefix: '',
    designation: 'Lecturer - Biology & BS Coordinator',
    department: 'Biology',
    qualification: 'MS/M.Phil Zoology (VU)',
    experience: '10 Years',
    email: ['naveed.ahmad@ggca-grw.edu.pk', 'coordinater.ssio@ggca-grw.edu.pk'],
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'faculty',
    photo: naveedPhoto,
    bio: 'Naveed Ahmad brings 10 years of teaching experience and advanced academic training in Zoology to the science faculty. His approach focuses on helping students understand biological concepts through clear explanation, conceptual learning, and practical understanding. His academic background supports students studying Biology and related areas of life sciences.',
    areasOfStrength: [
      'Biology',
      'Zoology',
      'Life Sciences',
      'Scientific Learning',
      'Practical & Conceptual Education',
    ],
    institutions: [
      { shortName: 'VU', fullName: 'Virtual University of Pakistan', color: 'indigo' },
    ],
  },
  {
    id: 'dr-muhammad-usman',
    name: 'Dr. Muhammad Usman',
    titlePrefix: 'Dr.',
    designation: 'Lecturer - Commerce',
    department: 'Commerce',
    qualification: 'Ph.D. Scholar (PU) | M.Phil Finance (PU)',
    experience: '10 Years',
    email: 'm.usman@ggca-grw.edu.pk',
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'faculty',
    photo: usmanPhoto,
    bio: 'Dr. Muhammad Usman brings 10 years of teaching experience along with advanced academic training in Finance and Commerce. His academic background enables students to develop a stronger understanding of commerce, finance, accounting-related concepts, and the principles that shape modern business environments.',
    areasOfStrength: [
      'Commerce',
      'Finance',
      'Business Studies',
      'Financial Concepts',
      'Analytical Skills',
    ],
    institutions: [
      { shortName: 'PU', fullName: 'University of the Punjab', color: 'amber' },
    ],
  },
  {
    id: 'abdul-rauf',
    name: 'Abdul Rauf',
    titlePrefix: '',
    designation: 'Lecturer - Statistics',
    department: 'Statistics',
    qualification: 'MS/M.Phil Statistics (QAU)',
    experience: '13 Years',
    email: 'quaidian84@gmail.com',
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'faculty',
    photo: raufPhoto,
    bio: "Abdul Rauf is a Statistics lecturer with 13 years of teaching experience and an M.Phil. in Statistics from Quaid-i-Azam University. He focuses on developing students' understanding of statistical concepts, quantitative reasoning, analytical thinking, and problem-solving.",
    areasOfStrength: [
      'Statistics',
      'Quantitative Analysis',
      'Data Interpretation',
      'Mathematical Reasoning',
      'Problem Solving',
    ],
    institutions: [
      { shortName: 'QAU', fullName: 'Quaid-i-Azam University Islamabad', color: 'blue' },
    ],
  },
  {
    id: 'imran-saeed',
    name: 'Imran Saeed',
    titlePrefix: '',
    designation: 'Lecturer - Political Science',
    department: 'Political Science',
    qualification: 'Masters - Political Science (QAU)',
    experience: '8 Years',
    email: 'imran.saeed@ggca-grw.edu.pk',
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'faculty',
    photo: imranPhoto,
    bio: 'Imran Saeed is a Political Science lecturer who brings a strong academic foundation from Quaid-i-Azam University. His teaching equips students with a thorough understanding of political theories, governance, constitutional frameworks, and contemporary political developments in Pakistan and the world. His approach fosters analytical thinking and civic awareness among students.',
    areasOfStrength: [
      'Political Science',
      'Governance & Constitutionalism',
      'Political Theory',
      'Civic Awareness',
      'Analytical Thinking',
    ],
    institutions: [
      { shortName: 'QAU', fullName: 'Quaid-i-Azam University Islamabad', color: 'blue' },
    ],
  },
  {
    id: 'shahid-nawaz',
    name: 'Shahid Nawaz',
    titlePrefix: '',
    designation: 'Lecturer - Physical Education',
    department: 'Physical Education',
    qualification: 'Masters - Physical Education (PU)',
    experience: '7 Years',
    email: 'shahid.nawaz@ggca-grw.edu.pk',
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'faculty',
    photo: shahidPhoto,
    bio: 'Shahid Nawaz is a dedicated Physical Education lecturer committed to promoting sports, fitness, and physical well-being among students. With a Masters degree from the University of the Punjab, he brings structured sports training, physical fitness programs, and an enthusiasm for athletics that encourages students to lead healthy and active lives both in and outside the college.',
    areasOfStrength: [
      'Physical Education',
      'Sports Training',
      'Fitness & Athletics',
      'Team Building',
      'Student Well-Being',
    ],
    institutions: [
      { shortName: 'PU', fullName: 'University of the Punjab', color: 'amber' },
    ],
  },
  {
    id: 'fakhra-zaib',
    name: 'Fakhra Zaib',
    titlePrefix: '',
    designation: 'Lecturer - Punjabi',
    department: 'Punjabi',
    qualification: 'BS (Hons) - Punjabi (PU)',
    experience: '5 Years',
    email: 'fakhra.zaib@ggca-grw.edu.pk',
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'faculty',
    photo: fakhraPhoto,
    bio: "Fakhra Zaib is a Punjabi language and literature lecturer with a BS (Hons) degree from the University of the Punjab. She plays an important role in preserving and promoting the rich literary and cultural heritage of the Punjabi language. Her teaching develops students' appreciation of Punjabi literature, poetry, and cultural traditions.",
    areasOfStrength: [
      'Punjabi Language',
      'Punjabi Literature',
      'Cultural Heritage',
      'Literary Studies',
      'Regional Languages',
    ],
    institutions: [
      { shortName: 'PU', fullName: 'University of the Punjab', color: 'amber' },
    ],
  },
  {
    id: 'aamir-latif',
    name: 'Aamir Khalil',
    titlePrefix: '',
    designation: 'Librarian | Academic Support',
    department: 'Information Management',
    qualification: 'MA Information Management (PU)',
    experience: '8 Years',
    email: 'amir.khalil@ggca-grw.edu.pk',
    bps: 'BPS-17',
    employmentType: 'Regular',
    tier: 'support',
    photo: aamirPhoto,
    bio: 'Our library plays an important role in supporting students beyond the classroom. With 8 years of experience and an MA in Information Management from Punjab University, Aamir Khalil supports students in accessing, organizing, and effectively using academic information and learning resources.',
    areasOfStrength: [
      'Independent Learning',
      'Reading & Research',
      'Academic Exploration',
      'Reference Work',
      'Information Literacy',
    ],
    institutions: [
      { shortName: 'PU', fullName: 'University of the Punjab', color: 'amber' },
    ],
  },
]

export const faculty = facultyMembers

export const departments: string[] = [
  'All Departments',
  'Academic Leadership',
  'Physics',
  'English',
  'Biology',
  'Education',
  'Commerce',
  'Statistics',
  'Political Science',
  'Physical Education',
  'Punjabi',
  'Information Management',
]
