// Libs
import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

// Themes
import { customColors, customContainer, customDarkThemeColors, customFontSizes, customRadiuses } from './src/themes'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: customColors,
      fontSize: customFontSizes,
      borderRadius: customRadiuses,
      container: customContainer
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: customDarkThemeColors
        }
      }
    })
  ]
}
export default config
