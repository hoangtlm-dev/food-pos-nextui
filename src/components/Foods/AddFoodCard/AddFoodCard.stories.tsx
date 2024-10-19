// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { AddFoodCard } from '@/components'

const meta: Meta<typeof AddFoodCard> = {
  title: 'Components/Foods/AddFoodCard',
  component: AddFoodCard,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof AddFoodCard>

export const Default: Story = {}
