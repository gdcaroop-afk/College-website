import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink } from 'lucide-react'

import { highlights } from '@/data/highlights'
import { site } from '@/data/site'

export const Route = createFileRoute('/highlights/$slug')({
  component: HighlightDetailPage,
  loader: ({ params }) => {
    const item = highlights.find((h) => h.slug === params.slug)
    if (!item) throw notFound()
    return item
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.title} — ${site.name}` }] : [],
  }),
})

function HighlightDetailPage() {
  const item = Route.useLoaderData()

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link
          to="/"
          className="bg-background border border-border text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground shadow-2xs px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 text-xs font-semibold transition-all duration-200"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Home</span>
        </Link>
        <span className="bg-accent text-accent-foreground font-bold px-2.5 py-0.5 rounded text-xs uppercase tracking-wider shadow-2xs">
          Institutional Overview
        </span>
      </div>

      <h1 className="font-heading text-primary mt-3 text-3xl font-bold text-balance sm:text-4xl">
        {item.title}
      </h1>
      <p className="text-muted-foreground mt-2 text-lg">{item.summary}</p>

      <div className="mt-8 flex flex-col gap-4">
        {item.body.map((paragraph, i) => (
          <p key={i} className="text-foreground/85 text-base leading-relaxed text-pretty">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="border-border mt-10 border-t pt-6">
        <h2 className="text-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
          Sources
        </h2>
        <ul className="flex flex-col gap-2">
          {item.sources.map((source) => (
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
    </article>
  )
}
