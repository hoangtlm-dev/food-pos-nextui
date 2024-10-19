// Libs
import { cloneElement, ReactElement } from 'react'
import { Meta, StoryObj } from '@storybook/react'

// Types
import { IIconProps } from '@/types'

// Components
import {
  DashboardIcon,
  DiscountIcon,
  HomeIcon,
  MessageIcon,
  NotificationIcon,
  SettingIcon,
  LogoutIcon,
  SearchIcon,
  EditIcon,
  HeartIcon,
  RestaurantIcon,
  SecurityIcon,
  AboutIcon
} from '@/components'

// Styles
import '@/app/globals.css'

type StoryWrapperProps = IIconProps & {
  children: ReactElement
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StoryWrapper = ({ children }: StoryWrapperProps) => {
  return children
}

const meta: Meta<typeof StoryWrapper> = {
  title: 'Components/Icons',
  argTypes: {
    children: { table: { disable: true } },
    width: {
      control: 'select',
      options: [4, 8, 12, 16, 20, 24, 28, 32, 36]
    },
    height: {
      control: 'select',
      options: [4, 8, 12, 16, 20, 24, 28, 32, 36]
    },
    color: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof StoryWrapper>

const template: Story = {
  render: ({ children, ...rest }) => {
    return cloneElement(children, rest)
  }
}

const icons = [
  <HomeIcon key="home" />,
  <DiscountIcon key="discount" />,
  <DashboardIcon key="dashboard" />,
  <MessageIcon key="message" />,
  <NotificationIcon key="notification" />,
  <SettingIcon key="setting" />,
  <LogoutIcon key="logout" />,
  <SearchIcon key="search" />,
  <EditIcon key="edit" />,
  <HeartIcon key="heart" />,
  <RestaurantIcon key="restaurant" />,
  <SecurityIcon key="security" />,
  <AboutIcon key="about" />
]

export const All: Story = {
  ...template,
  render: (args) => (
    <div className="container flex flex-wrap items-center gap-4">
      {icons.map((icon) => cloneElement(icon, { ...args }))}
    </div>
  )
}

export const Home: Story = {
  ...template,
  args: {
    children: <HomeIcon />
  }
}

export const Discount: Story = {
  ...template,
  args: {
    children: <DiscountIcon />
  }
}

export const Dashboard: Story = {
  ...template,
  args: {
    children: <DashboardIcon />
  }
}

export const Message: Story = {
  ...template,
  args: {
    children: <MessageIcon />
  }
}

export const Notification: Story = {
  ...template,
  args: {
    children: <NotificationIcon />
  }
}

export const Setting: Story = {
  ...template,
  args: {
    children: <SettingIcon />
  }
}

export const Logout: Story = {
  ...template,
  args: {
    children: <LogoutIcon />
  }
}

export const Search: Story = {
  ...template,
  args: {
    children: <SearchIcon />
  }
}

export const Edit: Story = {
  ...template,
  args: {
    children: <EditIcon />
  }
}

export const Heart: Story = {
  ...template,
  args: {
    children: <HeartIcon />
  }
}

export const Restaurant: Story = {
  ...template,
  args: {
    children: <RestaurantIcon />
  }
}

export const Security: Story = {
  ...template,
  args: {
    children: <SecurityIcon />
  }
}

export const About: Story = {
  ...template,
  args: {
    children: <AboutIcon />
  }
}
