import { site } from '@/data/site'

export function MapEmbed({ className }: { className?: string }) {
  const { lat, lng } = site.address
  const src = `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`

  return (
    <iframe
      title={`${site.name} — location map`}
      src={src}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
