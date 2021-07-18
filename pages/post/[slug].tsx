import { Box, Container, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Footer, Header, PostCard } from '../../components/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPost, getPosts } from '../../queries/post'

import React from 'react'
import { TNavigation } from '../../types/layout'
import { TPost } from '../../types/post'
import { getNavigation } from '../../queries/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'

type Props = {
  post: TPost
  relatedArticles: TPost[]
  navigation: TNavigation[]
}

const post = ({ post, navigation, relatedArticles }: Props) => {
  return (
    <Box>
      <Header navigation={navigation} />

      <Box mt="10rem">
        <Container maxW="82rem">
          <HStack fontSize="1.6rem" spacing="3.5rem">
            <Text
              key={post.primary_tag?.id}
              textTransform="uppercase"
              color="brand.red"
              fontSize="1.3rem"
              mr="5px"
              fontWeight="600">
              {post.primary_tag?.name || 'Uncategorized'}
            </Text>
            <Text>{new Date(post.created_at).toDateString()}</Text>
          </HStack>
          <Heading
            as="h1"
            fontSize={{ base: '2.8rem', md: '4.8rem' }}
            fontWeight="400"
            mt="5px"
            lineHeight={{ base: '3.85rem', md: '6.6rem' }}
            fontFamily="Halyard Display SemiBold">
            {post.title}
          </Heading>
          <Text fontSize={{ base: '1.4rem', md: '1.6rem' }} color="#425466" mt="1.2rem">
            {post.excerpt}
          </Text>
        </Container>
        <Image
          w="100%"
          maxW="144rem"
          mx="auto"
          src={post.feature_image || '/images/post.png'}
          my="5rem"
        />
        <Container maxW="82rem" mb="15rem">
          <HTMLWrapper>{parse(post.html)}</HTMLWrapper>

          <Box w="100%" h="1px" bg="#EDF2F7" my="4rem" />

          <Flex
            justify={{ base: 'center', md: 'space-between' }}
            align="center"
            flexDir={{ base: 'column', md: 'row' }}>
            <HStack spacing={{ base: '0', md: '2.2rem' }} flexDir={{ base: 'column', md: 'row' }}>
              <Image
                src={post.primary_author?.profile_image || '/images/author.png'}
                w="5rem"
                h="5rem"
                borderRadius="50%"
              />
              <Text fontSize="1.6rem">{post.primary_author?.name}</Text>
            </HStack>
            <HStack spacing="2.2rem" mt={{ base: '4.5rem', md: '0' }}>
              <Text fontSize="1.6rem">Share:</Text>
              <HStack spacing="2rem">
                <IconBox icon="/icons/youtube-white.svg" />
                <IconBox icon="/icons/discord-white.svg" />
                <IconBox icon="/icons/discord-white.svg" />
              </HStack>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {relatedArticles?.length > 0 && (
        <Box w="100%" bg="#F7FAFC" pt="3.5rem" pb="6.5rem">
          <Container maxW="114rem">
            <Heading fontSize="3.6rem">Related Articles</Heading>

            <Flex mt="6rem" wrap="wrap" justify="space-between">
              {relatedArticles.map((post) => (
                <PostCard key={post.id} post={post} width="31%" />
              ))}
            </Flex>
          </Container>
        </Box>
      )}

      <Footer />
    </Box>
  )
}

export default post

const HTMLWrapper = styled(Box)`
  p {
    font-size: 1.6rem;
    color: #425466;
    margin-bottom: 2rem;
  }

  ul {
    font-size: 1.6rem;
    color: #425466;
    margin-bottom: 2rem;
  }

  h1,
  h2,
  h3 {
    font-weight: bold;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }
`

type IconBoxProps = {
  icon: string
}

const IconBox = ({ icon }: IconBoxProps) => {
  return (
    <Flex justify="center" align="center" w="5rem" h="5rem" bg="#000" borderRadius="50%">
      <Image src={icon} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const postSlug = context.params?.slug as string
  const post = await getPost(postSlug)
  const navigation = await getNavigation()

  if (!post || !navigation) {
    return {
      notFound: true
    }
  }

  const relatedArticlesData = await getPosts(1, post.primary_tag?.slug, 3)

  return {
    props: { post, relatedArticles: relatedArticlesData.posts, navigation }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getPosts(1)

  const paths = posts.map((post: TPost) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: 'blocking' }
}
