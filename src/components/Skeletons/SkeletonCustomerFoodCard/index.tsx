import { Card, Skeleton } from '@nextui-org/react'

const SkeletonCustomerFoodCard = () => {
  return (
    <Card className="relative h-[260px] w-full overflow-visible rounded-sm bg-content1 p-4 shadow-none">
      {/* Skeleton image */}
      <Skeleton className="absolute -top-10 left-1/2 z-20 h-32 w-32 -translate-x-1/2 rounded-full" />

      {/* Skeleton info */}
      <div className="mt-20 flex w-full flex-grow flex-col items-center justify-around">
        {/* Skeleton name */}
        <div className="flex w-full flex-col items-center gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <Skeleton key={index} className={`${index === 0 ? 'w-4/5' : 'w-3/5'} h-3 rounded-lg`} />
          ))}
        </div>

        {/* Skeleton price, quantity, button */}
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={index}
            className={`${index !== 2 ? 'h-3 rounded-lg' : 'h-8 rounded-xxs'} ${index !== 0 ? 'w-4/5' : 'w-1/5'}`}
          />
        ))}
      </div>
    </Card>
  )
}

export default SkeletonCustomerFoodCard
