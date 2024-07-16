import { Tabs } from 'expo-router'
import BottomSheet from '@gorhom/bottom-sheet'
import { Foundation, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Avatar } from '@/components/avatar'
import { Menu } from '@/components/menu'
import { View } from 'react-native'
import { useRef } from 'react'

export default function TabsLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.gray[600],
          tabBarStyle: {
            backgroundColor: colors.black,
            borderColor: colors.black,
            borderTopColor: colors.black,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="plus" color={color} size={size} />
            ),
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault()
              handleBottomSheetOpen()
            },
          })}
        />

        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-ellipses" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                selected={color === colors.white}
                source={{ uri: 'https://github.com/pedroalbertoveber.png' }}
              />
            ),
          }}
        />
      </Tabs>

      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose} />
    </View>
  )
}
