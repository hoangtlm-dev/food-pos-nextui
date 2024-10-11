// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { PlaceholderPage } from '@/components'

const meta: Meta<typeof PlaceholderPage> = {
  title: 'Components/PlaceholderPage',
  component: PlaceholderPage,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof PlaceholderPage>

export const Default: Story = {}
