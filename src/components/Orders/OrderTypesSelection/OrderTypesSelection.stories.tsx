// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { OrderTypesSelection } from '@/components'

const meta: Meta<typeof OrderTypesSelection> = {
  title: 'Components/Orders/OrderTypeSelection',
  component: OrderTypesSelection,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof OrderTypesSelection>

export const Default: Story = {
  args: {
    className: 'w-[200px]'
  }
}
