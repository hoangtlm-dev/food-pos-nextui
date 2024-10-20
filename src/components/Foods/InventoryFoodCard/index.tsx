// Libs
import NextImage from 'next/image'
import { Button, Card, Image } from '@nextui-org/react'

// Types
import { Food } from '@/types'

// Themes
import { systemColors } from '@/themes'

// Components
import { EditIcon } from '@/components'

const InventoryFoodCard = ({ name, imageUrl, price, currencyUnit = '$', quantity }: Food) => {
  return (
    <Card className="relative h-[320px] w-full flex-col items-center gap-4 rounded-sm border border-dark-line bg-content1 p-4 shadow-none">
      {/* Food's image */}
      <div className="h-32 w-32 overflow-hidden rounded-full">
        <Image as={NextImage} width={128} height={128} src={imageUrl} alt={name} />
      </div>

      {/*Food's Name */}
      <h3 className="text-primaryFg line-clamp-2 min-h-5 text-wrap px-4 text-center text-xs font-medium">{name}</h3>

      {/* Price & quantity*/}
      <div className="flex items-center gap-2">
        <span className="text-xs text-light-primary">
          {currencyUnit}
          {price}
        </span>
        <span className="font-semibold text-light-primary">•</span>
        <span className="text-xs text-light-primary">
          {quantity > 0 ? `${quantity} ${quantity > 1 ? 'Bowls' : 'Bowl'} available` : 'Sold out'}
        </span>
      </div>

      {/* Button */}
      <div className="absolute bottom-0 left-0 right-0 flex h-14 items-center justify-center border-t border-t-dark-line">
        <Button className="relative h-full w-full overflow-hidden rounded-none font-semibold text-primary before:absolute before:inset-0 before:left-0 before:rounded-b-xxs before:rounded-t-none before:bg-primary before:opacity-25">
          <EditIcon color={systemColors.primary} />
          <span> Edit dish</span>
        </Button>
      </div>
    </Card>
  )
}

export default InventoryFoodCard
