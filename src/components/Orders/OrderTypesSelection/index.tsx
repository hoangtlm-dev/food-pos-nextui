// Libs
import { SelectItem } from '@nextui-org/react'

// Mocks
import { MOCK_ORDER_TYPES } from '@/mocks'

// Components
import { Select } from '@/components'

interface IOrderTypeSelectionProps {
  className?: string
}

const OrderTypesSelection = ({ className }: IOrderTypeSelectionProps) => {
  // TODO: Fetch order types

  // TODO: Handle change order types and update url

  return (
    <Select className={className} placeholder={String(MOCK_ORDER_TYPES[0].name)}>
      {MOCK_ORDER_TYPES.map((orderType) => {
        const { id, name } = orderType

        return <SelectItem key={id}>{name}</SelectItem>
      })}
    </Select>
  )
}

export default OrderTypesSelection
