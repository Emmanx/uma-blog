import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import React from 'react'

export const PageTitle: React.FC = () => {
  return (
    <Flex w="100%" justify="center" pt="9rem" pb="8rem">
      <Box textAlign="center">
        <Heading as="h1" fontSize={{ base: '2.8rem', md: '3.6rem' }} fontWeight="400">
          Page Title
        </Heading>
        <Text fontSize="1.6rem" color="#425466" mt="1rem">
          Where the SuperUMA community shares long form articles, thoughts, and ideas.
        </Text>
      </Box>
    </Flex>
  )
}
