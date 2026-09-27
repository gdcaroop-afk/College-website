import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  GitBranch,
  FileText,
  Users,
  Code2,
  Cpu,
  Sparkles,
  ChevronRight,
  X,
  ExternalLink,
  CheckCircle2,
  Globe,
  GraduationCap,
  ArrowRight,
  BookOpen,
} from 'lucide-react'

import { fypProjects, type FYPProject } from '@/data/fyp'
import { site } from '@/data/site'

export const Route = createFileRoute('/fyp')({
  component: FYPPage,
  head: () => ({
    meta: [
      { title: `Final Year Projects — ${site.name}` },
      {
        name: 'description',
        content:
          'Explore the Final Year Projects of our BS Computer Science batch 2022-2026 graduates at Govt. Graduate College Aroop Gujranwala. Innovative solutions spanning AI, web development, and more.',
      },
    ],
  }),
})

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: FYPProject
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-card text-card-foreground border-border relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-2xl animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="bg-background/80 hover:bg-muted absolute top-3.5 right-3.5 z-10 flex size-8 items-center justify-center rounded-full border border-border shadow-xs transition-colors"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        {/* Header Banner */}
        <div className="bg-gradient-to-br from-primary/15 via-secondary to-accent/10 border-b border-border/60 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-primary-foreground rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase">
              Group {project.group}
            </span>
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${
                project.status === 'completed'
                  ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                  : 'bg-amber-500/20 text-amber-700 dark:text-amber-400'
              }`}
            >
              {project.status === 'completed' ? 'Completed' : 'Details Coming'}
            </span>
          </div>
          <h2 className="font-heading text-lg sm:text-xl font-extrabold text-foreground leading-tight">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-xs text-primary font-semibold mt-1">{project.subtitle}</p>
          )}

          {/* Team Members */}
          <div className="mt-2.5">
            <div className="flex items-center gap-2 mb-1.5">
              <Users className="size-3.5 text-muted-foreground shrink-0" />
              <span className="text-xs font-semibold text-foreground">Team Members</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.members.map((m) => (
                <span
                  key={m.name}
                  className="bg-background border border-border/80 rounded-full px-2.5 py-0.5 text-xs font-bold text-foreground"
                >
                  {m.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-5 p-5 sm:p-6">
          {/* Screenshot Preview */}
          {project.image && (
            <div className="overflow-hidden rounded-xl border border-border shadow-md bg-slate-950">
              <img
                src={project.image}
                alt={`${project.title} Interface Preview`}
                className="w-full h-auto object-cover max-h-[340px] hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="font-heading flex items-center gap-1.5 text-sm font-bold text-foreground mb-1.5">
              <BookOpen className="size-4 text-primary" />
              Project Overview
            </h3>
            <p className="text-xs leading-relaxed text-foreground/80 text-justify">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-heading flex items-center gap-1.5 text-sm font-bold text-foreground mb-1.5">
              <Code2 className="size-4 text-primary" />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary border border-primary/20 rounded-md px-2 py-0.5 text-[11px] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.features[0] !== 'Details to be announced' && (
            <div>
              <h3 className="font-heading flex items-center gap-1.5 text-sm font-bold text-foreground mb-2">
                <Sparkles className="size-4 text-primary" />
                Key Features
              </h3>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2 rounded-lg bg-card border border-border/80 px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-2xs"
                  >
                    <CheckCircle2 className="size-3.5 shrink-0 text-primary mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {project.benefits[0] !== 'Details to be announced' && (
            <div>
              <h3 className="font-heading flex items-center gap-1.5 text-sm font-bold text-foreground mb-2">
                <Cpu className="size-4 text-primary" />
                Benefits & Impact
              </h3>
              <ul className="space-y-1">
                {project.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-1.5 text-xs text-foreground/80">
                    <ChevronRight className="size-3.5 shrink-0 text-primary mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Industries */}
          {project.industries[0] !== 'Details to be announced' && (
            <div>
              <h3 className="font-heading flex items-center gap-1.5 text-sm font-bold text-foreground mb-1.5">
                <Globe className="size-4 text-primary" />
                Target Industries
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.industries.map((ind) => (
                  <span
                    key={ind}
                    className="bg-secondary border border-border/60 rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-foreground"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 border-t border-border/60">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-foreground text-background hover:bg-foreground/85 font-semibold text-xs px-3.5 py-2 rounded-lg transition-all shadow-xs"
              >
                <GitBranch className="size-3.5" />
                View on GitHub
                <ExternalLink className="size-3" />
              </a>
            )}
            {project.docUrl && (
              <a
                href={project.docUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs px-3.5 py-2 rounded-lg transition-all shadow-xs"
              >
                <FileText className="size-3.5" />
                Documentation
                <ExternalLink className="size-3" />
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto bg-muted hover:bg-secondary text-foreground font-semibold text-xs px-3.5 py-2 rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FYPCard({
  project,
  onViewDetails,
}: {
  project: FYPProject
  onViewDetails: () => void
}) {
  const isPlaceholder = project.status === 'ongoing'

  return (
    <div
      className={`bg-card group border flex flex-col overflow-hidden rounded-xl shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isPlaceholder ? 'border-dashed border-border/60' : 'border-border/80'
      }`}
    >
      {/* Project Image Preview (Compact) */}
      {project.image ? (
        <div className="relative aspect-video max-h-36 sm:max-h-40 w-full overflow-hidden bg-slate-950 border-b border-border/70">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}

      {/* Card Header (Compact) */}
      <div
        className={`relative p-3.5 sm:p-4 ${
          isPlaceholder
            ? 'bg-gradient-to-br from-muted/60 to-muted/20'
            : 'bg-gradient-to-br from-primary/10 via-secondary/60 to-accent/10'
        }`}
      >
        <div className="flex items-start justify-between gap-1.5 mb-1.5">
          <span className="bg-primary text-primary-foreground rounded px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase">
            Group {project.group}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${
              project.status === 'completed'
                ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                : 'bg-amber-400/20 text-amber-600 dark:text-amber-400'
            }`}
          >
            {project.status === 'completed' ? '✓ Completed' : '⏳ Coming Soon'}
          </span>
        </div>

        <h3
          className={`font-heading text-sm font-bold leading-snug transition-colors line-clamp-1 ${
            isPlaceholder ? 'text-muted-foreground' : 'text-foreground group-hover:text-primary'
          }`}
          title={project.title}
        >
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-[11px] text-primary font-medium mt-0.5 line-clamp-1">{project.subtitle}</p>
        )}
      </div>

      {/* Members (Compact) */}
      <div className="px-3.5 pt-2.5 pb-1">
        <div className="flex items-center gap-1.5 mb-1">
          <Users className="size-3 text-muted-foreground shrink-0" />
          <span className="text-[11px] font-semibold text-foreground">Team Members</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {project.members.map((m) => (
            <span
              key={m.name}
              className="bg-secondary border border-border/60 rounded-full px-2 py-0.5 text-[10px] font-semibold text-foreground"
            >
              {m.name}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack (Compact) */}
      <div className="px-3.5 pb-2.5 flex-1">
        <div className="flex flex-wrap gap-1 mt-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary border border-primary/20 rounded px-1.5 py-0.5 text-[10px] font-bold"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="bg-muted text-muted-foreground border border-border/60 rounded px-1.5 py-0.5 text-[10px] font-semibold">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer Buttons (Compact) */}
      <div className="p-3.5 pt-2 flex flex-col gap-1.5 border-t border-border/60 mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-foreground/90 hover:bg-foreground text-background font-semibold text-[11px] py-1.5 px-2.5 rounded-md flex items-center justify-center gap-1.5 transition-all duration-200 shadow-2xs"
          >
            <GitBranch className="size-3" />
            GitHub Repo
            <ExternalLink className="size-2.5" />
          </a>
        )}
        <button
          onClick={onViewDetails}
          disabled={isPlaceholder}
          className={`w-full font-semibold text-[11px] py-1.5 px-2.5 rounded-md flex items-center justify-center gap-1.5 transition-all duration-200 ${
            isPlaceholder
              ? 'bg-muted/50 text-muted-foreground cursor-not-allowed'
              : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
          }`}
        >
          <span>{isPlaceholder ? 'Details Coming Soon' : 'View Details'}</span>
          {!isPlaceholder && (
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </div>
    </div>
  )
}

