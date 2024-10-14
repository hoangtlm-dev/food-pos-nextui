// Libs
import { Meta, StoryObj } from '@storybook/react'

// Constants
import { IMAGES } from '@/constants'

// Components
import { BrandingLogo } from '@/components'

const meta: Meta<typeof BrandingLogo> = {
  title: 'Components/BrandingLogo',
  component: BrandingLogo,
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof BrandingLogo>

export const Default: Story = {
  args: {
    src: IMAGES.LOGO
  }
}
