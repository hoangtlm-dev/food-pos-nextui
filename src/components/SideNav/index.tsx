'use client'

// Libs
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button, Link, Navbar, NavbarBrand, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'

// Constants
import { IMAGES, ROUTES, SETTINGS_ROUTES } from '@/constants'

// Components
import {
  BrandingLogo,
  DashboardIcon,
  DiscountIcon,
  HomeIcon,
  LogoutIcon,
  MessageIcon,
  NotificationIcon,
  SettingIcon
} from '@/components'

// Themes
import { systemColors } from '@/themes'

// Utils
import { isSubRoute } from '@/utils'

const links = [
  { name: 'Home', href: ROUTES.HOME, icon: HomeIcon },
  {
    name: 'Discount',
    href: ROUTES.DISCOUNT,
    icon: DiscountIcon
  },
  { name: 'Dashboard', href: ROUTES.DASHBOARD, icon: DashboardIcon },
  { name: 'Messages', href: ROUTES.MESSAGES, icon: MessageIcon },
  { name: 'Notification', href: ROUTES.NOTIFICATION, icon: NotificationIcon },
  { name: 'Settings', href: SETTINGS_ROUTES.PRODUCTS_MANAGEMENT, icon: SettingIcon }
]

const SideNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathName = usePathname()

  return (
    <>
      {/* Mobile navbar */}
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="flex justify-between bg-content1 lg:hidden"
        isBlurred={false}
      >
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="lg:hidden" />
        <NavbarBrand>
          <Link href={ROUTES.HOME}>
            <BrandingLogo src={IMAGES.LOGO} />
          </Link>
        </NavbarBrand>
        <Button isIconOnly disabled={true}>
          <LogoutIcon />
        </Button>

        <NavbarMenu className="bottom-[unset] !h-[unset] gap-4 bg-content1 py-4">
          {links.map((link) => {
            const { name, href, icon } = link
            const LinkIcon = icon

            const isActive =
              link.name === 'Settings' ? isSubRoute(pathName, Object.values(SETTINGS_ROUTES)) : pathName === link.href

            return (
              <NavbarMenuItem key={name}>
                <Link
                  href={href}
                  className={`${isActive ? 'text-primary' : 'text-foreground-100'} flex items-center gap-4 font-medium`}
                  onPress={() => setIsMenuOpen(false)}
                >
                  <LinkIcon />
                  <span>{name}</span>
                </Link>
              </NavbarMenuItem>
            )
          })}
        </NavbarMenu>
      </Navbar>

      {/* Desktop sidebar */}
      <nav className="fixed bottom-0 left-0 top-0 hidden h-screen w-24 flex-col items-center justify-between bg-content1 py-4 lg:flex">
        <div className="flex flex-col gap-8">
          <Link href={ROUTES.HOME} className="text-2xl font-bold text-foreground">
            <BrandingLogo width={56} height={56} src={IMAGES.LOGO} />
          </Link>

          <ul className="flex flex-col gap-8">
            {links.map((link) => {
              const { name, href } = link
              const LinkIcon = link.icon

              const isActive =
                link.name === 'Settings' ? isSubRoute(pathName, Object.values(SETTINGS_ROUTES)) : pathName === link.href

              return (
                <li
                  key={name}
                  className={`${isActive ? 'rounded-xxs bg-primary' : ''} flex h-[56px] w-[56px] items-center justify-center`}
                >
                  <Link href={href} className="flex h-full w-full items-center justify-center">
                    <LinkIcon color={`${isActive ? systemColors.white : systemColors.primary}`} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <Button isIconOnly disabled={true} className="bg-transparent">
          <LogoutIcon color={systemColors.primary} />
        </Button>
      </nav>
    </>
  )
}

export default SideNav
