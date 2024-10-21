'use client'

// Libs
import { extendVariants, Select as NextUISelect } from '@nextui-org/react'

export const Select = extendVariants(NextUISelect, {
  variants: {
    styles: {
      default: {
        mainWrapper: 'bg-content1 border border-dark-line h-auto rounded-xxs',
        trigger: 'border-none',
        popoverContent: 'bg-content1'
      }
    }
  },
  defaultVariants: {
    styles: 'default',
    variant: 'bordered',
    size: 'md'
  }
})
