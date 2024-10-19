// Libs
import { Button, Card } from '@nextui-org/react'

// Themes
import { systemColors } from '@/themes'

// Components
import { PlusIcon } from '@/components'

const AddFoodCard = () => {
  return (
    <Card
      as={Button}
      className="bg-secondaryBg h-[320px] w-full min-w-[220px] items-center justify-center gap-4 border border-dashed border-primary shadow-none hover:opacity-80"
    >
      <PlusIcon color={systemColors.primary} />
      <span className="text-sm font-semibold text-primary">Add new dish</span>
    </Card>
  )
}

export default AddFoodCard
