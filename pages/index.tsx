import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { ContentWrapper, Footer, Header, PostCard, PostCardWide } from '../components/layout'

import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { TNavigation } from '../types/layout'
import { TPost } from '../types/post'
import { getNavigation } from '../queries/layout'
import { getPosts } from '../queries/post'

type Props = {
  posts: TPost[]
  navigation: TNavigation[]
}

const Home = ({ posts, navigation }: Props) => {
  const firstPost = posts[0]
  const secondRow = posts.slice(1, 3)
  const thirdRow = posts.slice(3)

  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Header navigation={navigation} />

      <Flex w="100%" justify="center" pt="9rem" pb="8rem">
        <Box textAlign="center">
          <Heading as="h1" fontSize={{ base: '2.8rem', md: '3.6rem' }} fontWeight="400">
            Everything Super
            <Text as="span" color="brand.red">
              UMA
            </Text>
            n
          </Heading>
          <Text fontSize="1.6rem" color="#425466" mt="1rem" maxW="55.5rem">
            Where the SuperUMA community shares long form articles, thoughts, and ideas.
          </Text>
        </Box>
      </Flex>

      <ContentWrapper>
        <PostCardWide post={firstPost} />
        <Flex mt="7rem" wrap="wrap" justify="space-between">
          {secondRow.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Flex>
        <Flex mt="7rem" wrap="wrap" justify="space-between">
          {thirdRow.map((post) => (
            <PostCard key={post.id} post={post} width="31%" />
          ))}
        </Flex>
      </ContentWrapper>
      <Footer />
    </Box>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()
  const navigation = await getNavigation()

  if (!posts || !navigation) {
    return {
      notFound: true
    }
  }

  return {
    props: { posts, navigation }
  }
}
