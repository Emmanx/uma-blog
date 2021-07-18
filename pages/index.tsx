import { Box, Button, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import { ContentWrapper, Footer, Header, PostCard, PostCardWide } from '../components/layout'
import { TPagination, TPost } from '../types/post'

import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { TNavigation } from '../types/layout'
import { getNavigation } from '../queries/layout'
import { getPosts } from '../queries/post'
import { usePagination } from '../hooks/usePagination'

type Props = {
  posts: TPost[]
  navigation: TNavigation[]
  pagination: TPagination
}

const Home = ({ posts, navigation, pagination }: Props) => {
  const {
    data,
    loading,
    pages,
    page,
    hasNextPage,
    hasPrevPage,
    goToNextPage,
    goToPrevPage
  } = usePagination(posts, pagination)

  console.log(data)

  const firstPost = data[0]
  const secondRow = data.slice(1, 3)
  const thirdRow = data.slice(3)

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
        <HStack spacing="2rem" justify="center">
          <Button
            borderRadius="3.5rem"
            variant="outlineBlack"
            isDisabled={!hasPrevPage || loading}
            onClick={goToPrevPage}>
            Previous
          </Button>
          <Text fontSize="1.6rem" fontWeight="600">
            {page}/{pages}
          </Text>
          <Button
            borderRadius="3.5rem"
            variant="outlineBlack"
            isDisabled={!hasNextPage || loading}
            onClick={goToNextPage}>
            Next
          </Button>
        </HStack>
      </ContentWrapper>
      <Footer />
    </Box>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPosts(1)
  const navigation = await getNavigation()

  if (!data?.posts || !navigation) {
    return {
      notFound: true
    }
  }

  return {
    props: { posts: data.posts, pagination: data.meta.pagination, navigation }
  }
}
