// Libs
import { Meta, StoryObj } from '@storybook/react'

// Themes
import { accentColors } from '@/themes'

// Components
import { OrderIcon, StatisticCard } from '@/components'

const meta: Meta<typeof StatisticCard> = {
  title: 'Components/StatisticCard',
  component: StatisticCard,
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof StatisticCard>

const DEFAULT_STORY_ARGS = {
  icon: <OrderIcon color={accentColors['accent-orange']} />,
  developmentNumber: 12.4,
  statisticNumber: 23456,
  statisticDescription: 'Total Dish Ordered'
}

export const Default: Story = {
  args: DEFAULT_STORY_ARGS
}

export const DecreaseStatistic: Story = {
  args: {
    ...DEFAULT_STORY_ARGS,
    isIncreasing: false,
    developmentNumber: -12.4
  }
}

export const NumberWithCurrencyUnit = {
  args: {
    ...DEFAULT_STORY_ARGS,
    currencyUnit: '$'
  }
}
