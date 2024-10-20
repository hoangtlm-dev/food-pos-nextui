// Libs
import NextImage from 'next/image'
import { Button, Card, Image } from '@nextui-org/react'

// Types
import { Food } from '@/types'

const CustomerFoodCard = ({ name, imageUrl, price, currencyUnit = '$', quantity }: Food) => {
  return (
    <Card className="relative h-[260px] w-full overflow-visible rounded-sm bg-content1 p-4 shadow-none">
      {/* Food's image */}
      <div className="absolute -top-10 left-1/2 z-20 h-32 w-32 -translate-x-1/2 overflow-hidden rounded-full">
        <Image as={NextImage} width={128} height={128} src={imageUrl} alt={name} />
      </div>

      {/* Food's info & Button */}
      <div className="mt-20 flex w-full flex-grow flex-col items-center justify-around">
        <h3 className="line-clamp-2 min-h-5 text-wrap px-12 text-center text-xs font-medium">{name}</h3>
        <span className="text-xs">
          {currencyUnit}
          {price}
        </span>
        <span className="text-xs text-light-primary">
          {quantity > 0 ? `${quantity} ${quantity > 1 ? 'Bowls' : 'Bowl'} available` : 'Sold out'}
        </span>
        <Button variant="bordered" color="primary" size="sm" className="rounded-xxs text-xs font-bold">
          Order Now
        </Button>
      </div>
    </Card>
  )
}

export default CustomerFoodCard
