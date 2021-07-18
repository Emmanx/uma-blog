import { api } from '../config/ghost'

export const getPosts = async (filter?: string[], limit?: number) => {
  return await api.posts
    .browse({
      limit: limit || 'all',
      filter,
      include: ['tags', 'authors']
    })
    .catch((err) => {
      console.error(err)
    })
}

export const getPost = async (slug: string) => {
  const posts = await api.posts
    .browse({
      limit: 1,
      filter: [`slug:${slug}`],
      include: ['tags', 'authors']
    })
    .catch((err) => {
      console.error(err)
    })

  // @ts-expect-error
  return posts[0]
}

export const getTags = async () => {
  return await api.tags
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      console.error(err)
    })
}

export const getTag = async (slug: string) => {
  return await api.tags
    .read({
      slug
    })
    .catch((err) => {
      console.error(err)
    })
}
