// Libs
import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'

// Mocks
import { MOCK_FOOD } from '@/mocks'

// Components
import { MutationFoodForm } from '@/components'

const meta: Meta<typeof MutationFoodForm> = {
  title: 'Components/Foods/MutationFoodForm',
  component: MutationFoodForm,
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: true
    },
    data: {
      control: 'object'
    }
  },
  decorators: [(Story) => <Story />]
}

export default meta

const Template: StoryFn<typeof MutationFoodForm> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen)

  const handleClose = () => {
    setIsOpen(false)
    args.onClose()
  }

  return <MutationFoodForm {...args} isOpen={isOpen} onClose={handleClose} />
}

export const Default = Template.bind({})
Default.args = {
  isOpen: true
}

export const WithData = Template.bind({})
WithData.args = {
  isOpen: true,
  data: MOCK_FOOD
}
