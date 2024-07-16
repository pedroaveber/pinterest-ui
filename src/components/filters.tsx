import { FlatList } from 'react-native'

import { Filter } from '@/components/filter'

interface FiltersProps {
  filter: string
  filters: string[]
  onChange: (filter: string) => void
}

export function Filters({ filter, filters, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          isSelected={filter === item}
          onPress={() => onChange(item)}
        />
      )}
      className="pb-4 max-h-12"
      contentContainerClassName="gap-4 px-2"
    />
  )
}
