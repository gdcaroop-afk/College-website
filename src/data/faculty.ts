/**
 * Verified Faculty Directory Data for Govt. Graduate College Aroop, Gujranwala.
 */

import principalPhoto from '@/assets/Principle Khurram Shezad.png'
import vicePrincipalPhoto from '@/assets/Vice Pricciple Prof Interzar.png'
import shabbirPhoto from '@/assets/Prof Shabbir Ahmad.png'
import naveedPhoto from '@/assets/Prof Naveed Ahmad BS coordinator.png'
import anwarPhoto from '@/assets/Prof Anwar.png'
import usmanPhoto from '@/assets/Prof Usman.png'
import raufPhoto from '@/assets/Prof Abdul Rauf (Statistics).png'
import aamirPhoto from '@/assets/Prof Amir Latif.png'

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
  tier: 'principal' | 'senior' | 'faculty' | 'support'
  photo: string
  bio: string
  areasOfStrength: string[]
  institutions: Institution[]
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 'khurram-shahzad',
    name: 'Prof. Dr. Khurram Shahzad',
    titlePrefix: 'Prof. Dr.',
    designation: 'Principal | Lecturer in Physics',
    department: 'Physics',
    qualification: 'Ph.D. Physics (PIEAS) | M.Phil Physics (QAU)',
    experience: '12 Years',
    tier: 'principal',
    photo: principalPhoto,
    bio: 'Prof. Dr. Khurram Shahzad provides academic leadership and direction to the institution with a strong background in Physics and higher education. With a Ph.D. in Physics from PIEAS and an M.Phil. in Physics from QAU, he brings advanced subject knowledge and academic insight to the institution. As Principal, he is committed to maintaining academic standards, encouraging a culture of learning, and supporting an environment where students and faculty can achieve their potential.',
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
    name: 'Prof. Intizar Ahmad',
    titlePrefix: 'Prof.',
    designation: 'Vice Principal / Lecturer – English',
    department: 'English',
    qualification: 'Ph.D. English (Scholar)',
    experience: '30 Years',
    tier: 'senior',
    photo: vicePrincipalPhoto,
    bio: 'With 30 years of teaching experience, Prof. Intizar Ahmad brings extensive academic and educational experience to the institution. As Vice Principal and Lecturer in English, he contributes to both academic leadership and classroom education. His long-standing experience enables him to support students in developing language proficiency, communication skills, critical thinking, and academic confidence while contributing to the overall academic environment of the college.',
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
    name: 'Prof. Shabbir Hussain Butt',
    titlePrefix: 'Prof.',
    designation: 'Associate Professor – English',
    department: 'English',
    qualification: 'M.A. English',
    experience: '30 Years',
    tier: 'senior',
    photo: shabbirPhoto,
    bio: "Prof. Shabbir Hussain Butt is an experienced English educator with 30 years of teaching experience. As an Associate Professor, he brings extensive classroom knowledge and a deep understanding of English language and literature. His teaching focuses on strengthening students' language abilities, literary appreciation, comprehension, writing, and critical analysis.",
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
    name: 'Prof. Anwaar Ahmad Gulzar',
    titlePrefix: 'Prof.',
    designation: 'Lecturer – Education',
    department: 'Education',
    qualification: 'Ph.D. Education (Scholar)',
    experience: '13 Years',
    tier: 'senior',
    photo: anwarPhoto,
    bio: "Prof. Anwaar Ahmad Gulzar is an experienced educator with 13 years of academic experience and advanced research-level study in Education. His expertise contributes to the development of students' understanding of educational concepts, learning processes, teaching practices, and educational development.",
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
    name: 'Prof. Naveed Ahmad',
    titlePrefix: 'Prof.',
    designation: 'Lecturer – Biology & BS Coordinator',
    department: 'Biology',
    qualification: 'MS/M.Phil Zoology (VU)',
    experience: '10 Years',
    tier: 'faculty',
    photo: naveedPhoto,
    bio: 'Prof. Naveed Ahmad brings 10 years of teaching experience and advanced academic training in Zoology to the science faculty. His approach focuses on helping students understand biological concepts through clear explanation, conceptual learning, and practical understanding. His academic background supports students studying Biology and related areas of life sciences.',
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
    name: 'Prof. Dr. Muhammad Usman',
    titlePrefix: 'Prof. Dr.',
    designation: 'Lecturer – Commerce',
    department: 'Commerce',
    qualification: 'Ph.D. Scholar (PU) | M.Phil Finance (PU)',
    experience: '10 Years',
    tier: 'faculty',
    photo: usmanPhoto,
    bio: 'Prof. Dr. Muhammad Usman brings 10 years of teaching experience along with advanced academic training in Finance and Commerce. His academic background enables students to develop a stronger understanding of commerce, finance, accounting-related concepts, and the principles that shape modern business environments.',
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
    name: 'Prof. Abdul Rauf',
    titlePrefix: 'Prof.',
    designation: 'Lecturer – Statistics',
    department: 'Statistics',
    qualification: 'M.Phil Statistics (QAU)',
    experience: '13 Years',
    tier: 'faculty',
    photo: raufPhoto,
    bio: "Prof. Abdul Rauf is a Statistics lecturer with 13 years of teaching experience and an M.Phil. in Statistics from QAU. He focuses on developing students' understanding of statistical concepts, quantitative reasoning, analytical thinking, and problem-solving. His teaching supports students in applying statistics to academic and practical situations.",
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
    id: 'aamir-latif',
    name: 'Prof. Aamir Latif',
    titlePrefix: 'Prof.',
    designation: 'Librarian | Academic Support',
    department: 'Information Management',
    qualification: 'MA Information Management (PU)',
    experience: '8 Years',
    tier: 'support',
    photo: aamirPhoto,
    bio: 'Our library plays an important role in supporting students beyond the classroom. With 8 years of experience and an MA in Information Management from Punjab University, Prof. Aamir Latif supports students in accessing, organizing, and effectively using academic information and learning resources.',
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
  'Information Management',
]
