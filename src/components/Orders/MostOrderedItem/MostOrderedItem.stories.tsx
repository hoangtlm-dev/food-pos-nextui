// Libs
import { Meta, StoryObj } from '@storybook/react'

// Mocks
import { MOCK_MOST_ORDERED_ITEM } from '@/mocks'

// Components
import { MostOrderedItem } from '@/components'

const meta: Meta<typeof MostOrderedItem> = {
  title: 'Components/Orders/MostOrderedItem',
  component: MostOrderedItem,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof MostOrderedItem>

export const Default: Story = {
  args: {
    orderItem: MOCK_MOST_ORDERED_ITEM
  }
}
