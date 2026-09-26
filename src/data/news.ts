/**
 * News / announcements / events. This is static frontend data for v1 — see
 * README for how a lightweight CMS could replace this later if needed.
 * Add real, dated entries here as the college confirms them; do not invent
 * events or dates.
 */

export type NewsItem = {
  id: string
  title: string
  date: string
  category: 'Announcement' | 'Event' | 'Achievement'
  summary: string
}

export const news: NewsItem[] = []
