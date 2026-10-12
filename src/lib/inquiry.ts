// Client-side screening for contact / admission inquiries before opening Gmail.
// This is a best-effort filter for obviously irrelevant or joke messages; it cannot
// stop someone from emailing the college directly.

const COLLEGE_KEYWORDS = [
  'admission', 'admit', 'apply', 'application', 'form', 'fee', 'fees', 'dues', 'scholarship',
  'merit', 'eligib', 'seat', 'deadline', 'date', 'schedule', 'roll', 'result', 'marks', 'transcript',
  'degree', 'diploma', 'certificate', 'document', 'matric', 'inter', 'intermediate', 'f.a', 'fa',
  'fsc', 'f.sc', 'ics', 'icom', 'i.com', 'dit', 'dcom', 'bs', 'bscs', 'bachelor', 'program', 'programme',
  'course', 'subject', 'class', 'semester', 'session', 'batch', 'department', 'faculty', 'teacher',
  'professor', 'principal', 'college', 'campus', 'lab', 'library', 'hostel', 'transport', 'timing',
  'office', 'contact', 'information', 'inquiry', 'enquiry', 'query', 'student', 'exam', 'datesheet',
  'registration', 'enrol', 'university', 'gujranwala', 'aroop', 'computer', 'chemistry', 'english',
  'commerce', 'sports', 'event', 'visit', 'help', 'guidance', 'requirement', 'criteria', 'migration',
  'prospectus', 'uniform', 'attendance', 'complaint', 'suggestion',
]

const BLOCKED_WORDS = [
  'fuck', 'shit', 'bitch', 'bastard', 'asshole', 'dick', 'porn', 'sex', 'nude', 'idiot', 'stupid',
  'loser', 'bakwas', 'gandu', 'harami', 'kutta', 'chutiya', 'lund', 'randi',
  'lol', 'lmao', 'haha', 'hehe', 'joke', 'prank', 'asdf', 'qwerty', 'bitcoin', 'crypto',
  'casino', 'betting', 'lottery', 'viagra', 'free money',
]

export type InquiryInput = {
  name: string
  message: string
  email?: string
  phone?: string
  contactInfo?: string
  queryType?: string
  honeypot?: string
}

export type InquiryResult = { ok: true; error?: undefined } | { ok: false; error: string }

const COOLDOWN_MS = 60_000
const STORAGE_KEY = 'inquiry:last-sent'

function words(text: string): string[] {
  return text.toLowerCase().match(/[a-z؀-ۿ.']+/g) ?? []
}

function looksLikeGibberish(text: string) {
  const letters = text.toLowerCase().replace(/[^a-z]/g, '')
  if (letters.length < 8) return false
  if (/(.)\1{4,}/.test(letters)) return true
  const vowels = letters.replace(/[^aeiou]/g, '').length
  const ratio = vowels / letters.length
  if (ratio < 0.15 || ratio > 0.7) return true
  const list = words(text)
  return list.length >= 6 && new Set(list).size / list.length < 0.4
}

function isBlocked(text: string) {
  const lower = ` ${text.toLowerCase()} `
  return BLOCKED_WORDS.some((w) => new RegExp(`\\b${w}\\b`).test(lower))
}

export function validateInquiry(input: InquiryInput): InquiryResult {
  if (input.honeypot) return { ok: false, error: 'Submission rejected.' }

  const name = input.name.trim()
  const message = input.message.trim()

  if (name.length < 3 || !/^[\p{L} .'-]+$/u.test(name) || looksLikeGibberish(name)) {
    return { ok: false, error: 'Please enter your real full name (letters only).' }
  }

  if (input.email !== undefined) {
    const email = input.email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return { ok: false, error: 'Please enter a valid email address.' }
    }
  }
  if (input.phone && input.phone.trim()) {
    const phone = input.phone.replace(/[\s-]/g, '')
    if (!/^(\+92|0)\d{9,10}$/.test(phone)) {
      return { ok: false, error: 'Please enter a valid Pakistani phone number.' }
    }
  }

  if (input.contactInfo !== undefined) {
    const c = input.contactInfo.trim()
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c)
    const isPhone = /^(\+92|0)\d{9,10}$/.test(c.replace(/[\s-]/g, ''))
    if (!isEmail && !isPhone) {
      return { ok: false, error: 'Please enter a valid email address or phone number.' }
    }
  }

  if (input.queryType !== undefined) {
    const q = input.queryType.trim()
    if (q.length < 4 || words(q).length < 1 || looksLikeGibberish(q)) {
      return { ok: false, error: 'Please enter the type of your query (e.g. Admission, Fee, Result).' }
    }
    if (isBlocked(q)) return { ok: false, error: 'Please keep your message respectful and serious.' }
  }

  const list = words(message)
  if (message.length < 20 || list.length < 4) {
    return { ok: false, error: 'Please write a complete message (at least a full sentence) about your query.' }
  }
  if (message.length > 1500) {
    return { ok: false, error: 'Message is too long. Please keep it under 1500 characters.' }
  }
  if (/https?:\/\/|www\./i.test(message)) {
    return { ok: false, error: 'Links are not allowed in the message.' }
  }
  if (looksLikeGibberish(message)) {
    return { ok: false, error: 'Your message looks like random text. Please write a clear question.' }
  }

  if (isBlocked(message)) {
    return { ok: false, error: 'Please keep your message respectful and serious.' }
  }

  const relevant = list.some((w: string) =>
    COLLEGE_KEYWORDS.some((k: string) => (k.length >= 4 ? w.startsWith(k) : w === k))
  )
  if (!relevant) {
    return {
      ok: false,
      error: 'Your message must be related to the college (admissions, fees, programs, results, etc.).',
    }
  }

  try {
    const last = Number(localStorage.getItem(STORAGE_KEY) ?? 0)
    const wait = COOLDOWN_MS - (Date.now() - last)
    if (wait > 0) {
      return { ok: false, error: `Please wait ${Math.ceil(wait / 1000)} seconds before sending another message.` }
    }
  } catch {
    // storage unavailable — skip cooldown
  }

  return { ok: true }
}

export function openGmailCompose(to: string, subject: string, body: string) {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()))
  } catch {
    // ignore
  }
  const url =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}` +
    `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
