/**
 * Real, custom-designed poster images supplied for specific programs
 * (src/assets). Where a program has one, it's used directly instead of
 * the generated gradient+logo illustration. Add more entries here as more
 * posters are supplied — no other code needs to change.
 */

import faPoster from '@/assets/FA.jpg'
import fscPoster from '@/assets/FSC-Medical.jpg'
import icsPoster from '@/assets/ics.jpg'
import bscsPoster from '@/assets/BSCS.jpg'
import bsEnglishPoster from '@/assets/BS_English.jpg'

export const programPosterImages: Record<string, string> = {
  'fa-humanities-arts': faPoster,
  'fsc-pre-medical': fscPoster,
  'ics-general-science': icsPoster,
  'bs-computer-science': bscsPoster,
  'bs-english': bsEnglishPoster,
}
