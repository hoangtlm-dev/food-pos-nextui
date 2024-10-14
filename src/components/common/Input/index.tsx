'use client'

import { extendVariants, Input as NextUIInput } from '@nextui-org/react'

export const Input = extendVariants(NextUIInput, {
  variants: {
    color: {
      default: {
        inputWrapper: 'bg-dark-input border-dark-line',
        input: '!text-light-primary'
      }
    },
    size: {
      md: {
        inputWrapper: 'h-auto py-2',
        input: 'h-auto text-xs',
        errorMessage: 'text-sm'
      }
    },
    radius: {
      sm: {
        inputWrapper: 'rounded-xss'
      }
    },
    border: {
      default: {
        inputWrapper: 'border'
      }
    }
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    radius: 'sm',
    border: 'default',
    isClearable: 'true'
  }
})
