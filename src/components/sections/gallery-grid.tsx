import { useState } from 'react'
import { ImageIcon, X, ZoomIn } from 'lucide-react'

import { gallery, type GalleryImage } from '@/data/gallery'
import { cn } from '@/lib/utils'

const categories = [
  'All',
  'Graduates & Alumni',
  'Color Day Festival',
  'Sports Gala',
  'Seminars & Workshops',
  'Campus & Academics',
] as const

function Tile({
  image,
  onClick,
}: {
  image: GalleryImage
  onClick?: () => void
}) {
  if (!image.src) {
    return (
      <div className="border-border bg-muted/50 text-muted-foreground/60 flex aspect-4/3 w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed">
        <ImageIcon className="size-8" strokeWidth={1.5} />
        <span className="px-2 text-center text-xs">{image.alt}</span>
      </div>
    )
  }

  return (
    <figure
      onClick={onClick}
      className="group relative aspect-4/3 w-full overflow-hidden rounded-xl shadow-2xs border border-border/60 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
        <span className="bg-white/90 text-primary p-2 rounded-full shadow-md">
          <ZoomIn className="size-5" />
        </span>
      </div>
      {image.caption ? (
        <figcaption className="from-black/85 via-black/40 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-3 py-2 text-xs font-semibold text-white">
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
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

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
                'rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200',
                active === category
                  ? 'bg-primary text-primary-foreground border-primary shadow-2xs'
                  : 'border-border bg-background hover:bg-secondary hover:text-primary text-foreground/80',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className={cn('grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4', className)}>
        {items.map((image) => (
          <Tile
            key={image.id}
            image={image}
            onClick={() => image.src && setLightboxImage(image)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && lightboxImage.src && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs transition-opacity duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-card border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="bg-black/60 hover:bg-black/80 text-white absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full border border-white/20 transition-colors"
              aria-label="Close photo"
            >
              <X className="size-5" />
            </button>

            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[75vh] w-auto object-contain mx-auto"
            />
            {lightboxImage.caption && (
              <div className="bg-card p-4 text-center border-t border-border">
                <p className="font-heading text-sm font-bold text-foreground">
                  {lightboxImage.caption}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {lightboxImage.alt} — Category: <span className="text-primary font-semibold">{lightboxImage.category}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
