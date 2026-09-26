/**
 * Campus gallery. Real photos supplied directly by the college are used
 * here (src/assets). Remaining slots stay as placeholders (src: null) until
 * more authentic photos are supplied — nothing false is implied in the
 * meantime.
 */

import heroBuilding from '@/assets/Hero_section_background.jpg'
import courtyard from '@/assets/2.jpg'
import mainBuilding from '@/assets/3.jpg'
import admissionDesk from '@/assets/addmission_desk.jpg'
import admissionDesk2 from '@/assets/addmission_desk_2.jpg'
import ramzanSeminar from '@/assets/ramzan_kareem_seminar.jpg'
import admissionDesk3 from '@/assets/addmission_desk_3.jpg'
import ptmNotice from '@/assets/ptm.jpg'

export type GalleryImage = {
  id: string
  src: string | null
  alt: string
  caption?: string
}

export const gallery: GalleryImage[] = [
  { id: 'campus-1', src: heroBuilding, alt: 'College main building', caption: 'Main academic block' },
  { id: 'campus-2', src: mainBuilding, alt: 'College entrance and parking area', caption: 'College entrance' },
  { id: 'campus-3', src: courtyard, alt: 'Campus courtyard', caption: 'Campus courtyard' },
  { id: 'campus-4', src: admissionDesk, alt: 'Admission desk — F.A. Part I', caption: 'Admission desk (F.A. Part I)' },
  { id: 'campus-5', src: admissionDesk2, alt: 'Admission desk — F.A. Part II', caption: 'Admission desk (F.A. Part II)' },
  { id: 'campus-6', src: ramzanSeminar, alt: 'Ramzan-ul-Mubarak awareness seminar with students', caption: 'Ramzan Kareem Seminar' },
  { id: 'campus-7', src: admissionDesk3, alt: 'Admission desk — ICS Part I & II', caption: 'Admission desk (ICS)' },
  { id: 'campus-8', src: ptmNotice, alt: 'Parent Teacher Meeting notice board', caption: 'Parent Teacher Meeting (PTM)' },
]
