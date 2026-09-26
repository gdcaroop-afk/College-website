/**
 * Real, custom-designed poster images supplied for specific programs
 * (src/assets). Where a program has one, it's used directly instead of
 * the generated gradient+logo illustration. Add more entries here as more
 * posters are supplied — no other code needs to change.
 */

import faPoster from '@/assets/FA.jpg'
import fscPoster from '@/assets/FSC-Medical.jpg'

export const programPosterImages: Record<string, string> = {
  'fa-humanities-arts': faPoster,
  'fsc-pre-medical': fscPoster,
}
