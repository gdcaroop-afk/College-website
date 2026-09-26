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
      <Link to="/" className="text-primary mb-8 inline-flex items-center gap-1.5 text-sm font-medium">
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>

      <span className="text-accent-foreground bg-accent/20 w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
        Institutional Overview
      </span>
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
