// Constants
import { PLACEHOLDERS } from '@/constants'

// Components
import { Input, SearchIcon } from '@/components'

// Themes
import { systemColors } from '@/themes'

interface ISearchProps {
  placeholder?: string
}

const Search = ({ placeholder = PLACEHOLDERS.DEFAULT_SEARCH_PLACEHOLDER }: ISearchProps) => {
  return (
    <Input type="text" placeholder={placeholder} startContent={<SearchIcon color={systemColors.white} />} size="lg" />
  )
}

export default Search
