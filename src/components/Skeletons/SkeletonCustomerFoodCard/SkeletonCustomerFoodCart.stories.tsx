// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { SkeletonCustomerFoodCard } from '@/components'

const meta: Meta<typeof SkeletonCustomerFoodCard> = {
  title: 'Components/Skeletons/SkeletonCustomerFoodCard',
  component: SkeletonCustomerFoodCard,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof SkeletonCustomerFoodCard>

export const Default: Story = {}
