// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { SkeletonInventoryFoodList } from '@/components'

const meta: Meta<typeof SkeletonInventoryFoodList> = {
  title: 'Components/Skeletons/SkeletonInventoryFoodList',
  component: SkeletonInventoryFoodList,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof SkeletonInventoryFoodList>

export const Default: Story = {}
