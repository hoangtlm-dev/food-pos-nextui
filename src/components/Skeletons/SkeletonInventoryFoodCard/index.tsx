// Libs
import { Fragment } from 'react'
import { Card, Skeleton } from '@nextui-org/react'

const SkeletonInventoryFoodCard = () => {
  return (
    <Card className="bg-content relative h-[320px] w-full min-w-[220px] flex-col items-center gap-4 rounded-sm border border-dark-line p-4 shadow-none">
      {/* Skeleton image */}
      <Skeleton className="h-[132px] w-[132px] rounded-full" />

      {/* Skeleton name */}
      <div className="flex w-full flex-col items-center gap-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton key={index} className={`${index === 0 ? 'w-4/5' : 'w-3/5'} h-4 rounded-lg`} />
        ))}
      </div>

      {/* Skeleton price, quantity*/}
      <div className="flex items-center gap-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Fragment key={index}>
            <Skeleton className="h-4 w-9 rounded-lg" />
            {index === 0 && <span className="font-semibold text-dark-secondary">•</span>}
          </Fragment>
        ))}
      </div>

      {/* Skeleton button */}
      <div className="absolute bottom-0 left-0 right-0 flex h-14 items-center justify-center border-t border-t-dark-line">
        <Skeleton className="h-4 w-1/2 rounded-xxs" />
      </div>
    </Card>
  )
}

export default SkeletonInventoryFoodCard
