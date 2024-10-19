// Mocks
import { MOCK_FOODS } from '@/mocks'

// Components
import { InventoryFoodCard } from '@/components'

const InventoryFoodList = () => {
  // TODO: Handle fetch food list

  return (
    <ul className="xl:grid-cols- grid grid-cols-1 gap-x-6 gap-y-16 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {MOCK_FOODS().map((food) => (
        <li key={food.id}>
          <InventoryFoodCard {...food} />
        </li>
      ))}
    </ul>
  )
}

export default InventoryFoodList
