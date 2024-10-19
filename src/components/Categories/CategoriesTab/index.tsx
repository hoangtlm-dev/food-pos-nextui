// Libs
import { Tab } from '@nextui-org/react'

// Mocks
import { MOCK_CATEGORIES } from '@/mocks'

// Components
import { Tabs } from '@/components'

const CategoriesTab = () => {
  return (
    <Tabs aria-label="Categories">
      {MOCK_CATEGORIES.map((category) => {
        const { id, name } = category

        return <Tab key={id} title={<span>{name}</span>} />
      })}
    </Tabs>
  )
}

export default CategoriesTab
