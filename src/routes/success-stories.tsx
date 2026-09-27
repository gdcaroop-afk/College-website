import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Trophy,
  Star,
  BookOpen,
  Building2,
  X,
  Sparkles,
  GraduationCap,
  Phone,
  Mail,
  Globe,
} from 'lucide-react'

import { successStories, type SuccessStory } from '@/data/success-stories'
import { site } from '@/data/site'
import { InstitutionLogo } from '@/components/shared/institution-logo'

export const Route = createFileRoute('/success-stories')({
  component: SuccessStoriesPage,
  head: () => ({
    meta: [
      { title: `Success Stories — ${site.name}` },
      {
        name: 'description',
        content:
          'Success stories of graduates and students from Govt. Graduate College Aroop, Gujranwala — selected in government departments and building careers in the software industry.',
      },
    ],
  }),
})

function StoryModal({ story, onClose }: { story: SuccessStory; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card text-card-foreground border-border relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="bg-background/80 hover:bg-muted text-foreground absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full border border-border shadow-xs transition-colors"
          aria-label="Close dialog"
        >
          <X className="size-5" />
        </button>

        {/* Header Banner */}
        <div className="bg-linear-to-r from-primary/15 via-secondary to-accent/15 border-b border-border/60 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div
              className={`relative size-28 shrink-0 overflow-hidden border-2 border-primary/30 shadow-md sm:size-32 bg-muted/20 ${
                story.type === 'company' ? 'rounded-xl' : 'rounded-2xl'
              }`}
            >
              <img
                src={story.photo}
                alt={story.name}
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-top"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span className="bg-primary text-primary-foreground rounded-md px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase">
                  {story.batch}
                </span>
              </div>
              <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
                {story.name}
              </h2>
              <p className="font-sans text-sm font-semibold text-primary">{story.headline}</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:justify-start">
                <InstitutionLogo code={story.organization.code} />
                {story.secondaryOrganization && (
                  <InstitutionLogo code={story.secondaryOrganization.code} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6 sm:p-8">
          <div>
            <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground">
              <BookOpen className="size-5 text-primary" />
              {story.type === 'company' ? 'About the Agency' : 'Story'}
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed text-justify">{story.bio}</p>
          </div>

          <div>
            <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground mb-3">
              <Sparkles className="size-5 text-primary" />
              {story.type === 'company' ? 'Services Offered' : 'Key Highlights'}
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {story.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2.5 rounded-lg bg-card border border-border/80 px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs"
                >
                  <Star className="size-4 shrink-0 text-primary" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {story.contact && (
            <div>
              <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground mb-2.5">
                <Phone className="size-5 text-primary" />
                Contact {story.name}
              </h3>
              <div className="grid gap-2 sm:grid-cols-3">
                <a
                  href={`tel:${story.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 rounded-lg bg-card border border-border/80 px-3 py-2 text-xs font-semibold text-foreground shadow-2xs hover:border-primary/40"
                >
                  <Phone className="size-3.5 shrink-0 text-primary" />
                  <span>{story.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${story.contact.email}`}
                  className="flex items-center gap-2 rounded-lg bg-card border border-border/80 px-3 py-2 text-xs font-semibold text-foreground shadow-2xs hover:border-primary/40"
                >
                  <Mail className="size-3.5 shrink-0 text-primary" />
                  <span>{story.contact.email}</span>
                </a>
                <a
                  href={`https://${story.contact.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-card border border-border/80 px-3 py-2 text-xs font-semibold text-foreground shadow-2xs hover:border-primary/40"
                >
                  <Globe className="size-3.5 shrink-0 text-primary" />
                  <span>{story.contact.website}</span>
                </a>
              </div>
            </div>
          )}

          <div>
            <h3 className="font-heading flex items-center gap-2 text-base font-bold text-foreground mb-2.5">
              <Building2 className="size-5 text-primary" />
              {story.type === 'company' ? 'Founding Institution' : 'Organization'}
            </h3>
            <div className="flex items-center justify-between rounded-xl bg-muted/40 border border-border/60 p-3 text-xs">
              <div className="flex items-center gap-3">
                <InstitutionLogo code={story.organization.code} showLabel={false} size="lg" />
                <div>
                  <p className="font-bold text-foreground text-xs sm:text-sm">{story.organization.fullName}</p>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    {story.type === 'company' ? 'Software Agency' : 'Current Organization'}
                  </p>
                </div>
              </div>
              <InstitutionLogo code={story.organization.code} showLabel={true} />
            </div>

            {story.secondaryOrganization && (
              <div className="mt-2.5 flex items-center justify-between rounded-xl bg-muted/40 border border-border/60 p-3 text-xs">
                <div className="flex items-center gap-3">
                  <InstitutionLogo code={story.secondaryOrganization.code} showLabel={false} size="lg" />
                  <div>
                    <p className="font-bold text-foreground text-xs sm:text-sm">{story.secondaryOrganization.fullName}</p>
                    <p className="text-[11px] text-muted-foreground font-medium">Also Founder Of</p>
                  </div>
                </div>
                <InstitutionLogo code={story.secondaryOrganization.code} showLabel={true} />
              </div>
            )}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function StoryCard({ story, onReadMore }: { story: SuccessStory; onReadMore: () => void }) {
  return (
    <div className="bg-card group border border-border/80 flex flex-col justify-between overflow-hidden rounded-xl shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div>
        <div className="relative aspect-square w-full overflow-hidden bg-muted/20">
          <img
            src={story.photo}
            alt={story.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
          />
          <span className="bg-card/90 backdrop-blur-xs text-primary absolute top-2 left-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-2xs">
            <GraduationCap className="size-3" />
            {story.batch}
          </span>
          {story.isPhotoPlaceholder && (
            <span className="bg-amber-500/90 text-white absolute top-2 right-2 rounded-full px-2 py-0.5 text-[9px] font-bold shadow-2xs">
              Photo Coming Soon
            </span>
          )}
        </div>

        <div className="flex flex-col items-center text-center gap-1.5 p-4">
          <h3 className="font-heading text-foreground group-hover:text-primary text-sm font-bold transition-colors text-center">
            {story.name}
          </h3>
          <p className="text-primary text-[11px] font-semibold leading-snug text-center">{story.headline}</p>

          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1.5">
            <InstitutionLogo code={story.organization.code} />
            {story.secondaryOrganization && (
              <InstitutionLogo code={story.secondaryOrganization.code} />
            )}
          </div>
        </div>
      </div>

      <div className="p-4 pt-0 mt-1">
        <button
          onClick={onReadMore}
          className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground w-full rounded-lg py-2 text-xs font-bold transition-all duration-200"
        >
          Read More
        </button>
      </div>
    </div>
  )
}

function SuccessStoriesPage() {
  const [activeStory, setActiveStory] = useState<SuccessStory | null>(null)

  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* Page Header */}
      <section className="pt-8 pb-4 text-center">
        <div className="mx-auto flex flex-col items-center justify-center max-w-4xl px-4 text-center sm:px-6">
          <span className="bg-primary/10 text-primary mb-3 flex size-10 items-center justify-center rounded-xl">
            <Trophy className="size-5" />
          </span>
          <h1 className="font-heading text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl">
            Success Stories
          </h1>
          <p className="font-sans text-primary font-bold text-base sm:text-lg mt-1 tracking-wide">
            Our Students Making Us Proud
          </p>
          <p className="text-muted-foreground mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed sm:text-sm">
            From government service to the software industry, our students carry the discipline and knowledge
            built at {site.name} into distinguished careers. These are their stories.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-muted/40 border-border/80 border-y py-2.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">Home</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-semibold">Success Stories</span>
          </nav>
        </div>
      </section>

      {/* Story Cards Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {successStories.map((story) => (
            <StoryCard key={story.id} story={story} onReadMore={() => setActiveStory(story)} />
          ))}
        </div>
      </section>

      {activeStory && <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />}
    </div>
  )
}
