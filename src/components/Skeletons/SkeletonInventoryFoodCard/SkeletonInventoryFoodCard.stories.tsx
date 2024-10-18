// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { SkeletonInventoryFoodCard } from '@/components'

const meta: Meta<typeof SkeletonInventoryFoodCard> = {
  title: 'Components/Skeletons/SkeletonInventoryFoodCard',
  component: SkeletonInventoryFoodCard,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof SkeletonInventoryFoodCard>

export const Default: Story = {}
