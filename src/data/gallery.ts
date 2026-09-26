/**
 * Campus gallery. Real photos supplied directly by the college (src/assets).
 * Two low-quality/blurry lab photos were intentionally dropped rather than
 * published. Remaining slots stay as placeholders (src: null) until more
 * photos are supplied.
 */

import heroBuilding from '@/assets/Hero_section_background.jpg'
import courtyard from '@/assets/2.jpg'
import mainBuilding from '@/assets/3.jpg'
import admissionDesk from '@/assets/addmission_desk.jpg'
import admissionDesk2 from '@/assets/addmission_desk_2.jpg'
import admissionDesk3 from '@/assets/addmission_desk_3.jpg'
import chemistryLab from '@/assets/chemeistry_labs.jpg'
import computerLab from '@/assets/compuer_labs_03.jpg'
import classroom from '@/assets/studies.jpg'
import morningAssembly from '@/assets/morning_prayer.jpg'
import welcomeStudents from '@/assets/welcone_new_students.jpg'
import facultyGathering from '@/assets/welcone_newly_ctis.jpg'
import facultyOnEvent from '@/assets/on event faculty m=embers.jpg'
import sportsDay2 from '@/assets/sport_day_event_02.jpg'
import sportsDay3 from '@/assets/sport_day_event_03.jpg'
import sportsDay4 from '@/assets/sport_day_event_04.jpg'
import plantation2 from '@/assets/planttation_day2.jpg'
import plantation3 from '@/assets/planttation_day3.jpg'
import thalassemia2 from '@/assets/thelsemia_camp_sunds_foundation_02.jpg'
import thalassemia3 from '@/assets/thelsemia_camp_sunds_foundation_03.jpg'
import independenceDay2 from '@/assets/14_aug_event.jpg'

export type GalleryImage = {
  id: string
  src: string | null
  alt: string
  caption?: string
  category: 'Campus' | 'Academics' | 'Admissions' | 'Events' | 'Sports'
}

export const gallery: GalleryImage[] = [
  { id: 'campus-1', src: heroBuilding, alt: 'College main building', caption: 'Main academic block', category: 'Campus' },
  { id: 'campus-2', src: mainBuilding, alt: 'College entrance and parking area', caption: 'College entrance', category: 'Campus' },
  { id: 'campus-3', src: courtyard, alt: 'Campus courtyard', caption: 'Campus courtyard', category: 'Campus' },
  { id: 'campus-4', src: morningAssembly, alt: 'Morning assembly line-up', caption: 'Morning assembly', category: 'Campus' },

  { id: 'academics-1', src: chemistryLab, alt: 'Chemistry laboratory session', caption: 'Chemistry laboratory', category: 'Academics' },
  { id: 'academics-2', src: computerLab, alt: 'Computer laboratory session', caption: 'Computer laboratory', category: 'Academics' },
  { id: 'academics-3', src: classroom, alt: 'Classroom lecture in progress', caption: 'Classroom lecture', category: 'Academics' },

  { id: 'admissions-1', src: admissionDesk, alt: 'Admission desk — F.A. Part I', caption: 'Admission desk (F.A. Part I)', category: 'Admissions' },
  { id: 'admissions-2', src: admissionDesk2, alt: 'Admission desk — F.A. Part II', caption: 'Admission desk (F.A. Part II)', category: 'Admissions' },
  { id: 'admissions-3', src: admissionDesk3, alt: 'Admission desk — ICS Part I & II', caption: 'Admission desk (ICS)', category: 'Admissions' },
  { id: 'admissions-4', src: welcomeStudents, alt: 'Welcome banner for new students at the college entrance', caption: 'Welcoming new students', category: 'Admissions' },

  { id: 'events-1', src: independenceDay2, alt: 'Independence Day flag hoisting ceremony', caption: 'Independence Day ceremony', category: 'Events' },
  { id: 'events-2', src: plantation2, alt: 'Plantation Day — tree planting', caption: 'Plantation Day', category: 'Events' },
  { id: 'events-3', src: plantation3, alt: 'Plantation Day — tree planting', caption: 'Plantation Day', category: 'Events' },
  { id: 'events-4', src: thalassemia2, alt: 'Thalassemia blood donation camp', caption: 'Blood donation camp', category: 'Events' },
  { id: 'events-5', src: thalassemia3, alt: 'Thalassemia blood donation camp', caption: 'Blood donation camp', category: 'Events' },
  { id: 'events-6', src: facultyOnEvent, alt: 'Faculty members at a college event', caption: 'Faculty at a college event', category: 'Events' },
  { id: 'events-7', src: facultyGathering, alt: 'College faculty gathering', caption: 'Faculty gathering', category: 'Events' },

  { id: 'sports-1', src: sportsDay2, alt: 'Sports Day — college team with banner', caption: 'Sports Day', category: 'Sports' },
  { id: 'sports-2', src: sportsDay3, alt: 'Sports Day — athletics', caption: 'Sports Day', category: 'Sports' },
  { id: 'sports-3', src: sportsDay4, alt: 'Sports Day — cricket team', caption: 'Sports Day', category: 'Sports' },
]
