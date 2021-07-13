import { Box, Flex, HStack, Image, Input, Link, VStack } from '@chakra-ui/react'

import NextLink from 'next/link'
import { ROUTES } from '../../config/routes'
import React from 'react'

type Props = {
  close: () => void
}

export const MobileMenu: (props: Props) => JSX.Element = ({ close }) => {
  return (
    <Box w="100%" h="100vh" pos="fixed" top="0" left="0" bg="#fff" px="3rem" py="5rem">
      <Flex justify="flex-end">
        <Image w="8rem" src="/icons/ham-close.svg" onClick={close} />
      </Flex>
      <HStack mt="3.5rem">
        <Image src="/icons/search.svg" />
        <Input
          placeholder="Search blog..."
          fontSize="1.4rem"
          color="#718096"
          h="4rem"
          border="none"
          _focus={{
            border: 'none'
          }}
        />
      </HStack>
      <VStack spacing="3rem" align="flex-start" mt="4.5rem">
        {ROUTES.map((route, i) => (
          <NextLink href={route.path} key={i}>
            <Link fontSize="1.4rem">{route.name}</Link>
          </NextLink>
        ))}
      </VStack>
    </Box>
  )
}
