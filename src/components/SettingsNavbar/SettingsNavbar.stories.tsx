// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { SettingsNavbar } from '@/components'

const meta: Meta<typeof SettingsNavbar> = {
  title: 'Components/SettingsNavbar',
  component: SettingsNavbar,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof SettingsNavbar>

export const Default: Story = {}
