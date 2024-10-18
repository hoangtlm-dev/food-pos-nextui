// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { SkeletonCustomerFoodList } from '@/components'

const meta: Meta<typeof SkeletonCustomerFoodList> = {
  title: 'Components/Skeletons/SkeletonCustomerFoodList',
  component: SkeletonCustomerFoodList,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof SkeletonCustomerFoodList>

export const Default: Story = {}
