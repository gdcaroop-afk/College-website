/**
 * Real, custom-designed poster images supplied for specific programs
 * (src/assets). Every program card in the Academics section uses its
 * corresponding asset image.
 */

import faPoster from '@/assets/FA.jpg'
import fscMedicalPoster from '@/assets/FSC-Medical.jpg'
import fscEngineeringPoster from '@/assets/FSC pre engineering.jpg'
import icsPoster from '@/assets/ics.jpg'
import icomPoster from '@/assets/icom_commerce.jpg'
import dcomPoster from '@/assets/DComDiploma.jpg'
import ditPoster from '@/assets/dit.jpg'
import bscsPoster from '@/assets/BSCS.jpg'
import bsEnglishPoster from '@/assets/BS_English.jpg'
import bsChemistryPoster from '@/assets/BSCHEMISTRY.jpg'
import bsCommercePoster from '@/assets/commerce.jpg'

export const programPosterImages: Record<string, string> = {
  'fa-humanities-arts': faPoster,
  'fa-it': faPoster,
  'fsc-pre-medical': fscMedicalPoster,
  'fsc-pre-engineering': fscEngineeringPoster,
  'ics-physics': icsPoster,
  'ics-statistics': icsPoster,
  'icom': icomPoster,
  'dcom': dcomPoster,
  'dit': ditPoster,
  'bs-computer-science': bscsPoster,
  'bs-english': bsEnglishPoster,
  'bs-chemistry': bsChemistryPoster,
  'bs-commerce': bsCommercePoster,
}
