// Libs
import NextImage from 'next/image'
import { Image, Link } from '@nextui-org/react'

// Constants
import { IMAGES, ROUTES } from '@/constants'

const BrandingLogo = () => {
  return (
    <Link href={ROUTES.HOME}>
      <Image as={NextImage} width={40} height={40} src={IMAGES.LOGO} alt="Branding logo image" />
    </Link>
  )
}

export default BrandingLogo
