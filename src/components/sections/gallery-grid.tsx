import { ImageIcon } from 'lucide-react'

import { gallery } from '@/data/gallery'
import { cn } from '@/lib/utils'

export function GalleryGrid({ limit, className }: { limit?: number; className?: string }) {
  const items = limit ? gallery.slice(0, limit) : gallery

  return (
    <div className={cn('grid grid-cols-2 gap-4 sm:grid-cols-3', className)}>
      {items.map((image) =>
        image.src ? (
          <figure
            key={image.id}
            className="border-border group relative aspect-4/3 w-full overflow-hidden rounded-lg border shadow-sm"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {image.caption ? (
              <figcaption className="from-black/70 absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent px-3 py-2 text-xs font-medium text-white">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : (
          <div
            key={image.id}
            className="border-border bg-muted/50 text-muted-foreground/60 flex aspect-4/3 w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed"
          >
            <ImageIcon className="size-8" strokeWidth={1.5} />
            <span className="px-2 text-center text-xs">{image.alt}</span>
          </div>
        ),
      )}
    </div>
  )
}
