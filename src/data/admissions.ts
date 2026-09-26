/**
 * Admission requirements as described directly by the college. Kept
 * separate from programs.ts since this is process/paperwork info, not
 * curriculum info.
 */

export const applicationSteps = [
  {
    step: '01',
    title: 'Submit Application',
    description: 'Collect the admission form from the college office and submit it with the required documents.',
  },
  {
    step: '02',
    title: 'Document Verification',
    description: 'The college office verifies your academic records and other submitted documents.',
  },
  {
    step: '03',
    title: 'Merit List',
    description: 'Admission is granted on merit; results are announced on the college notice board.',
  },
  {
    step: '04',
    title: 'Fee Submission & Enrollment',
    description: 'Selected candidates submit the admission fee to confirm their enrollment.',
  },
] as const

export const intermediateRequirements = [
  '3 passport-size photographs',
  'Original Matric result card / DMC (with photograph)',
  "B-Form or CNIC (student's)",
  "Father's CNIC",
  'Character certificate',
  'College admission form (available from the college office)',
] as const

export const bachelorRequirements = [
  '3 passport-size photographs',
  'Original Intermediate result card / DMC (with photograph)',
  'Original Matric result card / DMC (with photograph)',
  'Character certificate from the last attended institution',
  "Student's CNIC or B-Form",
  "Father's CNIC",
] as const
