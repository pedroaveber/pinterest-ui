import { useEffect, useState } from 'react'
import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'

interface PostProps {
  title: string
  image: string
}

export function Post({ image, title }: PostProps) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  }, [])

  return (
    <View className="flex-1">
      <Image
        className="w-full rounded-3xl"
        style={{ aspectRatio }}
        source={{ uri: image }}
        alt={title}
      />

      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-sm text-white font-bold">{title}</Text>
        <Feather name="more-horizontal" size={16} color={colors.white} />
      </View>
    </View>
  )
}
