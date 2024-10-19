// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { CategoriesTab } from '@/components'

const meta: Meta<typeof CategoriesTab> = {
  title: 'Components/Categories/CategoriesTab',
  component: CategoriesTab,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof CategoriesTab>

export const Default: Story = {}
