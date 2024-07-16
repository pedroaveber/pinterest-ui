import { colors } from '@/styles/colors'
import { FontAwesome } from '@expo/vector-icons'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface MenuButtonProps extends PressableProps {
  title: string
  icon: keyof typeof FontAwesome.glyphMap
}

export function MenuButton({ title, icon, ...props }: MenuButtonProps) {
  return (
    <Pressable {...props} className="items-center">
      <View className="p-6 rounded-3xl bg-gray-700">
        <FontAwesome color={colors.white} name={icon} size={32} />
      </View>
      <Text className="text-white font-medium text-sm mt-2.5">{title}</Text>
    </Pressable>
  )
}
