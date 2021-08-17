/* eslint-disable @typescript-eslint/no-explicit-any */
import { HStack, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import Select from 'react-select'
import { TPost } from '../../types/post'
import { getAllPosts } from '../../queries/post'
import { useRouter } from 'next/dist/client/router'

export const Search = () => {
  const router = useRouter()
  const [allPosts, setAllPosts] = useState<TPost[]>([])

  useEffect(() => {
    ;(async () => {
      const { posts } = await getAllPosts()
      setAllPosts(posts)
    })()
  })

  const goToPost = (slected: any) => {
    router.push(`/post/${slected.value}`)
  }

  return (
    <HStack>
      <Image w="2rem" src="/icons/search.svg" />
      <Select
        placeholder="Search blog..."
        value={{
          value: '',
          label: 'Search blog...'
        }}
        onChange={goToPost}
        options={allPosts.map((post) => ({
          value: post.slug,
          label: `${post.title}`
        }))}
        styles={{
          menu: (provided: any) => ({
            ...provided,
            zIndex: '200',
            background: '#fff'
          }),
          menuList: (provided: any) => ({
            ...provided,
            maxHeight: '25rem',
            width: '27rem',
            zIndex: '200',
            background: '#fff'
          }),
          control: () => ({
            border: 'none',
            height: '4rem',
            color: '#718096',
            display: 'flex',
            alignItems: 'center',
            width: '15rem'
          }),
          option: (provided: any) => ({
            ...provided,
            color: '#000',
            fontSize: '1.2rem'
          }),
          singleValue: (provided: any) => ({
            ...provided,
            color: '#718096'
          }),
          dropdownIndicator: () => ({
            display: 'none'
          }),
          indicatorSeparator: () => ({
            display: 'none'
          })
        }}
      />
    </HStack>
  )
}
