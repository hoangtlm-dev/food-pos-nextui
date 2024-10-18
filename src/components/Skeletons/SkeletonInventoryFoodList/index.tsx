// Constants
import { PAGINATION } from '@/constants'

// Components
import { SkeletonInventoryFoodCard } from '@/components'

interface ISkeletonInventoryFoodListProps {
  totalItems?: number
}

const SkeletonInventoryFoodList = ({
  totalItems = PAGINATION.DEFAULT_ITEMS_PER_PAGE
}: ISkeletonInventoryFoodListProps) => {
  return (
    <div className="xl:grid-cols- grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: totalItems }).map((_, index) => (
        <SkeletonInventoryFoodCard key={index} />
      ))}
    </div>
  )
}

export default SkeletonInventoryFoodList
