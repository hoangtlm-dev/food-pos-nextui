// Libs
import NextImage from 'next/image'
import { Image, Link } from '@nextui-org/react'

// Constants
import { IMAGES, ROUTES } from '@/constants'

interface IBrandingLogoProps {
  width?: number
  height?: number
  src: string
}

const BrandingLogo = ({
  width = IMAGES.DEFAULT_LOGO_WIDTH,
  height = IMAGES.DEFAULT_LOGO_HEIGHT,
  src
}: IBrandingLogoProps) => {
  return (
    <Link href={ROUTES.HOME}>
      <Image as={NextImage} width={width} height={height} src={src} alt="Branding logo image" />
    </Link>
  )
}

export default BrandingLogo
