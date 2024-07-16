import { cn } from '@/lib/cn'
import { Image, ImageProps } from 'react-native'

interface AvatarProps extends ImageProps {
  selected: boolean
}

export function Avatar({ selected, className, ...props }: AvatarProps) {
  return (
    <Image
      className={cn(
        'size-[30px] rounded-[25px]',
        selected && 'border-[2px] border-white',
        className,
      )}
      alt={props.alt}
      {...props}
    />
  )
}
