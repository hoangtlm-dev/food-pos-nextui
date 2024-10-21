// Types
import { CurrencyUnit } from '@/types'

export type Food = {
  id: number
  name: string
  imageUrl: string
  price: number
  currencyUnit?: CurrencyUnit
  quantity: number
  categoryId: number
  categoryName: string
}
