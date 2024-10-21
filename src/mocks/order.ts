// Constants
import { PAGINATION } from '@/constants'

// Types
import { OrderItem, OrderTypes } from '@/types'

export const MOCK_ORDER_TYPES: OrderTypes[] = [
  {
    id: 1,
    name: 'Dine In'
  },
  {
    id: 2,
    name: 'To go'
  },
  {
    id: 3,
    name: 'Delivery'
  }
]

export const MOCK_MOST_ORDERED_ITEM: OrderItem = {
  id: 1,
  foodName: 'Spicy seasoned seafood noodles',
  foodImageUrl: 'https://i.ibb.co/p676DzK/Images.png',
  foodPrice: 2.29,
  orderedQuantity: 100,
  quantity: 20
}

export const MOCK_MOST_ORDERED_LIST = (length?: number): OrderItem[] =>
  Array.from({ length: length ?? PAGINATION.DEFAULT_ITEMS_PER_PAGE }, (_, index) => ({
    ...MOCK_MOST_ORDERED_ITEM,
    id: index + 1
  }))
