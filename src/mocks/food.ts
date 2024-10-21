// Constants
import { PAGINATION } from '@/constants'

// Types
import { Food } from '@/types'

export const MOCK_FOOD: Food = {
  id: 1,
  name: 'Spicy seasoned seafood noodles',
  imageUrl: 'https://i.ibb.co/p676DzK/Images.png',
  price: 2.29,
  quantity: 20,
  categoryId: 1,
  categoryName: 'Hot dishes'
}

export const MOCK_FOODS = (length?: number): Food[] =>
  Array.from({ length: length ?? PAGINATION.DEFAULT_ITEMS_PER_PAGE }, (_, index) => ({
    ...MOCK_FOOD,
    id: index + 1
  }))
