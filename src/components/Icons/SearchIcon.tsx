// Constants
import { ICONS } from '@/constants'

// Types
import { IIconProps } from '@/types'

const DashboardIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.16667 6.66667C2.16667 3.90917 4.40917 1.66667 7.16667 1.66667C9.92417 1.66667 12.1667 3.90917 12.1667 6.66667C12.1667 9.42417 9.92417 11.6667 7.16667 11.6667C4.40917 11.6667 2.16667 9.42417 2.16667 6.66667ZM15.2558 13.5775L12.4267 10.7475C13.3042 9.61917 13.8333 8.205 13.8333 6.66667C13.8333 2.99083 10.8425 0 7.16667 0C3.49083 0 0.5 2.99083 0.5 6.66667C0.5 10.3425 3.49083 13.3333 7.16667 13.3333C8.705 13.3333 10.1192 12.8042 11.2475 11.9267L14.0775 14.7558C14.24 14.9183 14.4533 15 14.6667 15C14.88 15 15.0933 14.9183 15.2558 14.7558C15.5817 14.43 15.5817 13.9033 15.2558 13.5775Z"
        fill={color}
      />
    </svg>
  )
}

export default DashboardIcon
