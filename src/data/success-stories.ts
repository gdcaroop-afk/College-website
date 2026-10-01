import shanzaPhoto from '@/assets/ShanzaSaif-placeholder.png'
import ahmadPhoto from '@/assets/Muhammad_Ahmad_police.jpg'
import nafeelPhoto from '@/assets/NafeelAqqib.jpg'
import nineTTeamPhoto from '@/assets/9t-solution-team.jpg'

export type SuccessStory = {
  id: string
  type: 'individual' | 'company'
  name: string
  photo: string
  isPhotoPlaceholder?: boolean
  batch: string
  headline: string
  organization: { code: string; fullName: string }
  secondaryOrganization?: { code: string; fullName: string }
  bio: string
  highlights: string[]
  founder?: string
  contact?: { phone: string; email: string; website: string }
}

export const successStories: SuccessStory[] = [
  {
    id: 'shanza-saif',
    type: 'individual',
    name: 'Shanza Saif',
    photo: shanzaPhoto,
    batch: 'Batch 2022 – 2026',
    headline: 'Selected in Punjab Excise, Taxation & Narcotics Control Department (BS-07)',
    organization: {
      code: 'EXCISE',
      fullName: 'Excise, Taxation & Narcotics Control Department, Punjab',
    },
    bio: 'Shanza Saif is a recent graduate of the 2022–2026 batch, selected in the Punjab Excise, Taxation & Narcotics Control Department at BS-07 — a proud achievement for the college. She is a brilliant student, a confident host, and an accomplished speaker who was known throughout her degree for her strong stage presence and communication skills. Alongside her extracurricular achievements, she remained a consistently hard-working student, obtaining an excellent CGPA of 3.17 throughout her degree, reflecting the same discipline and dedication she now brings to public service.',
    highlights: [
      'Selected — Punjab Excise, Taxation & Narcotics Control Department (BS-07)',
      'Graduated with an excellent CGPA of 3.17',
      'Skilled event host and public speaker',
      'Recognized for consistent academic hard work',
    ],
  },
  {
    id: 'muhammad-ahmad',
    type: 'individual',
    name: 'Muhammad Ahmad',
    photo: ahmadPhoto,
    batch: 'Batch 2023 – 2027',
    headline: 'Selected as Constable in Punjab Police (BS-07)',
    organization: {
      code: 'POLICE',
      fullName: 'Punjab Police',
    },
    bio: 'Muhammad Ahmad, a current BS Computer Science student of the 2023–2027 batch, has been selected as a Constable in Punjab Police at BS-07. Throughout his degree he has remained active in co-curricular activities and sports while maintaining a good academic standing in his ongoing Computer Science studies, balancing discipline, fitness, and academics to earn this achievement even before completing his degree.',
    highlights: [
      'Selected — Constable, Punjab Police (BS-07)',
      'Active in co-curricular activities and sports',
      'Maintaining good academic standing in BS Computer Science',
      'Currently pursuing his degree alongside this achievement',
    ],
  },
  {
    id: 'nafeel-aqqib',
    type: 'individual',
    name: 'Nafeel Aqqib',
    photo: nafeelPhoto,
    batch: 'Batch 2022 – 2026',
    headline: 'Full Stack Developer at App Pillars & Founder of 9T Solutions',
    organization: {
      code: 'PILLAR',
      fullName: 'App Pillars (Remote)',
    },
    secondaryOrganization: {
      code: '9T',
      fullName: '9T Solutions Software Agency',
    },
    bio: 'Nafeel Aqqib is a graduate of the 2022–2026 batch and a brilliant name in the Computer Science field. Far more than just a developer, he is a technically gifted, God-given problem solver who applies his skills across every layer of the products he builds. He currently works as a Full Stack Developer at App Pillars, a remote software house, while also running his own software agency, giving him hands-on experience in both employed and entrepreneurial software development.',
    highlights: [
      'Full Stack Developer — App Pillars (Remote)',
      'Founder & Owner of his own software agency',
      'Strong technical problem-solving ability across the full stack',
      'Batch 2022–2026, BS Computer Science',
    ],
  },
  {
    id: '9t-solutions',
    type: 'company',
    name: '9T Solutions Software Agency',
    photo: nineTTeamPhoto,
    batch: 'Founded by Batch 2022 – 2026',
    headline: 'Software Agency Founded by 9 Graduates of Batch 2022–2026',
    organization: {
      code: '9T',
      fullName: '9T Solutions Software Agency',
    },
    bio: '9T Solutions is a software agency established by nine members of the 2022–2026 batch, providing professional software services across the local Pakistani market. Founded by Muhammad Azhar Zia, the agency builds Point of Sale (POS) systems for restaurants, coffee shops, and fast food outlets, and delivers ERP systems for factories that unify production, accounts, sales, and purchasing into a single system. Alongside this, the team also builds custom websites and business automation solutions for local clients.',
    highlights: [
      'Point of Sale (POS) systems for restaurants, coffee shops & fast food outlets',
      'ERP systems for factories — production, accounts, sales & purchasing in one system',
      'Custom website development',
      'Business process automation solutions',
    ],
    founder: 'Muhammad Azhar Zia',
    contact: {
      phone: '+92 344 6831140',
      email: 'contact@9tsolutions.com',
      website: 'www.9tsolutions.com',
    },
  },
]
