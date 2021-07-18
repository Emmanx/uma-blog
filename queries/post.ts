import { api } from '../config/ghost'

export const getPosts = async () => {
  return await api.posts
    .browse({
      limit: 'all',
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
