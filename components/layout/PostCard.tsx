import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react'

import NextLink from 'next/link'
import React from 'react'
import { TPost } from '../../types/post'

type Props = {
  post: TPost
}

export const PostCard = ({ post }: Props) => {
  return (
    <Box w={{ base: '100%', md: '48%' }} mb="7rem">
      <Image w="100%" borderRadius="1rem" src={post.feature_image} />
      <Box w="100%" mt="2rem">
        <Text textTransform="uppercase" color="brand.red" fontSize="1.6rem">
          Community
        </Text>
        <NextLink href="/post">
          <Heading as="h3" fontSize="2.4rem" fontWeight="400" mt="5px" lineHeight="3.6rem">
            {post.title}
          </Heading>
        </NextLink>
        <Text fontSize="1.6rem" color="#425466" mt="1.2rem">
          {post.excerpt}
        </Text>
        <HStack mt="2rem" align="center">
          <Image w="4.5rem" h="4.5rem" borderRadius="50%" src="/images/author.png" mr="1.5rem" />
          <Heading as="h6" fontSize="1.4rem" fontWeight="400" lineHeight="2.1rem">
            Author Name
          </Heading>
          <Image w="4px" src="/icons/dot.svg" mx="8px" />
          <Heading
            fontFamily="headingBook"
            as="h6"
            fontSize="1.4rem"
            fontWeight="400"
            lineHeight="2.1rem">
            June 30, 2021
          </Heading>
        </HStack>
      </Box>
    </Box>
  )
}
