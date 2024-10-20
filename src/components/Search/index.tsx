// Constants
import { PLACEHOLDERS } from '@/constants'

// Components
import { Input, SearchIcon } from '@/components'

// Themes
import { systemColors } from '@/themes'

interface ISearchProps {
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Search = ({
  placeholder = PLACEHOLDERS.DEFAULT_SEARCH_PLACEHOLDER,
  size = 'md',
  className = ''
}: ISearchProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      size={size}
      startContent={<SearchIcon width={18} height={16} color={systemColors.white} />}
      className={className}
    />
  )
}

export default Search
