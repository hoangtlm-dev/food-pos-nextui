// Libs
import { Meta, StoryObj } from '@storybook/react'

// Mocks
import { MOCK_FOOD } from '@/mocks'

// Components
import { CustomerFoodCard } from '@/components'

const meta: Meta<typeof CustomerFoodCard> = {
  title: 'Components/Foods/CustomerFoodCard',
  component: CustomerFoodCard,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof CustomerFoodCard>

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
