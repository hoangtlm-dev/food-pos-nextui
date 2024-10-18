// Constants
import { PLACEHOLDERS } from '@/constants'

// Components
import { Input, SearchIcon } from '@/components'

// Themes
import { systemColors } from '@/themes'

interface ISearchProps {
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
}

const Search = ({ placeholder = PLACEHOLDERS.DEFAULT_SEARCH_PLACEHOLDER, size = 'md' }: ISearchProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      size={size}
      startContent={<SearchIcon width={18} height={16} color={systemColors.white} />}
    />
  )
}

export default Search
