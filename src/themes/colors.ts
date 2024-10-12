export const systemColors = {
  primary: '#ea7c69',
  white: '#ffffff',
  gray: '#898989'
}

export const darkColors = {
  'dark-primary': '#252836',
  'dark-secondary': '#1f1d2b',
  'dark-line': '#393c49',
  'dark-icon': '#3b5162',
  'dark-input': '#2d303e'
}

export const lightColors = {
  'light-primary': '#abbbc2',
  'light-secondary': '#e0e6e9'
}

export const accentColors = {
  'accent-green': '#50d1aa',
  'accent-red': '#ff7ca3',
  'accent-orange': '#ffb572',
  'accent-blue': '#65b0f6',
  'accent-purple': '#9290fe'
}

export const customColors = {
  ...systemColors,
  ...darkColors,
  ...lightColors,
  ...accentColors
}

export const customDarkThemeColors = {
  background: darkColors['dark-primary'],
  foreground: systemColors.white,
  content1: darkColors['dark-secondary']
}
