import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'

// Styles
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      nextjs: {
        appDirectory: true
      }
    },
    layout: 'centered'
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'dark'
    })
  ],
  tags: ['autodocs']
}

export default preview
