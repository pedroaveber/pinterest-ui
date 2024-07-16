import { ScrollView, View } from 'react-native'
import { Post } from './post'
import { POSTS } from '@/resources/posts'

interface PostsProps {
  posts: typeof POSTS
}

export function Posts({ posts }: PostsProps) {
  function postsByColumn(column: 'right' | 'left') {
    const rest = column === 'left' ? 0 : 1

    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => (
        <Post key={post.id} title={post.title} image={post.image} />
      ))
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mt-4">
      <View className="flex-1 flex-row gap-4">
        <View className="flex-1 gap-2">{postsByColumn('left')}</View>
        <View className="flex-1 gap-2">{postsByColumn('right')}</View>
      </View>
    </ScrollView>
  )
}
