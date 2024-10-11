// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { BrandingLogo } from '@/components'

const meta: Meta<typeof BrandingLogo> = {
  title: 'Components/BrandingLogo',
  component: BrandingLogo,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof BrandingLogo>

export const Default: Story = {}
