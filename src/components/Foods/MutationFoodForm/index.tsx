'use client'

// Libs
import { useState } from 'react'
import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, SelectItem } from '@nextui-org/react'
import NextImage from 'next/image'

// Types
import { Food } from '@/types'

// Mocks
import { MOCK_CATEGORIES } from '@/mocks'

// Themes
import { systemColors } from '@/themes'

// Components
import { Input, PlusIcon, Select } from '@/components'

interface IMutationFoodFormProps {
  data?: Food
  isOpen: boolean
  onClose: () => void
}

const MutationFoodForm = ({ data, isOpen, onClose }: IMutationFoodFormProps) => {
  const [previewImage, setPreviewImage] = useState<string | undefined>(data?.imageUrl)

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setPreviewImage(String(reader.result))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside" className="bg-content1">
      <ModalContent>
        <ModalHeader className="text-md">{data?.id ? 'Edit dish' : 'Add new dish'}</ModalHeader>
        <ModalBody>
          <form className="flex flex-col items-center gap-2">
            {/* Food's image */}
            <div className="relative mb-4">
              <Input
                type="file"
                accept="image/*"
                className="hidden"
                id="image-upload"
                labelPlacement="outside"
                onChange={handleFileInputChange}
              />
              <div className="relative">
                <div className="h-40 w-40 overflow-hidden rounded-full border-1 border-dark-input">
                  {previewImage && (
                    <div className="relative h-full w-full">
                      <Image
                        as={NextImage}
                        src={previewImage}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        width={160}
                        height={160}
                      />
                    </div>
                  )}
                </div>
                <label
                  htmlFor="image-upload"
                  className="absolute bottom-2 right-2 z-10 cursor-pointer rounded-full bg-content2 p-2 shadow-md hover:bg-content2/80"
                >
                  <PlusIcon width={18} height={18} color={systemColors.primary} />
                </label>
              </div>
            </div>

            {/* Food's name */}
            <Input label="Name" value={data?.name} className="mb-4" labelPlacement="outside" />

            {/* Food's category */}
            <Select
              label="Category"
              placeholder="Select a category"
              className="mb-4"
              labelPlacement="outside"
              value={String(data?.categoryId)}
            >
              {MOCK_CATEGORIES.map((category) => {
                const { id, name } = category
                return (
                  <SelectItem key={data?.categoryId || id} value={data?.categoryId || id}>
                    {data?.categoryName || name}
                  </SelectItem>
                )
              })}
            </Select>

            {/* Food's price */}
            <Input type="number" label="Price" value={String(data?.price)} className="mb-4" labelPlacement="outside" />

            {/* Food's quantity */}
            <Input
              type="number"
              label="Quantity"
              value={String(data?.quantity)}
              className="mb-4"
              labelPlacement="outside"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" variant="bordered" className="text-primary" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" className="text-white" type="submit">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default MutationFoodForm
