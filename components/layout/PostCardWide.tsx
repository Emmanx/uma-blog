import { Box, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'

import React from 'react'

export const PostCardWide: React.FC = () => {
  return (
    <Flex flexDir={{ base: 'column', md: 'row' }}>
      <Box w={{ base: '100%', md: '55%', lg: '58rem' }}>
        <Image w="100%" borderRadius="1rem" src="/images/blog0.png" />
      </Box>
      <Box flex="1" pl={{ base: '0', md: '4rem' }} h="100%" mt={{ base: '2rem', md: '0' }}>
        <Text textTransform="uppercase" color="brand.red" fontSize="1.6rem">
          Community
        </Text>
        <Heading as="h3" fontSize="2.4rem" fontWeight="400" mt="5px" lineHeight="3.6rem">
          Page Title
        </Heading>
        <Text fontSize="1.6rem" color="#425466" mt="1.2rem">
          Introducing Fluffy - an ultra-light client for Ethereum What we are talking about building
          here is the perfect client for a wallet. An ultra-light client that contributes to the
          network and does not require syncing.
        </Text>
        <HStack mt={{ base: '2rem', md: '5rem' }} align="center">
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
    </Flex>
  )
}
