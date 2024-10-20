// Components
import { CategoriesTab, InventoryFoodList } from '@/components'

const Products = () => {
  return (
    <section className="flex h-full w-full flex-col gap-6 rounded-xxs bg-content1 p-6">
      <h2 className="text-md font-semibold">Products Management</h2>
      <CategoriesTab />
      <InventoryFoodList />
    </section>
  )
}

export default Products
