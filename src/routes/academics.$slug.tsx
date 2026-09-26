import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, Clock, ExternalLink } from 'lucide-react'

import { ProgramIllustration } from '@/components/sections/program-illustration'
import { Badge } from '@/components/ui/badge'
import { programs, programsPendingConfirmation } from '@/data/programs'
import { programDetails } from '@/data/program-details'
import { site } from '@/data/site'

const allPrograms = [...programs, ...programsPendingConfirmation]

export const Route = createFileRoute('/academics/$slug')({
  component: ProgramDetailPage,
  loader: ({ params }) => {
    const program = allPrograms.find((p) => p.slug === params.slug)
    if (!program) throw notFound()
    return { program, detail: programDetails[params.slug] }
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.program.title} — ${site.name}` }] : [],
  }),
})

function ProgramDetailPage() {
  const { program, detail } = Route.useLoaderData()

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link to="/academics" className="text-primary mb-8 inline-flex items-center gap-1.5 text-sm font-medium">
        <ArrowLeft className="size-4" />
        Back to Academics
      </Link>

      <ProgramIllustration slug={program.slug} className="mb-6 h-48 w-full rounded-2xl" />

      <Badge variant="secondary" className="w-fit">
        {program.level}
      </Badge>
      <h1 className="font-heading text-primary mt-3 text-3xl font-bold text-balance sm:text-4xl">
        {program.title}
      </h1>
      <span className="text-muted-foreground mt-2 flex items-center gap-1.5 text-sm">
        <Clock className="size-4" />
        {program.duration}
      </span>

      {program.subjects ? (
        <p className="text-foreground/85 mt-4">
          <span className="font-medium">Subjects:</span> {program.subjects.join(', ')}
        </p>
      ) : null}

      {detail ? (
        <div className="mt-8 flex flex-col gap-8">
          <p className="text-foreground/85 text-base leading-relaxed text-pretty">{detail.overview}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {detail.facts.map((fact) => (
              <div key={fact.label} className="border-border rounded-lg border p-4">
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                  {fact.label}
                </span>
                <p className="text-foreground mt-1 text-sm">{fact.value}</p>
              </div>
            ))}
          </div>

          {detail.breakdown ? (
            <div>
              <h2 className="font-heading text-foreground mb-3 text-lg font-semibold">
                Curriculum Breakdown
              </h2>
              <div className="flex flex-col gap-2">
                {detail.breakdown.map((row) => (
                  <div key={row.label} className="flex items-center justify-between text-sm">
                    <span className="text-foreground/80">{row.label}</span>
                    <span className="text-primary font-semibold">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="border-border border-t pt-6">
            <h2 className="text-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
              Sources
            </h2>
            <ul className="flex flex-col gap-2">
              {detail.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary inline-flex items-center gap-1.5 text-sm underline underline-offset-2"
                  >
                    {source.label}
                    <ExternalLink className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </article>
  )
}
