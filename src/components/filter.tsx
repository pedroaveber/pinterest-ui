import { cn } from '@/lib/cn'
import { Pressable, PressableProps, Text } from 'react-native'

interface FilterProps extends PressableProps {
  filter: string
  isSelected: boolean
}

export function Filter({ isSelected, filter, ...props }: FilterProps) {
  return (
    <Pressable
      {...props}
      className={cn(isSelected && 'border-b-[4px] border-white')}
    >
      <Text
        className={cn('text-white font-medium text-base', isSelected && '')}
      >
        {filter}
      </Text>
    </Pressable>
  )
}
