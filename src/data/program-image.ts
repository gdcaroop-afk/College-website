import chemistryLab from '@/assets/chemeistry_labs.jpg'
import computerLab from '@/assets/compuer_labs_03.jpg'
import classroom from '@/assets/studies.jpg'
import campusBuilding from '@/assets/3.jpg'

/** Maps a program title to a real campus photo of the relevant subject area. */
export function programImage(title: string): string {
  if (/computer science|ics/i.test(title)) return computerLab
  if (/pre-medical/i.test(title)) return chemistryLab
  if (/english/i.test(title)) return classroom
  return campusBuilding
}
