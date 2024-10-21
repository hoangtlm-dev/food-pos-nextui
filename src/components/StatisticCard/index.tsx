// Libs
import { ReactNode } from 'react'

// Types
import { CurrencyUnit } from '@/types'

// Themes
import { accentColors } from '@/themes'

// Components
import { ArrowDownIcon, ArrowUpIcon } from '@/components'

// Utils
import { formatNumberWithCommas, roundToTwoDecimalsString } from '@/utils'

interface IStatisticCardProps {
  icon: ReactNode
  isIncreasing?: boolean
  currencyUnit?: CurrencyUnit
  developmentNumber: number
  statisticNumber: number
  statisticDescription: string
}

const StatisticCard = ({
  icon,
  isIncreasing = true,
  currencyUnit,
  developmentNumber,
  statisticNumber,
  statisticDescription
}: IStatisticCardProps) => {
  return (
    <div className="flex h-full w-full flex-col justify-evenly gap-4 rounded-xxs bg-content1 p-6">
      <div className="flex items-center gap-4">
        <div className="bg-primaryBg rounded-xxs p-2">{icon}</div>
        <span className={`${developmentNumber > 0 ? 'text-accent-green' : 'text-accent-red'} text-xxs`}>
          {roundToTwoDecimalsString(developmentNumber)}%
        </span>
        <div className={`${isIncreasing ? 'bg-accent-green/20' : 'bg-accent-red/20'} rounded-full p-1`}>
          {isIncreasing ? (
            <ArrowUpIcon color={accentColors['accent-green']} width={14} height={14} />
          ) : (
            <ArrowDownIcon color={accentColors['accent-red']} width={14} height={14} />
          )}
        </div>
      </div>
      <h2 className="text-lg font-semibold">
        {currencyUnit}
        {formatNumberWithCommas(statisticNumber)}
      </h2>
      <p className="text-xs font-medium text-light-primary">{statisticDescription}</p>
    </div>
  )
}

export default StatisticCard
