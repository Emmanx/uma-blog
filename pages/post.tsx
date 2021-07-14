import { Box, Heading, Text } from '@chakra-ui/react'

import React from 'react'

const post = () => {
  return (
    <Box>
      <Text textTransform="uppercase" color="brand.red" fontSize="1.6rem">
        Community
      </Text>
      <Heading as="h3" fontSize="2.4rem" fontWeight="400" mt="5px" lineHeight="3.6rem">
        Page Title
      </Heading>
    </Box>
  )
}

export default post
