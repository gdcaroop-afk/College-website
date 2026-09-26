import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

import { gallery, type GalleryImage } from '@/data/gallery'
import { cn } from '@/lib/utils'

const categories = ['All', 'Campus', 'Academics', 'Admissions', 'Events', 'Sports'] as const

function Tile({ image }: { image: GalleryImage }) {
  if (!image.src) {
    return (
      <div className="border-border bg-muted/50 text-muted-foreground/60 flex aspect-4/3 w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed">
        <ImageIcon className="size-8" strokeWidth={1.5} />
        <span className="px-2 text-center text-xs">{image.alt}</span>
      </div>
    )
  }

  return (
    <figure className="group relative aspect-4/3 w-full overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {image.caption ? (
        <figcaption className="from-black/70 absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent px-3 py-2 text-xs font-medium text-white">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export function GalleryGrid({
  limit,
  filterable = false,
  className,
}: {
  limit?: number
  filterable?: boolean
  className?: string
}) {
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const filtered =
    active === 'All' ? gallery : gallery.filter((image) => image.category === active)
  const items = limit ? filtered.slice(0, limit) : filtered

  return (
    <div>
      {filterable ? (
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                active === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border bg-background hover:bg-muted text-foreground/80',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className={cn('grid grid-cols-2 gap-4 sm:grid-cols-3', className)}>
        {items.map((image) => (
          <Tile key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}
