import { Box, Flex } from '@chakra-ui/react'
import { ContentWrapper, PageTitle, PostCard, PostCardWide } from '../components/layout'

import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { TPost } from '../types/post'
import { getPosts } from '../queries/post'

type Props = {
  posts: TPost[]
}

const Home = ({ posts }: Props) => {
  console.log(posts)

  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <PageTitle />
      <ContentWrapper>
        <PostCardWide />
        <Flex mt="7rem" wrap="wrap" justify="space-between">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Flex>
      </ContentWrapper>
    </Box>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true
    }
  }

  return {
    props: { posts }
  }
}
