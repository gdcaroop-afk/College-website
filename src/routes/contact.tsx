import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  MapPin,
  Phone,
  Mail,
  Landmark,
  Send,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  Building2,
} from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

import { MapEmbed } from '@/components/shared/map-embed'
import { site } from '@/data/site'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: `Contact & Campus Location — ${site.name}` },
      {
        name: 'description',
        content: `Get in touch with Govt. Graduate College Aroop, Gujranwala. Find campus address, contact phone numbers, email (${site.contact.email}), and interactive Google Map.`,
      },
    ],
  }),
})

function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    program: 'General Inquiry',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.message) return
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col gap-10 pb-16 pt-4">
      {/* 🌟 1. Compact Hero Header */}
      <section className="bg-linear-to-b from-primary/10 via-secondary/40 to-background border-b border-border/60 py-8 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-2 flex justify-center">
            <span className="bg-primary/15 text-primary border-primary/20 flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider">
              <MessageSquare className="size-3" />
              Helpdesk & Campus Information
            </span>
          </div>
          <h1 className="font-heading text-foreground text-2xl font-extrabold tracking-tight sm:text-3xl">
            Get in Touch With Us
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-xl text-xs leading-relaxed sm:text-sm">
            Have questions regarding Intermediate or BS admissions, academic verification, or campus visits? Our administration is here to assist you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-10">
        {/* 🏢 2. Key Contact Cards & Compact Direct Inquiry Form */}
        <div className="grid gap-6 lg:grid-cols-12 items-start">
          {/* Left Column: Contact Cards Grid (5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h2 className="font-heading text-base font-bold text-foreground flex items-center gap-1.5">
              <Building2 className="size-4 text-primary" />
              Direct Channels
            </h2>

            {/* Address Card */}
            <div className="bg-card border-border/80 group rounded-xl border p-4 shadow-2xs transition-all duration-200 hover:border-primary/50 hover:shadow-xs">
              <div className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="size-4" />
                </span>
                <div className="space-y-0.5">
                  <h3 className="font-heading text-xs font-bold text-foreground">Campus Location</h3>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    {site.address.line1}, {site.address.line2}
                  </p>
                  <a
                    href={site.address.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline text-[11px] font-bold inline-flex items-center gap-1 pt-0.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="size-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Desk */}
            <div className="bg-card border-border/80 group rounded-xl border p-4 shadow-2xs transition-all duration-200 hover:border-primary/50 hover:shadow-xs">
              <div className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="size-4" />
                </span>
                <div className="space-y-0.5">
                  <h3 className="font-heading text-xs font-bold text-foreground">Official Email Address</h3>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-primary hover:underline text-xs font-bold block"
                  >
                    {site.contact.email}
                  </a>
                  <p className="text-muted-foreground text-[10px]">For general inquiries and academic queries</p>
                </div>
              </div>
            </div>

            {/* Phone Desk */}
            <div className="bg-card border-border/80 group rounded-xl border p-4 shadow-2xs transition-all duration-200 hover:border-primary/50 hover:shadow-xs">
              <div className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="size-4" />
                </span>
                <div className="space-y-0.5">
                  <h3 className="font-heading text-xs font-bold text-foreground">College Contact Numbers</h3>
                  <div className="flex flex-col gap-0.5">
                    {site.contact.phones.map((p) => (
                      <a
                        key={p.number}
                        href={`tel:${p.number}`}
                        className="text-primary hover:underline text-[11px] font-semibold"
                      >
                        {p.number} ({p.source})
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Governance & Socials (Shift Timings removed as instructed) */}
            <div className="bg-card border-border/80 rounded-xl border p-4 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-1.5">
                <Landmark className="size-3.5 text-primary" />
                <span className="text-[11px] font-bold text-foreground">Government Affiliation</span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">{site.governance.department}</p>
              
              <div className="pt-2 border-t border-border/60 flex items-center gap-2.5">
                <span className="text-[11px] font-bold text-foreground">Connect:</span>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-semibold transition-all"
                >
                  <IconBrandFacebook className="size-3.5" /> Facebook
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-semibold transition-all"
                >
                  <IconBrandInstagram className="size-3.5" /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Zoomed-out / Compact Direct Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-card border-border/80 rounded-xl border p-5 sm:p-6 shadow-xs">
              <div className="mb-4 space-y-0.5">
                <span className="bg-secondary text-primary font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                  Online Helpdesk
                </span>
                <h2 className="font-heading text-lg sm:text-xl font-extrabold text-foreground">
                  Send Us a Direct Inquiry
                </h2>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Fill out the form below and our administrative office will review your query.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-primary/10 border-primary/30 rounded-xl border p-6 text-center space-y-2.5 animate-in fade-in zoom-in-95">
                  <CheckCircle2 className="mx-auto size-10 text-primary" />
                  <h3 className="font-heading text-base font-bold text-foreground">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground text-[11px] max-w-md mx-auto">
                    Thank you for reaching out to {site.name}. Your inquiry has been logged. You may also contact our admissions office directly at <span className="font-bold text-foreground">{site.contact.email}</span>.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-1 text-xs h-8"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({ name: '', contactInfo: '', program: 'General Inquiry', message: '' })
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-foreground">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ali"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20 w-full rounded-md border px-3 py-1.5 text-xs font-medium outline-hidden transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-foreground">Email or Phone Number *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 0300-1234567 or email"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20 w-full rounded-md border px-3 py-1.5 text-xs font-medium outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-foreground">Program of Interest</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20 w-full rounded-md border px-3 py-1.5 text-xs font-medium outline-hidden transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Intermediate Programs (F.A / F.Sc / ICS)">Intermediate Programs (F.A / F.Sc / ICS)</option>
                      <option value="BS Computer Science">BS Computer Science</option>
                      <option value="BS Chemistry">BS Chemistry</option>
                      <option value="BS English">BS English</option>
                      <option value="2-Year Associate Diplomas">2-Year Associate Diplomas</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-foreground">Your Message / Query *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Type your message, inquiry about eligibility, fees, or document submission..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20 w-full rounded-md border px-3 py-1.5 text-xs font-medium outline-hidden transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs py-2 px-4 rounded-md flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <Send className="size-3.5" />
                    <span>Submit Official Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 🗺️ 3. Google Maps Campus Location */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-base font-bold text-foreground flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" />
              Campus Location on Map
            </h2>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline text-xs font-bold inline-flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-border/80 shadow-xs">
            <MapEmbed className="h-72 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
