import { TPagination, TPost } from '../types/post'

import { getPosts } from '../queries/post'
import { toast } from 'react-toast'
import { useBoolean } from '@chakra-ui/react'
import { useState } from 'react'

export const usePagination = (initialPosts: TPost[], initialPageData: TPagination) => {
  const [pagination, setPagination] = useState(initialPageData)
  const [posts, setPosts] = useState(initialPosts)
  const [loading, toggleLoading] = useBoolean(false)

  const goToNextPage = async () => {
    try {
      window.scroll(0, 0)
      toggleLoading.on()
      const newPage = pagination.page + 1
      const data = await getPosts(newPage)
      setPagination(data.meta.pagination)
      setPosts(data.posts)
      toggleLoading.off()
    } catch (error) {
      toast.error('Error refreshing posts')
    }
  }

  const goToPrevPage = async () => {
    try {
      window.scroll(0, 0)
      toggleLoading.on()
      const newPage = pagination.page - 1
      const data = await getPosts(newPage)
      setPagination(data.meta.pagination)
      setPosts(data.posts)
      toggleLoading.off()
    } catch (error) {
      toast.error('Error refreshing posts')
    }
  }

  return {
    data: posts,
    page: pagination.page,
    pages: pagination.pages,
    goToNextPage,
    goToPrevPage,
    hasNextPage: Boolean(pagination.next),
    hasPrevPage: Boolean(pagination.prev),
    loading
  }
}
