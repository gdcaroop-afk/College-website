/**
 * Admission requirements as described directly by the college. Kept
 * separate from programs.ts since this is process/paperwork info, not
 * curriculum info.
 */

export const applicationSteps = [
  {
    step: '01',
    title: 'Collect Prospectus',
    description: 'Visit the college office to collect the prospectus and learn about available programs, eligibility criteria, and important dates.',
  },
  {
    step: '02',
    title: 'Submit Admission Form',
    description: 'Complete the admission form and submit it at the college office along with all required documents.',
  },
  {
    step: '03',
    title: 'Pay Fee',
    description: 'Submit the admission fee at the college cashier or designated bank branch as instructed by the college.',
  },
  {
    step: '04',
    title: 'Confirm Enrollment',
    description: 'Receive your enrollment confirmation from the college office and complete all formalities to start your academic journey.',
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
