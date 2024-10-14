// Libs
import { Meta, StoryObj } from '@storybook/react'

// Components
import { Input, SearchIcon } from '@/components'

// Themes
import { systemColors } from '@/themes'

const meta: Meta<typeof Input> = {
  title: 'Components/common/Input',
  component: Input,
  argTypes: {
    color: {
      control: 'color'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    radius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    border: {
      control: 'select',
      options: ['default']
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Enter your text'
    },
    isClearable: {
      control: 'boolean',
      defaultValue: true
    }
  },
  decorators: [(Story) => <Story />]
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter your text',
    color: 'default',
    size: 'md',
    radius: 'sm',
    border: 'default',
    isClearable: true
  }
}

export const InputWithStartIcon: Story = {
  args: {
    placeholder: 'Enter your text',
    startContent: <SearchIcon color={systemColors.white} />
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    isDisabled: true
  }
}
