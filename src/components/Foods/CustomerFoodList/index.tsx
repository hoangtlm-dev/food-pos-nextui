// Mocks
import { MOCK_FOODS } from '@/mocks'

// Components
import { CustomerFoodCard } from '@/components'

const CustomerFoodList = () => {
  // TODO: Handle fetch food list

  return (
    <ul className="mt-20 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {MOCK_FOODS().map((food) => (
        <li key={food.id}>
          <CustomerFoodCard {...food} />
        </li>
      ))}
    </ul>
  )
}

export default CustomerFoodList
