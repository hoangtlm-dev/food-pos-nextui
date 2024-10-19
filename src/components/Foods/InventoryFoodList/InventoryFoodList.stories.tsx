// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { InventoryFoodList } from '@/components'

const meta: Meta<typeof InventoryFoodList> = {
  title: 'Components/Foods/InventoryFoodList',
  component: InventoryFoodList,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof InventoryFoodList>

export const Default: Story = {}
