import { Box, Flex } from '@chakra-ui/react'
import {
  ContentWrapper,
  Footer,
  Header,
  PageTitle,
  PostCard,
  PostCardWide
} from '../../components/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TPost, TTag } from '../../types/post'
import { getPosts, getTag, getTags } from '../../queries/post'

import Head from 'next/head'
import React from 'react'
import { TNavigation } from '../../types/layout'
import { getNavigation } from '../../queries/layout'

type Props = {
  tag: TTag
  posts: TPost[]
  navigation: TNavigation[]
}

const Home = ({ tag, posts, navigation }: Props) => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Header navigation={navigation} />

      <PageTitle title={tag.name} description={tag.description} />

      <ContentWrapper>
        <Flex mt="7rem" wrap="wrap" justify="space-between">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} width="31%" />
          ))}
        </Flex>
      </ContentWrapper>
      <Footer />
    </Box>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const tagSlug = context.params?.name as string
  const posts = await getPosts([`tag:${tagSlug}`])
  const navigation = await getNavigation()
  const tag = await getTag(tagSlug)

  if (!posts || !navigation || !tag) {
    return {
      notFound: true
    }
  }

  return {
    props: { tag, posts, navigation }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = (await getTags()) as TTag[]

  const paths = tags.map((tag: TTag) => ({
    params: { name: tag.name }
  }))

  return { paths, fallback: 'blocking' }
}
