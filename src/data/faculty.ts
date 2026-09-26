/**
 * Faculty directory data.
 *
 * IMPORTANT: The teacher list previously shown on the HED Punjab portal for
 * this college is outdated (staff have since been transferred). Per the
 * college's instruction, this file intentionally ships EMPTY — do not add
 * names here until the college provides the current, verified faculty
 * list. The Faculty page renders a clean "coming soon" placeholder while
 * this array is empty.
 */

export type FacultyMember = {
  id: string
  name: string
  designation: string
  department: string
  qualification: string
  photo?: string
  bio?: string
}

export const faculty: FacultyMember[] = []

export const departments: string[] = [
  'English',
  'Computer Science',
  'Commerce',
  'Biology',
  'Chemistry',
  'Physics',
  'Mathematics',
  'Islamiat & Punjabi',
  'Education',
]
