'use client'

// Libs
import { Button, useDisclosure } from '@nextui-org/react'

// Themes
import { systemColors } from '@/themes'

// Components
import { MutationFoodForm, PlusIcon } from '@/components'

const AddFoodCard = () => {
  const {
    isOpen: isMutationFormOpen,
    onOpen: onMutationFormOpen,
    onClose: onMutationFormClose
  } = useDisclosure({
    defaultOpen: false
  })

  return (
    <>
      <Button
        className="bg-secondaryBg h-[320px] w-full items-center justify-center gap-4 border border-dashed border-primary shadow-none hover:opacity-80"
        onClick={onMutationFormOpen}
      >
        <PlusIcon color={systemColors.primary} />
        <span className="text-sm font-semibold text-primary">Add new dish</span>
      </Button>

      <MutationFoodForm isOpen={isMutationFormOpen} onClose={onMutationFormClose} />
    </>
  )
}

export default AddFoodCard
