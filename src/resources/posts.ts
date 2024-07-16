import { faker } from '@faker-js/faker'

export const POSTS = Array.from({ length: 25 }).map(() => ({
  id: faker.string.uuid(),
  title: faker.lorem.words({ min: 2, max: 5 }),
  image: faker.image.url(),
}))
