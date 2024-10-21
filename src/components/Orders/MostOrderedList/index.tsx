// Mocks
import { MOCK_MOST_ORDERED_LIST } from '@/mocks'

// Components
import { MostOrderedItem } from '@/components'

const MostOrderedList = () => {
  // TODO: Fetch data for most ordered list

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-xxs bg-content1 p-6">
      <h2 className="border-b border-dark-line py-6 text-md font-semibold">Most Ordered</h2>
      <ul className="flex flex-col gap-6">
        {MOCK_MOST_ORDERED_LIST(3).map((orderItem) => (
          <li key={orderItem.id}>
            <MostOrderedItem orderItem={orderItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MostOrderedList
