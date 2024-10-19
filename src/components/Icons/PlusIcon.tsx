// Constants
import { ICONS } from '@/constants'

// Types
import { IIconProps } from '@/types'

const PlusIcon = ({
  color = ICONS.DEFAULT_COLOR,
  width = ICONS.DEFAULT_WIDTH,
  height = ICONS.DEFAULT_HEIGHT
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.5V9M9 16.5V9M9 9H16.5M9 9H1.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PlusIcon
