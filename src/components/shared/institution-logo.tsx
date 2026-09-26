
import pieasLogoImg from '@/assets/pieas.jpg'
import puLogoImg from '@/assets/pu.png'
import qauLogoImg from '@/assets/qua.jpg'
import vuLogoImg from '@/assets/vu.jpg'
import uogLogoImg from '@/assets/uog-logo.png'

interface InstitutionLogoProps {
  code: string
  className?: string
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function InstitutionLogo({
  code,
  className,
  showLabel = true,
  size = 'md',
}: InstitutionLogoProps) {
  const imgSizeClass =
    size === 'sm' ? 'h-4 w-auto max-w-7' : size === 'lg' ? 'h-7 w-auto max-w-12' : 'h-5 w-auto max-w-8'

  const getImageSrc = () => {
    const c = code.toUpperCase()
    if (c === 'PIEAS') return pieasLogoImg
    if (c === 'PU') return puLogoImg
    if (c === 'QAU' || c === 'QUA') return qauLogoImg
    if (c === 'VU') return vuLogoImg
    if (c === 'UOG') return uogLogoImg
    return pieasLogoImg
  }

  const imageSrc = getImageSrc()

  const renderLogoImage = () => (
    <img
      src={imageSrc}
      alt={`${code} official logo`}
      className={`${imgSizeClass} object-contain shrink-0`}
    />
  )

  if (!showLabel) {
    return (
      <span title={code} className={`inline-flex items-center ${className ?? ''}`}>
        {renderLogoImage()}
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md bg-background border border-border/80 px-2 py-1 text-xs font-semibold text-foreground shadow-2xs transition-all hover:bg-secondary/60 ${className ?? ''}`}
    >
      {renderLogoImage()}
      <span className="font-bold text-foreground">{code}</span>
    </span>
  )
}
