// Constants
import { PAGINATION } from '@/constants'

// Components
import { SkeletonCustomerFoodCard } from '@/components'

interface ISkeletonCustomerFoodListProps {
  totalItems?: number
}

const SkeletonCustomerFoodList = ({
  totalItems = PAGINATION.DEFAULT_ITEMS_PER_PAGE
}: ISkeletonCustomerFoodListProps) => {
  return (
    <div className="xl:grid-cols- grid grid-cols-1 gap-x-6 gap-y-16 p-4 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: totalItems }).map((_, index) => (
        <SkeletonCustomerFoodCard key={index} />
      ))}
    </div>
  )
}

export default SkeletonCustomerFoodList
