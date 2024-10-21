// Libs
import { Meta, StoryObj } from '@storybook/react'

// Mocks
import { MOCK_MOST_ORDERED_ITEM } from '@/mocks'

// Components
import { MostOrderedList } from '@/components'

const meta: Meta<typeof MostOrderedList> = {
  title: 'Components/Orders/MostOrderedList',
  component: MostOrderedList,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof MostOrderedList>

export const Default: Story = {
  args: {
    orderItem: MOCK_MOST_ORDERED_ITEM
  }
}
