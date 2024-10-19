'use client'

// Libs
import { usePathname } from 'next/navigation'
import { Link } from '@nextui-org/react'

// Constants
import { SETTINGS_ROUTES } from '@/constants'

// Themes
import { customColors } from '@/themes'

// Components
import { AboutIcon, DiscountIcon, HeartIcon, NotificationIcon, RestaurantIcon, SecurityIcon } from '@/components'

const settingSubLinks = [
  {
    name: 'Appearance',
    description: 'Dark and Light mode, Font size',
    href: SETTINGS_ROUTES.APPEARANCE,
    icon: HeartIcon
  },
  {
    name: 'Your restaurant',
    description: 'Manage your restaurant',
    href: SETTINGS_ROUTES.YOUR_RESTAURANT,
    icon: RestaurantIcon
  },
  {
    name: 'Products Management',
    description: 'Manage your product, pricing, etc',
    href: SETTINGS_ROUTES.PRODUCTS_MANAGEMENT,
    icon: DiscountIcon
  },
  {
    name: 'Notifications',
    description: 'Customize your notifications',
    href: SETTINGS_ROUTES.SETTINGS_NOTIFICATIONS,
    icon: NotificationIcon
  },
  {
    name: 'Security',
    description: 'Configure Password, PIN, etc',
    href: SETTINGS_ROUTES.SECURITY,
    icon: SecurityIcon
  },
  {
    name: 'About Us',
    description: 'Find out more about Posly',
    href: SETTINGS_ROUTES.ABOUT_US,
    icon: AboutIcon
  }
]

const SettingsNavbar = () => {
  const pathName = usePathname()

  return (
    <ul className="grid grid-cols-6 rounded-xxs bg-content1 xl:flex xl:min-w-[280px] xl:flex-col xl:gap-0">
      {settingSubLinks.map((link) => {
        const { name, description, href, icon } = link
        const LinkIcon = icon

        const isActive = pathName === href

        return (
          <li
            key={name}
            className={`${isActive ? 'bg-primary/10 first:rounded-l-xxs last:rounded-r-xxs xl:first:rounded-t-xxs xl:first:rounded-bl-none xl:last:rounded-b-xxs xl:last:rounded-tr-none' : ''} ? relative w-full`}
          >
            <Link
              href={href}
              className={`${isActive ? 'before:absolute before:bottom-0 before:h-1 before:w-full before:rounded-xxs before:bg-primary xl:before:right-0 xl:before:top-1/2 xl:before:h-10 xl:before:w-1 xl:before:-translate-y-1/2' : ''} flex w-full justify-center gap-2 px-2 py-4 md:px-6 xl:items-start xl:justify-start xl:py-6`}
            >
              <LinkIcon
                width={20}
                height={20}
                color={isActive ? customColors.primary : customColors['light-secondary']}
              />
              <div className="hidden flex-col gap-2 xl:flex">
                <h3 className={`${isActive ? 'text-primary' : 'text-light-primary'} text-xs font-medium leading-none`}>
                  {name}
                </h3>
                <p className="text-xs text-light-primary">{description}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SettingsNavbar
