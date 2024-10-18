type CurrencyUnit = '€' | '$' | '¥' | '£'

export type Food = {
  id: number
  name: string
  imageUrl: string
  price: number
  currencyUnit?: CurrencyUnit
  quantity: number
}
