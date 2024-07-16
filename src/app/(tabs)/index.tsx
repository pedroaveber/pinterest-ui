import { Filters } from '@/components/filters'
import { Posts } from '@/components/posts'
import { FILTERS } from '@/resources/filters'
import { useState } from 'react'
import { View } from 'react-native'
import { POSTS } from '@/resources/posts'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0])

  return (
    <View className="flex-1 p-3 pt-16 bg-black">
      <Filters
        filter={activeFilter}
        filters={FILTERS}
        onChange={setActiveFilter}
      />

      <Posts posts={POSTS} />
    </View>
  )
}
