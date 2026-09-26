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
import sportsDay from '@/assets/sport_day_event.jpg'
import sportsDay2 from '@/assets/sport_day_event_02.jpg'
import sportsDay3 from '@/assets/sport_day_event_03.jpg'
import sportsDay4 from '@/assets/sport_day_event_04.jpg'
import plantation1 from '@/assets/plantation_day.jpg'
import plantation2 from '@/assets/planttation_day2.jpg'
import plantation3 from '@/assets/planttation_day3.jpg'
import thalassemia1 from '@/assets/thelsemia_camp_sunds_foundation.jpg'
import thalassemia2 from '@/assets/thelsemia_camp_sunds_foundation_02.jpg'
import thalassemia3 from '@/assets/thelsemia_camp_sunds_foundation_03.jpg'
import dengueSeminar from '@/assets/dengue_seminar.jpg'
import ramzanSeminar from '@/assets/ramzan_kareem_seminar.jpg'
import voicePunjab from '@/assets/voice_of_punjab.jpg'
import independenceDay from '@/assets/14_august_event.jpg'
import independenceDay2 from '@/assets/14_aug_event.jpg'
import orientation from '@/assets/welcome_orientation.jpg'
import graduatePic from '@/assets/474566851_1122634212927657_556315117393241181_n.jpg'
import colorDay1 from '@/assets/Color Day Event.jpeg'

export type GalleryCategory =
  | 'Graduates & Alumni'
  | 'Color Day Festival'
  | 'Sports Gala'
  | 'Seminars & Workshops'
  | 'Campus & Academics'

export type GalleryImage = {
  id: string
  src: string | null
  alt: string
  caption?: string
  category: GalleryCategory
}

export const gallery: GalleryImage[] = [
  // 🎓 1. Graduates & Alumni Section
  { id: 'grad-1', src: welcomeStudents, alt: 'Graduating BS & Intermediate Students Class', caption: 'BS & Intermediate Graduating Class', category: 'Graduates & Alumni' },
  { id: 'grad-2', src: facultyGathering, alt: 'Graduating Scholars & Faculty Commemoration', caption: 'Graduation & Honor Roll Ceremony', category: 'Graduates & Alumni' },
  { id: 'grad-3', src: orientation, alt: 'Convocation & Degree Distribution', caption: 'Degree Award & Academic Convocation', category: 'Graduates & Alumni' },
  { id: 'grad-4', src: graduatePic, alt: 'Graduate Group & Alumni Network', caption: 'Graduates & Academic Achievers', category: 'Graduates & Alumni' },

  // 🎨 2. Color Day Festival Section
  { id: 'color-1', src: colorDay1, alt: 'College Color Day Cultural Festival & Celebration', caption: 'Color Day Cultural Celebration', category: 'Color Day Festival' },
  { id: 'color-4', src: voicePunjab, alt: 'Voice of Punjab Cultural & Literary Declamation', caption: 'Voice of Punjab Declamation', category: 'Color Day Festival' },

  // 🏆 3. Sports Gala Section
  { id: 'sports-1', src: sportsDay, alt: 'Annual Sports Gala Championship', caption: 'Annual Sports Gala', category: 'Sports Gala' },
  { id: 'sports-2', src: sportsDay2, alt: 'Sports Day — college team with banner', caption: 'College Athletics Team', category: 'Sports Gala' },
  { id: 'sports-3', src: sportsDay3, alt: 'Sports Day — athletics & field events', caption: 'Track & Field Athletics', category: 'Sports Gala' },
  { id: 'sports-4', src: sportsDay4, alt: 'Sports Day — cricket team', caption: 'Inter-College Cricket Tournament', category: 'Sports Gala' },

  // 🩺 4. Seminars & Workshops Section
  { id: 'seminar-1', src: thalassemia1, alt: 'Thalassemia Awareness & Blood Donation Camp', caption: 'Blood Donation Camp', category: 'Seminars & Workshops' },
  { id: 'seminar-2', src: thalassemia2, alt: 'Sundas Foundation Blood Donation Drive', caption: 'Sundas Foundation Blood Drive', category: 'Seminars & Workshops' },
  { id: 'seminar-3', src: thalassemia3, alt: 'Thalassemia Awareness Medical Seminar', caption: 'Medical Awareness Seminar', category: 'Seminars & Workshops' },
  { id: 'seminar-4', src: dengueSeminar, alt: 'Anti-Dengue Public Health Seminar & Cleanliness Walk', caption: 'Anti-Dengue Public Health Walk', category: 'Seminars & Workshops' },
  { id: 'seminar-5', src: ramzanSeminar, alt: 'Ramzan Mubarak Spiritual & Ethics Seminar', caption: 'Ramzan Mubarak Seminar', category: 'Seminars & Workshops' },
  { id: 'seminar-6', src: plantation1, alt: 'Monsoon Tree Plantation Drive', caption: 'Green Pakistan Plantation Drive', category: 'Seminars & Workshops' },
  { id: 'seminar-7', src: plantation2, alt: 'Tree Planting on Campus Lawn', caption: 'Campus Tree Planting', category: 'Seminars & Workshops' },
  { id: 'seminar-7b', src: plantation3, alt: 'Student Plantation Event', caption: 'Plantation Campaign', category: 'Seminars & Workshops' },
  { id: 'seminar-8', src: independenceDay, alt: 'Independence Day Flag Hoisting Ceremony', caption: 'Independence Day Flag Hoisting', category: 'Seminars & Workshops' },
  { id: 'seminar-8b', src: independenceDay2, alt: 'Independence Day Celebrations', caption: 'National Day Celebration', category: 'Seminars & Workshops' },

  // 🏛️ 5. Campus & Academics Section
  { id: 'campus-1', src: heroBuilding, alt: 'College main building facade', caption: 'Main Academic Block', category: 'Campus & Academics' },
  { id: 'campus-2', src: mainBuilding, alt: 'College entrance and main gates', caption: 'College Entrance', category: 'Campus & Academics' },
  { id: 'campus-3', src: courtyard, alt: 'Campus green courtyard', caption: 'Campus Courtyard', category: 'Campus & Academics' },
  { id: 'campus-4', src: morningAssembly, alt: 'Morning assembly line-up', caption: 'Morning Assembly', category: 'Campus & Academics' },
  { id: 'campus-5', src: chemistryLab, alt: 'Chemistry laboratory practical session', caption: 'Chemistry Laboratory', category: 'Campus & Academics' },
  { id: 'campus-6', src: computerLab, alt: 'Computer science laboratory session', caption: 'Computer Laboratory', category: 'Campus & Academics' },
  { id: 'campus-7', src: classroom, alt: 'Academic lecture in progress', caption: 'Classroom Lecture', category: 'Campus & Academics' },
  { id: 'campus-8', src: admissionDesk, alt: 'Admissions desk and information counter', caption: 'Admissions Desk', category: 'Campus & Academics' },
  { id: 'campus-8b', src: admissionDesk2, alt: 'Admissions Information Counter', caption: 'Admissions Counter', category: 'Campus & Academics' },
  { id: 'campus-8c', src: admissionDesk3, alt: 'Student Guidance Desk', caption: 'Student Support Desk', category: 'Campus & Academics' },
  { id: 'campus-9', src: facultyOnEvent, alt: 'Faculty On Academic Event', caption: 'Faculty Event Assembly', category: 'Campus & Academics' },
]
