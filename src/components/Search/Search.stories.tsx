// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { Search } from '@/components'

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {}
