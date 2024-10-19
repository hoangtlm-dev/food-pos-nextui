// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { CustomerFoodList } from '@/components'

const meta: Meta<typeof CustomerFoodList> = {
  title: 'Components/Foods/CustomerFoodList',
  component: CustomerFoodList,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof CustomerFoodList>

export const Default: Story = {}
