'use client'

// Libs
import { extendVariants, Tabs as NextUITabs } from '@nextui-org/react'

export const Tabs = extendVariants(NextUITabs, {
  variants: {
    styles: {
      default: {
        tabList: 'gap-8 w-full rounded-none p-0 border-b border-dark-line',
        cursor: 'w-full bg-primary',
        tab: 'max-w-fit px-0 h-12',
        tabContent: 'group-data-[selected=true]:text-primary text-xss font-bold'
      }
    }
  },
  defaultVariants: {
    styles: 'default',
    variant: 'underlined'
  }
})