function FYPPage() {
  const [activeProject, setActiveProject] = useState<FYPProject | null>(null)

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Page Header */}
      <section className="pt-8 pb-2 text-center">
        <div className="mx-auto flex flex-col items-center justify-center max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold text-primary mb-3">
            <GraduationCap className="size-3.5" />
            Batch 2022-2026
          </div>
          <h1 className="font-heading text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl text-center">
            Final Year Projects
          </h1>
          <p className="font-sans text-primary font-bold text-base sm:text-lg mt-1 tracking-wide">
            BS Computer Science Department
          </p>
          <p className="text-muted-foreground mx-auto mt-2 max-w-3xl text-center text-xs leading-relaxed sm:text-sm">
            Showcasing the innovative Final Year Projects developed by our graduating BS Computer Science batch of 2022-2026 at {site.name}. These projects demonstrate real-world problem solving, cutting-edge technology, and the academic excellence of our students.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-muted/40 border-border/80 border-y py-2.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">Home</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-semibold">Final Year Projects</span>
          </nav>
        </div>
      </section>

      {/* Project Cards Grid (Compact Zoom-out Layout) */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Centered Heading with No "— 5 Groups" */}
        <div className="flex items-center justify-center gap-2 mb-6 text-center">
          <span className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-lg">
            <Cpu className="size-4" />
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
            Project Showcase
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fypProjects.map((project) => (
            <FYPCard
              key={project.id}
              project={project}
              onViewDetails={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  )
}
