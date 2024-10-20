// Mocks
import { MOCK_FOODS } from '@/mocks'

// Components
import { AddFoodCard, InventoryFoodCard } from '@/components'

const InventoryFoodList = () => {
  // TODO: Handle fetch food list

  return (
    <ul className="grid grid-cols-1 gap-6 overflow-y-auto py-4 sm:grid-cols-2 md:grid-cols-3 xl:pr-4 2xl:grid-cols-4 [&::-webkit-scrollbar-thumb]:rounded-xxs [&::-webkit-scrollbar-thumb]:bg-dark-line [&::-webkit-scrollbar-track]:bg-content1 [&::-webkit-scrollbar]:w-1">
      <li>
        <AddFoodCard />
      </li>
      {MOCK_FOODS(5).map((food) => (
        <li key={food.id}>
          <InventoryFoodCard {...food} />
        </li>
      ))}
    </ul>
  )
}

export default InventoryFoodList
