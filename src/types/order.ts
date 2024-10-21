export type OrderTypes = {
  id: number
  name: 'Dine In' | 'To go' | 'Delivery'
}

export type OrderItem = {
  id: number
  foodName: string
  foodImageUrl: string
  foodPrice: number
  orderedQuantity: number
  quantity: number
}
