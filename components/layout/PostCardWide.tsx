import { Box, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'

import NextLink from 'next/link'
import React from 'react'
import { TPost } from '../../types/post'
import { truncateString } from '../../utils/post'

type Props = {
  post: TPost
}

export const PostCardWide = ({ post }: Props) => {
  return (
    <Flex flexDir={{ base: 'column', md: 'row' }}>
      <Box w={{ base: '100%', md: '55%' }}>
        <Image w="100%" borderRadius="1rem" src={post.feature_image} />
      </Box>
      <Box
        w={{ base: '100%', md: '45%' }}
        pl={{ base: '0', md: '4rem' }}
        h="100%"
        mt={{ base: '2rem', md: '0' }}>
        <Text
          key={post.primary_tag?.id}
          textTransform="uppercase"
          color="brand.red"
          fontSize="1.3rem"
          mr="5px"
          fontWeight="600">
          {post.primary_tag?.name}
        </Text>
        <NextLink href="/post">
          <Heading
            as="h3"
            fontSize="2.4rem"
            fontWeight="bold"
            mt="5px"
            lineHeight="3.6rem"
            letterSpacing="1px">
            {post.title}
          </Heading>
        </NextLink>
        <Text fontSize="1.6rem" color="#425466" mt="1.2rem">
          {truncateString(post.excerpt, 200)}
        </Text>
        <HStack mt={{ base: '2rem', md: '5rem' }} align="center">
          <Image
            w="4.5rem"
            h="4.5rem"
            borderRadius="50%"
            src={post.primary_author.profile_image || '/images/author.png'}
            mr="1.5rem"
          />
          <Heading as="h6" fontSize="1.4rem" fontWeight="400" lineHeight="2.1rem">
            {post.primary_author?.name}
          </Heading>
          <Image w="4px" src="/icons/dot.svg" mx="8px" />
          <Heading
            fontFamily="headingBook"
            as="h6"
            fontSize="1.4rem"
            fontWeight="400"
            lineHeight="2.1rem">
            {new Date(post.created_at).toDateString()}
          </Heading>
        </HStack>
      </Box>
    </Flex>
  )
}
