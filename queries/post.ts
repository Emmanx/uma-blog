import { api } from '../config/ghost'
import { instance } from '../config/axios'

export const getPosts = async (page: number, tag?: string) => {
  let URL = `/posts/?key=${process.env.NEXT_PUBLIC_GHOST_KEY}&include=tags,authors&limit=12&page=${page}`

  if (tag)
    URL += `&filter=tag:${tag}
  `
  const { data } = await instance(URL)
  return data
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
  try {
    const { data } = await instance(`/tags/?key=${process.env.NEXT_PUBLIC_GHOST_KEY}`)
    return data.tags
  } catch (error) {
    console.log(error.response.data.errors)
  }
}

export const getTag = async (slug: string) => {
  try {
    const { data } = await instance(`/tags/slug/${slug}/?key=${process.env.NEXT_PUBLIC_GHOST_KEY}`)
    return data.tags[0]
  } catch (error) {
    console.log(error.response.data.errors)
  }
}
