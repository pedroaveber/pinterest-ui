import { forwardRef } from 'react'
import { Text, View } from 'react-native'

import BottomSheet from '@gorhom/bottom-sheet'
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { MenuButton } from './menu-button'

interface MenuProps {
  onClose: () => void
}

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      backgroundStyle={{ backgroundColor: colors.gray[800] }}
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
    >
      <View className="flex-1 items-center">
        <View className="px-6 flex-row justify-center w-full bg-gray-800">
          <FontAwesome
            color={colors.white}
            name="close"
            size={24}
            onPress={onClose}
          />
          <Text className="font-medium text-center mr-6 text-white flex-1 text-lg">
            Comece a criar agora
          </Text>
        </View>

        <View className="flex-row gap-4 mt-8">
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  )
})
Menu.displayName = 'Menu'
