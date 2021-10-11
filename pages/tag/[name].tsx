import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { ContentWrapper, Footer, Header, PageTitle, PostCard } from '../../components/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import { TPagination, TPost, TTag } from '../../types/post'
import { getPosts, getTag, getTags } from '../../queries/post'

import Head from 'next/head'
import { TNavigation } from '../../types/layout'
import { getNavigation } from '../../queries/layout'
import { usePagination } from '../../hooks/usePagination'

type Props = {
  tag: TTag
  posts: TPost[]
  navigation: TNavigation[]
  pagination: TPagination
}

const Home = ({ tag, posts, navigation, pagination }: Props) => {
  const {
    data,
    setPosts,
    loading,
    pages,
    page,
    hasNextPage,
    hasPrevPage,
    goToNextPage,
    goToPrevPage
  } = usePagination(posts, pagination)

  useEffect(() => {
    setPosts(posts)
  }, [posts])

  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Header navigation={navigation} />

      <PageTitle title={tag.name} description={tag.description} />

      <ContentWrapper>
        <Flex mt="7rem" wrap="wrap">
          {data.map((post) => (
            <PostCard key={post.id} post={post} width="33%" />
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const tagSlug = ctx.params?.name as string

  const data = await getPosts(1, tagSlug)
  const navigation = await getNavigation()
  const tag = await getTag(tagSlug)

  if (!data?.posts || !navigation || !tag) {
    return {
      notFound: true
    }
  }

  return {
    revalidate: 1000,
    props: { posts: data.posts, pagination: data.meta.pagination, navigation, tag }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getTags()

  const paths = tags.map((tag: TTag) => ({
    params: { name: tag.slug }
  }))

  return { paths, fallback: 'blocking' }
}
