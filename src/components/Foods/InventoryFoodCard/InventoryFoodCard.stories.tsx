// Libs
import { Meta, StoryObj } from '@storybook/react'

// Mocks
import { MOCK_FOOD } from '@/mocks'

// Components
import { InventoryFoodCard } from '@/components'

const meta: Meta<typeof InventoryFoodCard> = {
  title: 'Components/Foods/InventoryFoodCard',
  component: InventoryFoodCard,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof InventoryFoodCard>

export const Default: Story = {
  args: { ...MOCK_FOOD }
}

export const OutOfStock: Story = {
  args: {
    ...MOCK_FOOD,
    quantity: 0
  }
}

export const EuroCurrency: Story = {
  args: {
    ...MOCK_FOOD,
    currencyUnit: '€',
    price: 5.49
  }
}
