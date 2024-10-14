// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { SideNav } from '@/components'

const meta: Meta<typeof SideNav> = {
  title: 'Components/SideNav',
  component: SideNav,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof SideNav>

export const Default: Story = {}
