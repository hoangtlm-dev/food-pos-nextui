// Libs
import { Link } from '@nextui-org/react'

// Constants
import { ROUTES } from '@/constants'

interface IPlaceholderPageProps {
  pageName?: string
}

const PlaceholderPage = ({ pageName = 'Placeholder' }: IPlaceholderPageProps) => {
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">{pageName}</h2>
        <p className="text-center text-md">🔥 The {pageName} page! Coming soon!</p>
        <Link className="font-medium text-primary hover:opacity-80" href={ROUTES.HOME}>
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default PlaceholderPage
