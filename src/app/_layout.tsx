/* eslint-disable camelcase */
import '@/styles/global.css'

import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <GestureHandlerRootView className="flex-1 bg-gray-800">
      <StatusBar barStyle="light-content" />
      <Slot />
    </GestureHandlerRootView>
  )
}
