// Constants
import { PLACEHOLDERS } from '@/constants'

// Components
import { CategoriesTab, CustomerFoodList, Search } from '@/components'

const Home = () => {
  return (
    <div className="flex h-full">
      <div className="grow overflow-y-auto p-6 lg:basis-4/5 lg:p-8 [&::-webkit-scrollbar-thumb]:rounded-xxs [&::-webkit-scrollbar-thumb]:bg-dark-line [&::-webkit-scrollbar-track]:bg-content1 [&::-webkit-scrollbar]:w-1">
        {/* Header & Search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold">Jaegar Resto</h1>
            <p className="text-sm text-light-secondary">Tuesday, 2 Feb 2021</p>
          </div>
          <Search placeholder={PLACEHOLDERS.SEARCH_FOOD} className="text-xs sm:w-72 lg:w-60 xl:w-80" />
        </div>

        {/* Food list */}
        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-md font-semibold">Choose Dishes</h2>
            {/* TODO: Display OrderTypeDropdown */}
          </div>
          <CategoriesTab />
          <CustomerFoodList />
        </section>
      </div>
      <div className="hidden h-full w-[400px] bg-content1 lg:flex">{/* TODO: Display dishes in order */}</div>
    </div>
  )
}

export default Home
