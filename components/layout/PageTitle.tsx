import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import React from 'react'

type Props = {
  title: string
  description: string | null
}

export const PageTitle = ({ title, description }: Props) => {
  return (
    <Flex w="100%" justify="center" pt="9rem" pb="8rem">
      <Box textAlign="center">
        <Heading as="h1" fontSize={{ base: '2.8rem', md: '3.6rem' }} fontWeight="400">
          {title}
        </Heading>
        <Text fontSize="1.6rem" color="#425466" mt="1rem">
          {description}
        </Text>
      </Box>
    </Flex>
  )
}
