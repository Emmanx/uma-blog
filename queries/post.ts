import { api } from '../config/ghost'

export const getPosts = async (filter?: string[]) => {
  return await api.posts
    .browse({
      limit: 'all',
      filter,
      include: ['tags', 'authors']
    })
    .catch((err) => {
      console.error(err)
    })
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
