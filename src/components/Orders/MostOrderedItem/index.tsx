// Libs
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

// Types
import { OrderItem } from '@/types'

interface IMostOrderedItemProps {
  orderItem: OrderItem
}

const MostOrderedItem = ({ orderItem }: IMostOrderedItemProps) => {
  const { foodName, foodImageUrl, orderedQuantity } = orderItem

  return (
    <div className="flex gap-2">
      <Image as={NextImage} width={55} height={55} src={foodImageUrl} alt={foodName} />
      <div className="flex flex-col">
        <span className="text-xxs line-clamp-1 font-medium text-light-secondary">{foodName}</span>
        <span className="text-xs text-light-primary">{orderedQuantity} dishes ordered</span>
      </div>
    </div>
  )
}

export default MostOrderedItem
